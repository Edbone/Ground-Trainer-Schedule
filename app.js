const STORAGE_KEY = "vr-training-scheduler-v1";
const INITIAL_DATA_VERSION = 2;
const resources = {
  ground1: { title: "Ground Trainer 1", type: "VR Simulator", color: "#1769c2", text: "#ffffff" },
  ground2: { title: "Ground Trainer 2", type: "VR Simulator", color: "#f2bd31", text: "#14233a" },
  flight: { title: "Flight Test Room", type: "Testing Facility", color: "#124d91", text: "#ffffff" }
};
const PERSON_NAME_ALIASES = new Map([
  ["christian feliz", "Cristian Feliz"],
  ["cristian feliz", "Cristian Feliz"],
  ["fernado neves", "Fernando Neves"],
  ["fernando neves", "Fernando Neves"],
  ["jeffey garrity", "Jeffrey Garrity"],
  ["jeffery garrity", "Jeffrey Garrity"],
  ["jeffrey garrity", "Jeffrey Garrity"],
  ["pim van usen", "Pim Van Usen"],
  ["sam trawick", "Sam Trawick"],
  ["ethan winkler", "Ethan Winkler"],
  ["saif hussein", "Saif Hussein"]
]);

let state = loadState();
let activeView = "ground1";
let weekStart = startOfWeek(new Date());
let dragData = null;
let suppressBookingClick = false;
let serverSaveTimer = null;
let serverAvailable = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

initialize();

async function initialize() {
  populateTimeOptions();
  bindEvents();
  await loadServerState();
  renderSchedule();
  renderScores();
  saveState();
  window.setInterval(refreshServerState, 15000);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { bookings: [], scores: [] };
    saved.bookings ||= [];
    saved.scores ||= [];
    saved.completionOverrides ||= {};
    saved.removedStudents ||= [];
    if (saved.initialDataVersion !== INITIAL_DATA_VERSION) {
      const seedIds = new Set(INITIAL_SCORES.map((score) => score.id));
      saved.scores = saved.scores.filter((score) => !seedIds.has(score.id));
      const removedStudents = new Set(saved.removedStudents);
      saved.scores.push(...INITIAL_SCORES.filter((score) => !removedStudents.has(canonicalPersonName(score.name).toLowerCase())));
      saved.initialDataVersion = INITIAL_DATA_VERSION;
    }
    return saved;
  } catch {
    return { bookings: [], scores: [...INITIAL_SCORES], completionOverrides: {}, removedStudents: [], initialDataVersion: INITIAL_DATA_VERSION };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleServerSave();
}

async function loadServerState() {
  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    if (!response.ok) throw new Error("Server unavailable");
    const payload = await response.json();
    serverAvailable = true;
    setSyncStatus("Shared", "online");
    if (payload.state) {
      state = normalizeLoadedState(payload.state);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  } catch {
    serverAvailable = false;
    setSyncStatus("Local only", "offline");
  }
}

function normalizeLoadedState(saved) {
  saved.bookings ||= [];
  saved.scores ||= [];
  saved.completionOverrides ||= {};
  saved.removedStudents ||= [];
  return saved;
}

function scheduleServerSave() {
  if (!serverAvailable) return;
  setSyncStatus("Saving...", "saving");
  clearTimeout(serverSaveTimer);
  serverSaveTimer = setTimeout(saveServerState, 500);
}

async function saveServerState() {
  serverSaveTimer = null;
  try {
    const response = await fetch("/api/state", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    });
    if (!response.ok) throw new Error("Save failed");
    const payload = await response.json();
    state.serverUpdatedAt = payload.serverUpdatedAt;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    serverAvailable = true;
    setSyncStatus("Saved", "online");
  } catch {
    serverAvailable = false;
    setSyncStatus("Local only", "offline");
  }
}

async function refreshServerState() {
  if (!serverAvailable || document.querySelector("dialog[open]") || serverSaveTimer) return;
  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    const payload = await response.json();
    if (payload.state?.serverUpdatedAt && payload.state.serverUpdatedAt !== state.serverUpdatedAt) {
      state = normalizeLoadedState(payload.state);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      renderSchedule();
      renderScores();
    }
    setSyncStatus("Shared", "online");
  } catch {
    serverAvailable = false;
    setSyncStatus("Local only", "offline");
  }
}

