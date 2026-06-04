const STATE_PATH = "resource-scheduler/state.json";
const MAX_BODY_SIZE = 5 * 1024 * 1024;

function validState(state) {
  return state &&
    typeof state === "object" &&
    Array.isArray(state.bookings) &&
    Array.isArray(state.scores) &&
    state.completionOverrides &&
    typeof state.completionOverrides === "object" &&
    Array.isArray(state.removedStudents);
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    if (req.method === "GET") {
      res.status(200).json({ state: null, storage: "not-configured" });
      return;
    }
    res.status(503).json({ error: "Shared storage is not configured." });
    return;
  }

  const { get, put } = await import("@vercel/blob");

  if (req.method === "GET") {
    try {
      const blob = await get(STATE_PATH, { access: "private" });
      if (!blob) {
        res.status(200).json({ state: null });
        return;
      }
      const text = await new Response(blob.stream).text();
      res.status(200).json({ state: JSON.parse(text) });
    } catch (error) {
      console.error("State read failed:", error);
      res.status(500).json({ error: "Shared state could not be loaded." });
    }
    return;
  }

  if (req.method === "PUT") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      if (!validState(body)) {
        res.status(400).json({ error: "Invalid scheduler state." });
        return;
      }
      const serialized = JSON.stringify(body);
      if (Buffer.byteLength(serialized) > MAX_BODY_SIZE) {
        res.status(413).json({ error: "Scheduler state is too large." });
        return;
      }
      body.serverUpdatedAt = new Date().toISOString();
      await put(STATE_PATH, JSON.stringify(body), {
        access: "private",
        allowOverwrite: true,
        contentType: "application/json",
        cacheControlMaxAge: 0
      });
      res.status(200).json({ ok: true, serverUpdatedAt: body.serverUpdatedAt });
    } catch (error) {
      console.error("State save failed:", error);
      res.status(500).json({ error: "Shared state could not be saved." });
    }
    return;
  }

  res.setHeader("Allow", "GET, PUT");
  res.status(405).json({ error: "Method not allowed." });
};
