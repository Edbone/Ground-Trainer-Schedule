const STORAGE_KEY = "vr-training-scheduler-v1";
const resources = {
  ground1: { title: "Ground Trainer 1", type: "VR Simulator", color: "#087858" },
  ground2: { title: "Ground Trainer 2", type: "VR Simulator", color: "#3979cc" },
  flight: { title: "Flight Test Room", type: "Testing Facility", color: "#c48717" }
};

const state = loadState();
let activeView = "ground1";
let weekStart = startOfWeek(new Date());

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

initialize();

function initialize() {
  $("#todayLabel").textContent = formatDate(new Date(), { weekday: "short", month: "short", day: "numeric" });
  populateTimeOptions();
  bindEvents();
  renderSchedule();
  renderScores();
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { bookings: [], scores: [] };
  } catch {
    return { bookings: [], scores: [] };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  $("#scoreSearch").addEventListener("input", renderScores);
  $$("[data-close]").forEach((button) => button.addEventListener("click", () => $("#" + button.dataset.close).close()));
}

function switchView(view) {
  activeView = view;
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  const isScores = view === "scores";
  $("#scheduleView").classList.toggle("hidden", isScores);
  $("#scoresView").classList.toggle("hidden", !isScores);
  if (isScores) {
    document.documentElement.style.setProperty("--green", "#087858");
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
      slot.title = `${formatDate(day, { weekday: "long", month: "short", day: "numeric" })} at ${timeLabel(minutes)}`;

      if (booking) {
        const start = booking.start === minutes;
        const end = booking.start + booking.duration === minutes + 30;
        slot.classList.add("booked");
        if (start) slot.classList.add("booking-start");
        if (end) slot.classList.add("booking-end");
        slot.style.background = resource.color;
        if (start) {
          slot.innerHTML = `<span class="booking-copy">${escapeHtml(booking.name)}<small>${timeLabel(booking.start)}–${timeLabel(booking.start + booking.duration)}</small></span>`;
        }
        slot.addEventListener("click", () => openBookingDialog(booking));
      } else {
        slot.addEventListener("click", () => openBookingDialog(null, date, minutes));
      }
      grid.append(slot);
    });
  }
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
  const names = uniqueStudents();
  $("#studentNames").innerHTML = names.map((name) => `<option value="${escapeHtml(name)}"></option>`).join("");
  $("#scoreDialog").showModal();
  $("#scoreName").focus();
}

function saveScore(event) {
  event.preventDefault();
  state.scores.push({
    id: crypto.randomUUID(),
    name: $("#scoreName").value.trim(),
    score: Number($("#scoreValue").value),
    date: $("#scoreDate").value,
    notes: $("#scoreNotes").value.trim(),
    createdAt: Date.now()
  });
  saveState();
  $("#scoreDialog").close();
  renderScores();
}

function renderScores() {
  const groups = scoreGroups();
  const query = $("#scoreSearch").value.trim().toLowerCase();
  const filtered = groups.filter((group) => group.name.toLowerCase().includes(query));
  const passed = groups.filter((group) => qualificationStatus(group.attempts).passed).length;
  $("#studentCount").textContent = groups.length;
  $("#passedCount").textContent = passed;
  $("#trainingCount").textContent = groups.length - passed;
  $("#scoreEmpty").classList.toggle("hidden", groups.length > 0 || query.length > 0);

  $("#studentList").innerHTML = filtered.map((group) => {
    const status = qualificationStatus(group.attempts);
    const attempts = group.attempts.map((attempt) => `
      <div class="attempt" title="${escapeHtml(attempt.notes || "No notes")}">
        <span>${formatDate(parseDate(attempt.date), { month: "short", day: "numeric" })}</span>
        <strong class="${attempt.score >= 90 ? "pass" : "fail"}">${attempt.score}%</strong>
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
            <div class="streak-label"><span>Current 90+ streak</span><span>${status.streak}/3</span></div>
            <div class="streak-dots">${[1, 2, 3].map((n) => `<i class="${n <= status.streak ? "hit" : ""}"></i>`).join("")}</div>
          </div>
          <span class="status-pill ${status.passed ? "passed" : "training"}">${status.passed ? "Qualified" : "Training"}</span>
        </div>
        <div class="attempts">${attempts}</div>
      </article>`;
  }).join("");

  $$("[data-delete-score]").forEach((button) => button.addEventListener("click", () => deleteScore(button.dataset.deleteScore)));
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
    const key = attempt.name.toLowerCase();
    if (!byName.has(key)) byName.set(key, { name: attempt.name, attempts: [] });
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

function uniqueStudents() {
  return scoreGroups().map((group) => group.name);
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