function setSyncStatus(label, className) {
  const status = $("#syncStatus");
  status.textContent = label;
  status.className = className;
}

function bindEvents() {
  $$(".tab").forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  $("#prevWeek").addEventListener("click", () => moveWeek(-7));
  $("#nextWeek").addEventListener("click", () => moveWeek(7));
  $("#thisWeek").addEventListener("click", () => { weekStart = startOfWeek(new Date()); renderSchedule(); });
  $("#newBookingButton").addEventListener("click", () => openBookingDialog());
  $("#bookingForm").addEventListener("submit", saveBooking);
  $("#deleteBooking").addEventListener("click", deleteBooking);
  $("#addScoreButton").addEventListener("click", openScoreDialog);
  $("#scoreForm").addEventListener("submit", saveScore);
  $("#pasteScoresButton").addEventListener("click", openImportDialog);
  $("#importText").addEventListener("input", renderImportPreview);
  $("#importForm").addEventListener("submit", importScores);
  $("#scoreSearch").addEventListener("input", renderScores);
  $("#scheduleSearch").addEventListener("input", renderScheduleSearch);
  $("#scheduleSearch").addEventListener("focus", renderScheduleSearch);
  document.addEventListener("click", closeScheduleSearch);
  $("#bookingName").addEventListener("change", normalizePersonName);
  $("#scoreName").addEventListener("change", normalizePersonName);
  $$("[data-close]").forEach((button) => button.addEventListener("click", () => $("#" + button.dataset.close).close()));
}

function switchView(view) {
  activeView = view;
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  const isScores = view === "scores";
  $("#scheduleView").classList.toggle("hidden", isScores);
  $("#scoresView").classList.toggle("hidden", !isScores);
  if (isScores) {
    document.documentElement.style.setProperty("--green", "#1769c2");
    document.documentElement.style.setProperty("--accent-text", "#ffffff");
    renderScores();
  }
  else renderSchedule();
}

function moveWeek(days) {
  weekStart = addDays(weekStart, days);
  renderSchedule();
}

function renderSchedule() {
  if (activeView === "scores") return;
  const resource = resources[activeView];
  $("#resourceTitle").textContent = resource.title;
  $("#resourceType").textContent = resource.type;
  $("#weekLabel").textContent = weekRangeLabel(weekStart);
  document.documentElement.style.setProperty("--green", resource.color);
  document.documentElement.style.setProperty("--accent-text", resource.text);

  const grid = $("#scheduleGrid");
  grid.innerHTML = '<div class="grid-corner"></div>';
  const days = Array.from({ length: 7 }, (_, index) => addDays(weekStart, index));

  days.forEach((day) => {
    const header = document.createElement("div");
    header.className = "day-header" + (isSameDay(day, new Date()) ? " today" : "");
    header.innerHTML = `<span>${formatDate(day, { weekday: "short" })}</span><strong>${day.getDate()}</strong>`;
    grid.append(header);
  });

  for (let minutes = 360; minutes < 1350; minutes += 30) {
    const label = document.createElement("div");
    label.className = "time-label" + (minutes % 60 === 0 ? " hour" : "");
    label.textContent = minutes % 60 === 0 ? timeLabel(minutes) : "·";
    grid.append(label);

    days.forEach((day) => {
      const date = dateKey(day);
      const booking = bookingAt(activeView, date, minutes);
      const slot = document.createElement("button");
      slot.className = "slot";
      slot.type = "button";
      slot.dataset.date = date;
      slot.dataset.minutes = minutes;
      slot.title = `${formatDate(day, { weekday: "long", month: "short", day: "numeric" })} at ${timeLabel(minutes)}`;

      if (booking) {
        const start = booking.start === minutes;
        const end = booking.start + booking.duration === minutes + 30;
        slot.classList.add("booked");
        if (start) slot.classList.add("booking-start");
        if (end) slot.classList.add("booking-end");
        slot.style.background = resource.color;
        slot.style.color = resource.text;
        slot.draggable = true;
        slot.dataset.bookingId = booking.id;
        if (start) {
          slot.innerHTML = `<span class="booking-copy">${escapeHtml(booking.name)}<small>${timeLabel(booking.start)}–${timeLabel(booking.start + booking.duration)}</small></span>`;
        }
        if (end) {
          const handle = document.createElement("span");
          handle.className = "resize-handle";
          handle.title = "Drag to change reservation length";
          handle.addEventListener("pointerdown", (event) => startResize(event, booking));
          slot.append(handle);
        }
        slot.addEventListener("dragstart", (event) => startBookingDrag(event, booking, minutes));
        slot.addEventListener("dragend", endBookingDrag);
        slot.addEventListener("click", () => {
          if (suppressBookingClick) return;
          openBookingDialog(booking);
        });
      } else {
        slot.addEventListener("click", () => openBookingDialog(null, date, minutes));
      }
      slot.addEventListener("dragover", allowBookingDrop);
      slot.addEventListener("dragleave", () => slot.classList.remove("drag-over"));
      slot.addEventListener("drop", dropBooking);
      grid.append(slot);
    });
  }
}

