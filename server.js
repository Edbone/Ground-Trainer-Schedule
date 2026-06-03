const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, "data");
const STATE_FILE = path.join(DATA_DIR, "state.json");
const MAX_BODY_SIZE = 5 * 1024 * 1024;
const STATIC_FILES = new Set([
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/initial-scores.js",
  "/aoa-logo.png"
]);

fs.mkdirSync(DATA_DIR, { recursive: true });

function send(res, status, body, contentType = "application/json; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": contentType.startsWith("text/html") ? "no-cache" : "public, max-age=300"
  });
  res.end(body);
}

function readState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
  } catch {
    return null;
  }
}

function writeState(state) {
  const temporaryFile = `${STATE_FILE}.tmp`;
  fs.writeFileSync(temporaryFile, JSON.stringify(state, null, 2));
  fs.renameSync(temporaryFile, STATE_FILE);
}

function validState(state) {
  return state &&
    typeof state === "object" &&
    Array.isArray(state.bookings) &&
    Array.isArray(state.scores) &&
    state.completionOverrides &&
    typeof state.completionOverrides === "object" &&
    Array.isArray(state.removedStudents);
}

function handleStateWrite(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
    if (Buffer.byteLength(body) > MAX_BODY_SIZE) req.destroy();
  });
  req.on("end", () => {
    try {
      const state = JSON.parse(body);
      if (!validState(state)) {
        send(res, 400, JSON.stringify({ error: "Invalid scheduler state." }));
        return;
      }
      state.serverUpdatedAt = new Date().toISOString();
      writeState(state);
      send(res, 200, JSON.stringify({ ok: true, serverUpdatedAt: state.serverUpdatedAt }));
    } catch {
      send(res, 400, JSON.stringify({ error: "State could not be saved." }));
    }
  });
}

function serveStatic(urlPath, res) {
  if (!STATIC_FILES.has(urlPath)) {
    send(res, 404, "Not found", "text/plain; charset=utf-8");
    return;
  }
  const relativePath = urlPath === "/" ? "index.html" : urlPath.slice(1);
  const filePath = path.join(ROOT, relativePath);
  const extension = path.extname(filePath);
  const contentTypes = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".png": "image/png"
  };
  fs.readFile(filePath, (error, contents) => {
    if (error) send(res, 404, "Not found", "text/plain; charset=utf-8");
    else send(res, 200, contents, contentTypes[extension] || "application/octet-stream");
  });
}

const server = http.createServer((req, res) => {
  const urlPath = new URL(req.url, `http://${req.headers.host || "localhost"}`).pathname;
  if (urlPath === "/api/state" && req.method === "GET") {
    send(res, 200, JSON.stringify({ state: readState() }));
    return;
  }
  if (urlPath === "/api/state" && req.method === "PUT") {
    handleStateWrite(req, res);
    return;
  }
  if (req.method !== "GET") {
    send(res, 405, JSON.stringify({ error: "Method not allowed." }));
    return;
  }
  serveStatic(urlPath, res);
});

server.listen(PORT, () => {
  console.log(`Resource Scheduler running at http://localhost:${PORT}`);
  console.log(`Shared data file: ${STATE_FILE}`);
});