function renderScheduleSearch() {
  const query = $("#scheduleSearch").value.trim().toLowerCase();
  const results = $("#scheduleSearchResults");
  if (!query) {
    results.classList.add("hidden");
    results.innerHTML = "";
    return;
  }
  const matches = state.bookings
    .filter((booking) => {
      const haystack = [
        booking.name,
        booking.notes,
        booking.date,
        resources[booking.resource]?.title
      ].join(" ").toLowerCase();
      return haystack.includes(query);
    })
    .sort((a, b) => a.date.localeCompare(b.date) || a.start - b.start)
    .slice(0, 30);

  results.innerHTML = matches.length
    ? matches.map((booking) => `
      <button class="schedule-result" type="button" data-search-booking="${booking.id}">
        <strong>${escapeHtml(booking.name)}</strong>
        <span>${escapeHtml(resources[booking.resource]?.title || booking.resource)}</span>
        <small>${formatDate(parseDate(booking.date), { weekday: "short", month: "short", day: "numeric", year: "numeric" })} · ${timeLabel(booking.start)}–${timeLabel(booking.start + booking.duration)}${booking.notes ? ` · ${escapeHtml(booking.notes)}` : ""}</small>
      </button>`)
      .join("")
    : '<div class="schedule-result-empty">No matching bookings found.</div>';
  results.classList.remove("hidden");
  $$("[data-search-booking]").forEach((button) => button.addEventListener("click", () => openSearchBooking(button.dataset.searchBooking)));
}

function openSearchBooking(id) {
  const booking = state.bookings.find((item) => item.id === id);
  if (!booking) return;
  activeView = booking.resource;
  weekStart = startOfWeek(parseDate(booking.date));
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === activeView));
  $("#scheduleView").classList.remove("hidden");
  $("#scoresView").classList.add("hidden");
  $("#scheduleSearchResults").classList.add("hidden");
  renderSchedule();
  openBookingDialog(booking);
}

function closeScheduleSearch(event) {
  if (!event.target.closest(".schedule-search")) $("#scheduleSearchResults").classList.add("hidden");
}

function startBookingDrag(event, booking, grabbedMinutes) {
  if (event.target.classList.contains("resize-handle")) {
    event.preventDefault();
    return;
  }
  dragData = { bookingId: booking.id, offset: grabbedMinutes - booking.start };
  event.currentTarget.classList.add("dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", booking.id);
}

function allowBookingDrop(event) {
  if (!dragData) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  event.currentTarget.classList.add("drag-over");
}

function dropBooking(event) {
  event.preventDefault();
  const slot = event.currentTarget;
  slot.classList.remove("drag-over");
  const booking = state.bookings.find((item) => item.id === dragData?.bookingId);
  if (!booking) return;
  const newStart = Number(slot.dataset.minutes) - dragData.offset;
  const updated = { ...booking, date: slot.dataset.date, start: newStart };
  if (!isValidBookingChange(updated)) return;
  Object.assign(booking, updated);
  saveState();
  dragData = null;
  suppressBookingClick = true;
  renderSchedule();
  setTimeout(() => { suppressBookingClick = false; }, 0);
}

function endBookingDrag() {
  dragData = null;
  $$(".dragging, .drag-over").forEach((slot) => slot.classList.remove("dragging", "drag-over"));
}

function startResize(event, booking) {
  event.preventDefault();
  event.stopPropagation();
  const startY = event.clientY;
  const initialDuration = booking.duration;
  const readout = document.createElement("div");
  readout.className = "resize-readout";
  document.body.append(readout);
  document.body.classList.add("resizing");

  const updateReadout = (clientY) => {
    const change = Math.round((clientY - startY) / 34) * 30;
    const duration = Math.max(30, initialDuration + change);
    readout.textContent = `${duration / 60 >= 1 ? `${duration / 60} hr` : `${duration} min`}`;
    readout.style.left = `${event.clientX + 14}px`;
    readout.style.top = `${clientY + 14}px`;
    return duration;
  };
  updateReadout(startY);

  const onMove = (moveEvent) => updateReadout(moveEvent.clientY);
  const onUp = (upEvent) => {
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    document.body.classList.remove("resizing");
    readout.remove();
    const duration = updateResizeDuration(startY, upEvent.clientY, initialDuration);
    const updated = { ...booking, duration };
    if (isValidBookingChange(updated)) {
      booking.duration = duration;
      saveState();
      renderSchedule();
    }
    suppressBookingClick = true;
    setTimeout(() => { suppressBookingClick = false; }, 0);
  };
  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", onUp, { once: true });
}

function updateResizeDuration(startY, endY, initialDuration) {
  return Math.max(30, initialDuration + Math.round((endY - startY) / 34) * 30);
}

function isValidBookingChange(booking) {
  if (booking.start < 360 || booking.start + booking.duration > 1380) {
    alert("Reservations must stay between 6:00 AM and 11:00 PM.");
    return false;
  }
  const conflict = state.bookings.find((item) =>
    item.id !== booking.id &&
    item.resource === booking.resource &&
    item.date === booking.date &&
    booking.start < item.start + item.duration &&
    booking.start + booking.duration > item.start
  );
  if (conflict) {
    alert(`That time conflicts with ${conflict.name} (${timeLabel(conflict.start)}–${timeLabel(conflict.start + conflict.duration)}).`);
    return false;
  }
  return true;
}

function bookingAt(resource, date, minutes) {
  return state.bookings.find((booking) =>
    booking.resource === resource &&
    booking.date === date &&
    minutes >= booking.start &&
    minutes < booking.start + booking.duration
  );
}

function populateTimeOptions() {
  const select = $("#bookingStart");
  for (let minutes = 360; minutes < 1350; minutes += 30) {
    const option = document.createElement("option");
    option.value = minutes;
    option.textContent = timeLabel(minutes);
    select.append(option);
  }
}

function openBookingDialog(booking = null, date = dateKey(new Date()), start = 600) {
  const resource = resources[activeView];
  renderNameSuggestions();
  $("#bookingForm").reset();
  $("#bookingId").value = booking?.id || "";
  $("#bookingName").value = booking?.name || "";
  $("#bookingDate").value = booking?.date || date;
  $("#bookingStart").value = booking?.start ?? start;
  $("#bookingDuration").value = booking?.duration || 60;
  $("#bookingNotes").value = booking?.notes || "";
  $("#bookingResource").textContent = resource.title;
  $("#bookingDialogTitle").textContent = booking ? "Edit booking" : "New booking";
  $("#deleteBooking").classList.toggle("hidden", !booking);
  $("#bookingError").textContent = "";
  $("#bookingDialog").showModal();
  $("#bookingName").focus();
}

function saveBooking(event) {
  event.preventDefault();
  normalizePersonName({ currentTarget: $("#bookingName") });
  const booking = {
    id: $("#bookingId").value || crypto.randomUUID(),
    resource: activeView,
    name: $("#bookingName").value.trim(),
    date: $("#bookingDate").value,
    start: Number($("#bookingStart").value),
    duration: Number($("#bookingDuration").value),
    notes: $("#bookingNotes").value.trim()
  };
  const endsAt = booking.start + booking.duration;
  if (endsAt > 1380) {
    $("#bookingError").textContent = "This booking would end after 11:00 PM.";
    return;
  }
  const conflict = state.bookings.find((item) =>
    item.id !== booking.id &&
    item.resource === booking.resource &&
    item.date === booking.date &&
    booking.start < item.start + item.duration &&
    endsAt > item.start
  );
  if (conflict) {
    $("#bookingError").textContent = `Conflicts with ${conflict.name} (${timeLabel(conflict.start)}–${timeLabel(conflict.start + conflict.duration)}).`;
    return;
  }
  const existingIndex = state.bookings.findIndex((item) => item.id === booking.id);
  if (existingIndex >= 0) state.bookings[existingIndex] = booking;
  else state.bookings.push(booking);
  saveState();
  $("#bookingDialog").close();
  weekStart = startOfWeek(parseDate(booking.date));
  renderSchedule();
}

function deleteBooking() {
  const id = $("#bookingId").value;
  if (!id || !confirm("Delete this booking?")) return;
  state.bookings = state.bookings.filter((booking) => booking.id !== id);
  saveState();
  $("#bookingDialog").close();
  renderSchedule();
}

function openScoreDialog() {
  $("#scoreForm").reset();
  $("#scoreDate").value = dateKey(new Date());
  $("#scoreError").textContent = "";
  renderNameSuggestions();
  $("#scoreDialog").showModal();
  $("#scoreName").focus();
}

function saveScore(event) {
  event.preventDefault();
  normalizePersonName({ currentTarget: $("#scoreName") });
  const name = $("#scoreName").value.trim();
  if (!hasFirstAndLastName(name)) {
    $("#scoreError").textContent = "Enter the student's first and last name.";
    $("#scoreName").focus();
    return;
  }
  const scoreValue = $("#scoreValue").value.trim();
  state.scores.push({
    id: crypto.randomUUID(),
    name,
    score: scoreValue === "" ? null : Number(scoreValue),
    absent: scoreValue === "",
    date: $("#scoreDate").value,
    notes: $("#scoreNotes").value.trim(),
    createdAt: Date.now()
  });
  saveState();
  $("#scoreDialog").close();
  renderScores();
}

function openImportDialog() {
  $("#importForm").reset();
  $("#importPreview").innerHTML = "";
  $("#importSummary").textContent = "Paste your list to preview it.";
  $("#importSummary").classList.remove("has-errors");
  $("#importScoresButton").disabled = true;
  $("#importDialog").showModal();
  $("#importText").focus();
}

function renderImportPreview() {
  const result = parseScoreImport($("#importText").value);
  $("#importScoresButton").disabled = result.valid.length === 0;
  const summary = $("#importSummary");
  if (!result.valid.length && !result.invalid.length) {
    summary.textContent = "Paste your list to preview it.";
    summary.classList.remove("has-errors");
    $("#importPreview").innerHTML = "";
    return;
  }
  summary.textContent = `${result.valid.length} score${result.valid.length === 1 ? "" : "s"} ready to import${result.invalid.length ? ` · ${result.invalid.length} line${result.invalid.length === 1 ? "" : "s"} need attention` : ""}`;
  summary.classList.toggle("has-errors", result.invalid.length > 0);
  $("#importPreview").innerHTML = [
    ...result.valid.map((item) => `
      <div class="preview-row">
        <span>${escapeHtml(item.name)}</span>
        <strong class="${scoreDisplay(item).className}">${scoreDisplay(item).label}</strong>
        <span title="${escapeHtml(item.notes)}">${escapeHtml(item.date)}</span>
      </div>`),
    ...result.invalid.map((item) => `
      <div class="preview-row invalid">
        <strong>Line ${item.line}</strong>
        <span>${escapeHtml(item.reason)}: ${escapeHtml(item.raw)}</span>
      </div>`)
  ].join("");
}

function importScores(event) {
  event.preventDefault();
  const result = parseScoreImport($("#importText").value);
  if (!result.valid.length) return;
  result.valid.forEach((item, index) => {
    state.scores.push({
      id: crypto.randomUUID(),
      name: item.name,
      score: item.score,
      absent: item.absent,
      date: item.date,
      notes: item.notes,
      createdAt: Date.now() + index
    });
  });
  saveState();
  $("#importDialog").close();
  renderScores();
}

function parseScoreImport(text) {
  const valid = [];
  const invalid = [];
  const records = normalizeImportRecords(text);
  records.forEach(({ raw, lineNumber }) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (lineNumber === 1 && /^(name|student)\b/i.test(trimmed)) return;
    const parsed = parseScoreLine(trimmed);
    if (parsed.error) invalid.push({ line: lineNumber, raw, reason: parsed.error });
    else valid.push(parsed);
  });
  return { valid, invalid };
}

function normalizeImportRecords(text) {
  const lines = text.split(/\r?\n/);
  const records = [];
  for (let index = 0; index < lines.length; index += 1) {
    const trimmed = lines[index].trim();
    if (!trimmed) continue;
    if (/^Line \d+$/i.test(trimmed) || /^Date was not recognized:\s*Line \d+$/i.test(trimmed)) continue;

    const reportName = trimmed.match(/^No score found:\s*(.+)$/i);
    const scoreText = lines[index + 1]?.trim() || "";
    const dateText = lines[index + 2]?.trim() || "";
    const isGroupedAttempt = /^(?:Absent|\d{1,3}(?:\.\d+)?%?)$/i.test(scoreText) && normalizeImportDate(dateText);
    if (isGroupedAttempt) {
      const name = reportName?.[1] || trimmed;
      const scoreColumn = /^Absent$/i.test(scoreText) ? "" : scoreText;
      records.push({ raw: `${name}, ${scoreColumn}, ${dateText}`, lineNumber: index + 1 });
      index += 2;
      continue;
    }
    records.push({ raw: trimmed, lineNumber: index + 1 });
  }
  return records;
}

function parseScoreLine(line) {
  const dateMatch = line.match(/\b(\d{1,2}[/-]\d{1,2}[/-](?:\d{2}|\d{4})|\d{4}-\d{2}-\d{2})\b/);
  if (!dateMatch) return { error: "Date was not recognized" };
  const date = normalizeImportDate(dateMatch[1]);
  if (!date) return { error: "Date was not recognized" };

  const beforeDate = line.slice(0, dateMatch.index);
  const leadingScoreMatch = beforeDate.match(/(?:^|[\s,;\t])(\d{1,3}(?:\.\d+)?)(%)?[\s,;\t]*$/);
  const name = cleanImportText(leadingScoreMatch ? beforeDate.slice(0, leadingScoreMatch.index) : beforeDate);
  if (!name) return { error: "No student name found" };

  const afterDate = line.slice(dateMatch.index + dateMatch[0].length);
  const timeMatch = afterDate.match(/^\s*[\t,; ]*(\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM)?)/i);
  const afterTime = timeMatch ? afterDate.slice(timeMatch[0].length) : afterDate;
  const trailingScoreMatch = afterTime.match(/(?:^|[\s,;\t])(\d{1,3}(?:\.\d+)?)(%)?(?=$|[\s,;\t])/);
  const scoreMatch = leadingScoreMatch || trailingScoreMatch;
  const score = scoreMatch ? Number(scoreMatch[1]) : null;
  if (score !== null && (score < 0 || score > 100)) return { error: "Score must be from 0 to 100" };

  const beforeScore = trailingScoreMatch ? afterTime.slice(0, trailingScoreMatch.index) : afterTime;
  const afterScore = trailingScoreMatch ? afterTime.slice(trailingScoreMatch.index + trailingScoreMatch[0].length) : "";
  const details = [cleanImportText(beforeScore), cleanImportText(afterScore)].filter(Boolean);
  const notesPrefix = score === null ? "Absent · Bulk import" : "Bulk import";
  return {
    name,
    score,
    absent: score === null,
    date,
    notes: details.length ? `${notesPrefix} · ${details.join(" · ")}` : notesPrefix
  };
}

function cleanImportText(value) {
  return value.replace(/^[\s,;\t]+|[\s,;\t]+$/g, "").replace(/\s+/g, " ").trim();
}

function normalizeImportDate(value) {
  const cleaned = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(cleaned)) {
    const date = parseDate(cleaned);
    return isValidDateParts(date, cleaned) ? cleaned : "";
  }
  const match = cleaned.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2}|\d{4})$/);
  if (!match) return "";
  const year = Number(match[3].length === 2 ? `20${match[3]}` : match[3]);
  const date = new Date(year, Number(match[1]) - 1, Number(match[2]));
  const normalized = dateKey(date);
  return date.getFullYear() === year && date.getMonth() === Number(match[1]) - 1 && date.getDate() === Number(match[2]) ? normalized : "";
}

function isValidDateParts(date, value) {
  return !Number.isNaN(date.getTime()) && dateKey(date) === value;
}

function renderScores() {
  const groups = scoreGroups();
  const query = $("#scoreSearch").value.trim().toLowerCase();
  const filtered = groups.filter((group) => group.name.toLowerCase().includes(query));
  const passed = groups.filter((group) => studentQualificationStatus(group).passed).length;
  $("#studentCount").textContent = groups.length;
  $("#passedCount").textContent = passed;
  $("#trainingCount").textContent = groups.length - passed;
  $("#scoreEmpty").classList.toggle("hidden", groups.length > 0 || query.length > 0);

  $("#studentList").innerHTML = filtered.map((group) => {
    const status = studentQualificationStatus(group);
    const displayStreak = status.passed ? 3 : status.streak;
    const attempts = group.attempts.map((attempt) => `
      <div class="attempt" title="${escapeHtml(attempt.notes || "No notes")}">
        <span>${formatDate(parseDate(attempt.date), { month: "short", day: "numeric" })}</span>
        <strong class="${scoreDisplay(attempt).className}">${scoreDisplay(attempt).label}</strong>
        <button type="button" data-delete-score="${attempt.id}" aria-label="Delete score">×</button>
      </div>`).join("");
    return `
      <article class="student-card">
        <div class="student-summary">
          <div class="student-name">
            <strong>${escapeHtml(group.name)}</strong>
            <span>${group.attempts.length} attempt${group.attempts.length === 1 ? "" : "s"} recorded</span>
          </div>
          <div class="streak">
            <div class="streak-label"><span>${status.passed ? "Qualification complete" : "Current 90+ streak"}</span><span>${displayStreak}/3</span></div>
            <div class="streak-dots">${[1, 2, 3].map((n) => `<i class="${n <= displayStreak ? "hit" : ""}"></i>`).join("")}</div>
          </div>
          <div class="status-control">
            <span class="status-pill ${status.passed ? "passed" : "training"}">${status.passed ? "Qualified" : "Training"}</span>
            ${status.automaticPassed
              ? ""
              : `<button class="complete-button ${status.manualPassed ? "undo" : ""}" type="button" data-toggle-complete="${escapeHtml(group.name)}">${status.manualPassed ? "Undo complete" : "Mark complete"}</button>`}
            <button class="remove-student-button" type="button" data-remove-student="${escapeHtml(group.name)}">Remove student</button>
          </div>
        </div>
        <div class="attempts">${attempts}</div>
      </article>`;
  }).join("");

  $$("[data-delete-score]").forEach((button) => button.addEventListener("click", () => deleteScore(button.dataset.deleteScore)));
  $$("[data-toggle-complete]").forEach((button) => button.addEventListener("click", () => toggleStudentComplete(button.dataset.toggleComplete)));
  $$("[data-remove-student]").forEach((button) => button.addEventListener("click", () => removeStudent(button.dataset.removeStudent)));
}

function deleteScore(id) {
  if (!confirm("Delete this score attempt?")) return;
  state.scores = state.scores.filter((score) => score.id !== id);
  saveState();
  renderScores();
}

function scoreGroups() {
  const byName = new Map();
  state.scores.forEach((attempt) => {
    const name = canonicalPersonName(attempt.name);
    const key = name.toLowerCase();
    if (!byName.has(key)) byName.set(key, { name, attempts: [] });
    byName.get(key).attempts.push(attempt);
  });
  return [...byName.values()]
    .map((group) => ({ ...group, attempts: group.attempts.sort((a, b) => a.date.localeCompare(b.date) || a.createdAt - b.createdAt) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function qualificationStatus(attempts) {
  let streak = 0;
  let passed = false;
  attempts.forEach((attempt) => {
    streak = attempt.score >= 90 ? streak + 1 : 0;
    if (streak >= 3) passed = true;
  });
  return { streak: Math.min(streak, 3), passed };
}

function studentQualificationStatus(group) {
  const automatic = qualificationStatus(group.attempts);
  const manualPassed = state.completionOverrides[canonicalPersonName(group.name).toLowerCase()] === true;
  return { ...automatic, automaticPassed: automatic.passed, manualPassed, passed: automatic.passed || manualPassed };
}

function toggleStudentComplete(name) {
  const key = canonicalPersonName(name).toLowerCase();
  if (state.completionOverrides[key]) delete state.completionOverrides[key];
  else state.completionOverrides[key] = true;
  saveState();
  renderScores();
}

function removeStudent(name) {
  const canonicalName = canonicalPersonName(name);
  const key = canonicalName.toLowerCase();
  if (!confirm(`Remove ${canonicalName} and all of their written-test history? This will not remove simulator or room bookings.`)) return;
  state.scores = state.scores.filter((score) => canonicalPersonName(score.name).toLowerCase() !== key);
  delete state.completionOverrides[key];
  if (!state.removedStudents.includes(key)) state.removedStudents.push(key);
  saveState();
  renderScores();
}

function scoreDisplay(attempt) {
  if (attempt.score === null) {
    return attempt.absent === false
      ? { className: "no-score", label: "No score" }
      : { className: "absent", label: "Absent" };
  }
  return {
    className: attempt.score >= 90 ? "pass" : "fail",
    label: `${attempt.score}%`
  };
}

function uniqueStudents() {
  return scoreGroups().map((group) => group.name);
}

function allPersonNames() {
  const names = new Map();
  [...state.scores, ...state.bookings].forEach((record) => {
    const name = canonicalPersonName(record.name);
    if (name && !names.has(name.toLowerCase())) names.set(name.toLowerCase(), name);
  });
  return [...names.values()].sort((a, b) => a.localeCompare(b));
}

function renderNameSuggestions() {
  $("#personNames").innerHTML = allPersonNames()
    .map((name) => `<option value="${escapeHtml(name)}"></option>`)
    .join("");
}

function normalizePersonName(event) {
  const input = event.currentTarget;
  const typed = input.value.trim();
  const knownName = allPersonNames().find((name) => name.toLowerCase() === typed.toLowerCase());
  input.value = knownName || canonicalPersonName(typed);
}

function canonicalPersonName(value) {
  const cleaned = String(value || "").trim().replace(/\s+/g, " ");
  if (!cleaned) return "";
  return PERSON_NAME_ALIASES.get(cleaned.toLowerCase()) || cleaned;
}

function hasFirstAndLastName(value) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  return parts.length >= 2 && parts.every((part) => /[A-Za-z]/.test(part));
}

function startOfWeek(date) {
  const result = new Date(date);
  const day = result.getDay();
  result.setDate(result.getDate() - (day === 0 ? 6 : day - 1));
  result.setHours(0, 0, 0, 0);
  return result;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isSameDay(a, b) {
  return dateKey(a) === dateKey(b);
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function weekRangeLabel(start) {
  const end = addDays(start, 6);
  if (start.getMonth() === end.getMonth()) {
    return `${formatDate(start, { month: "long" })} ${start.getDate()}–${end.getDate()}, ${end.getFullYear()}`;
  }
  return `${formatDate(start, { month: "short", day: "numeric" })} – ${formatDate(end, { month: "short", day: "numeric", year: "numeric" })}`;
}

function timeLabel(minutes) {
  const hour = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(mins).padStart(2, "0")} ${suffix}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
