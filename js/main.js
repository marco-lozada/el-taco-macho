/* =========================================================================
   SITE CONFIG: edit this when hours, breaks, or specials change.
   - notice / specials: a plain string, or { en: "...", es: "..." }. Empty = hidden.
   - On a break, set `notice` and `days: []` so the page shows "Closed".
   - When hours change, also update the JSON-LD block and <title>/meta
     description in index.html.
   ========================================================================= */
const SITE = {
  notice: "",            // e.g. "Summer Break · Descanso de Verano: back Sept 2"
  specials: "",          // e.g. "Agua de Sandía + Tres Leches"
  days: [2, 3, 4, 5],    // 0=Sun … 6=Sat → Tue–Fri
  open: "19:00",
  close: "23:00",
  timezone: "America/Los_Angeles"
  // TODO: confirm these are year-round hours (Linktree labels them "Summer hours").
};

/* =========================================================================
   ALL EN / ES STRINGS
   ========================================================================= */
const STRINGS = {
  en: {
    "lang.toggle": "Cambiar a español",
    "notice.dismiss": "Dismiss notice",
    "nav.label": "Sections",
    "nav.menu": "Menu",
    "nav.findUs": "Find Us",
    "nav.catering": "Catering",

    "hero.logoAlt": "El Taco Macho mascot logo",
    "hero.sub": "From the grill to your plate · Sabor de México, made in Fresno",
    "hero.quickInfo": "Quick info",
    "hero.payment": "Cash & Cash App",
    "hero.directions": "Get Directions",
    "hero.seeMenu": "See the Menu",

    "status.open": "Open now · until {time}",
    "status.tonight": "Closed · Opens tonight at {time}",
    "status.tomorrow": "Closed · Opens tomorrow at {time}",
    "status.day": "Closed · Opens {day} at {time}",
    "status.closed": "Closed for now",

    "menu.title": "Menu",
    "menu.meats": "Meats",
    "menu.campechanos": "mixed meats",
    "menu.prices": "Ask at the window for today's prices",
    "menu.specials": "Specials",
    "menu.tonight": "Tonight's specials",
    "menu.sandia": "Watermelon agua fresca",
    "menu.tresLeches": "Three-milk cake",
    "menu.photoAlt": "Tacos from El Taco Macho",

    "find.title": "Find Us",
    "find.address": "Address",
    "find.hours": "Hours",
    "find.closed": "Closed",
    "find.today": "Today",
    "find.mapTitle": "Map of El Taco Macho at 2848 W Ashlan Ave, Fresno",
    "find.truckAlt": "The El Taco Macho truck on W Ashlan Ave",

    "know.title": "Good to Know",
    "know.payTitle": "Cash & Cash App",
    "know.payText": "No cards. Pay with cash or Cash App:",
    "know.walkTitle": "Walk-up orders only",
    "know.walkText": "Order in person at the truck window.",
    "know.dmTitle": "No DM orders",
    "know.dmText": "We can't take food orders through Instagram or Facebook messages.",

    "events.title": "Tacos for Any Event",
    "events.copy": "Birthdays, quinceañeras, weddings, work parties. We bring the truck and the grill.",
    "events.call": "Call",


    "footer.instagram": "El Taco Macho on Instagram",
    "footer.facebook": "El Taco Macho on Facebook",

    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  es: {
    "lang.toggle": "Switch to English",
    "notice.dismiss": "Cerrar aviso",
    "nav.label": "Secciones",
    "nav.menu": "Menú",
    "nav.findUs": "Encuéntranos",
    "nav.catering": "Eventos",

    "hero.logoAlt": "Logo de la mascota de El Taco Macho",
    "hero.sub": "Sabor de México, hecho en Fresno",
    "hero.quickInfo": "Información rápida",
    "hero.payment": "Efectivo y Cash App",
    "hero.directions": "Cómo Llegar",
    "hero.seeMenu": "Ver Menú",

    "status.open": "Abierto ahora · hasta las {time}",
    "status.tonight": "Cerrado · Abre hoy a las {time}",
    "status.tomorrow": "Cerrado · Abre mañana a las {time}",
    "status.day": "Cerrado · Abre el {day} a las {time}",
    "status.closed": "Cerrado por ahora",

    "menu.title": "Menú",
    "menu.meats": "Carnes",
    "menu.campechanos": "carnes mixtas",
    "menu.prices": "Pregunta por los precios en la ventana",
    "menu.specials": "Especiales",
    "menu.tonight": "Especiales de hoy",
    "menu.sandia": "Agua fresca de sandía",
    "menu.tresLeches": "Pastel de tres leches",
    "menu.photoAlt": "Tacos de El Taco Macho",

    "find.title": "Encuéntranos",
    "find.address": "Dirección",
    "find.hours": "Horario",
    "find.closed": "Cerrado",
    "find.today": "Hoy",
    "find.mapTitle": "Mapa de El Taco Macho en 2848 W Ashlan Ave, Fresno",
    "find.truckAlt": "El camión de El Taco Macho en W Ashlan Ave",

    "know.title": "Bueno Saber",
    "know.payTitle": "Efectivo y Cash App",
    "know.payText": "No aceptamos tarjetas. Paga en efectivo o Cash App:",
    "know.walkTitle": "Pedidos solo en el camión",
    "know.walkText": "Ordena en persona en la ventana del camión.",
    "know.dmTitle": "No pedidos por DM",
    "know.dmText": "No tomamos pedidos por mensajes de Instagram o Facebook.",

    "events.title": "Tacos Para Todo Tipo de Eventos",
    "events.copy": "Cumpleaños, quinceañeras, bodas, eventos de trabajo.",
    "events.call": "Llamar",


    "footer.instagram": "El Taco Macho en Instagram",
    "footer.facebook": "El Taco Macho en Facebook",

    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
  }
};

/* =========================================================================
   Helpers
   ========================================================================= */
let lang = "en";

function t(key, vars) {
  let s = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || "";
  if (vars) Object.keys(vars).forEach(k => { s = s.replace("{" + k + "}", vars[k]); });
  return s;
}

function localized(value) {
  if (!value) return "";
  return typeof value === "string" ? value : (value[lang] || value.en || "");
}

function storageGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* storage blocked */ }
}

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

// "19:00" -> { label: "7", period: "PM" }, "19:30" -> { label: "7:30", period: "PM" }
function timeParts(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const hour = h % 12 || 12;
  return { label: m ? hour + ":" + String(m).padStart(2, "0") : String(hour), period: h < 12 ? "AM" : "PM" };
}

function formatTime(hhmm) {
  const p = timeParts(hhmm);
  return p.label + " " + p.period;
}

// "7–11 PM", or "11 AM–2 PM" when the periods differ
function formatRange(open, close) {
  const a = timeParts(open), b = timeParts(close);
  return a.period === b.period ? a.label + "–" + b.label + " " + b.period : formatTime(open) + "–" + formatTime(close);
}

function openDays() {
  return SITE.days.slice().sort((a, b) => a - b);
}

// Current weekday (0–6) and minutes since midnight in the truck's timezone.
function nowInTruckTime() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SITE.timezone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
  }).formatToParts(new Date());
  const get = type => parts.find(p => p.type === type).value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")) };
}

/* =========================================================================
   Hours: summary text, table, today highlight, open-now badge
   ========================================================================= */
function daysSummary() {
  const days = openDays();
  const short = STRINGS[lang].daysShort;
  if (!days.length) return t("find.closed");
  const consecutive = days.every((d, i) => i === 0 || d === days[i - 1] + 1);
  if (consecutive && days.length > 2) return short[days[0]] + "–" + short[days[days.length - 1]];
  return days.map(d => short[d]).join(", ");
}

function renderHoursSummary() {
  const text = SITE.days.length ? daysSummary() + " · " + formatRange(SITE.open, SITE.close) : t("find.closed");
  document.querySelectorAll("[data-hours='summary']").forEach(el => { el.textContent = text; });
}

function renderHoursTable(today) {
  const body = document.getElementById("hours-body");
  if (!body) return;
  const days = openDays();
  const names = STRINGS[lang].days;
  const short = STRINGS[lang].daysShort;

  // Walk the week starting at the first open day; group runs of closed days into one row.
  const start = days.length ? days[0] : 1;
  const rows = [];
  for (let i = 0; i < 7; i++) {
    const d = (start + i) % 7;
    const isOpen = days.includes(d);
    const last = rows[rows.length - 1];
    if (!isOpen && last && !last.open) last.days.push(d);
    else rows.push({ open: isOpen, days: [d] });
  }

  body.textContent = "";
  rows.forEach(row => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");
    th.scope = "row";
    th.textContent = row.days.length === 1
      ? names[row.days[0]]
      : short[row.days[0]] + " – " + short[row.days[row.days.length - 1]];
    td.textContent = row.open ? formatRange(SITE.open, SITE.close) : t("find.closed");
    if (!row.open) tr.className = "is-closed";
    if (row.days.includes(today)) {
      tr.classList.add("is-today");
      const tag = document.createElement("span");
      tag.className = "today-tag";
      tag.textContent = t("find.today");
      th.append(" ", tag);
    }
    tr.append(th, td);
    body.appendChild(tr);
  });
}

function renderStatus(now) {
  const badge = document.getElementById("status-badge");
  if (!badge) return;
  const days = openDays();
  const openM = toMinutes(SITE.open);
  const closeM = toMinutes(SITE.close);
  const overnight = closeM <= openM;
  const yesterday = (now.day + 6) % 7;

  let isOpen;
  if (overnight) {
    isOpen = (days.includes(now.day) && now.minutes >= openM) || (days.includes(yesterday) && now.minutes < closeM);
  } else {
    isOpen = days.includes(now.day) && now.minutes >= openM && now.minutes < closeM;
  }

  let text;
  if (isOpen) {
    text = t("status.open", { time: formatTime(SITE.close) });
  } else if (!days.length) {
    text = t("status.closed");
  } else {
    let k = 0;
    while (k < 8 && !(days.includes((now.day + k) % 7) && (k > 0 || now.minutes < openM))) k++;
    const time = formatTime(SITE.open);
    if (k === 0) text = t("status.tonight", { time });
    else if (k === 1) text = t("status.tomorrow", { time });
    else {
      const name = STRINGS[lang].days[(now.day + k) % 7];
      text = t("status.day", { time, day: lang === "es" ? name.toLowerCase() : name });
    }
  }

  badge.textContent = text;
  badge.classList.toggle("is-open", isOpen);
  badge.hidden = false;
}

function renderTime() {
  let now;
  try { now = nowInTruckTime(); } catch (e) { return; } // no Intl timezone support: show nothing
  renderHoursTable(now.day);
  renderStatus(now);
}

/* =========================================================================
   Notice banner + tonight's specials
   ========================================================================= */
function renderNotice() {
  const banner = document.getElementById("notice");
  const text = localized(SITE.notice);
  if (!banner) return;
  const dismissed = storageGet("notice-dismissed") === JSON.stringify(SITE.notice);
  banner.hidden = !text || dismissed;
  document.getElementById("notice-text").textContent = text;
}

function renderSpecials() {
  const line = document.getElementById("tonight");
  const text = localized(SITE.specials);
  if (!line) return;
  line.hidden = !text;
  document.getElementById("tonight-text").textContent = text;
}

/* =========================================================================
   Language
   ========================================================================= */
function applyLanguage(next) {
  lang = STRINGS[next] ? next : "en";
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });

  document.querySelectorAll(".lang-toggle [data-lang]").forEach(el => {
    el.classList.toggle("is-active", el.dataset.lang === lang);
  });

  renderHoursSummary();
  renderNotice();
  renderSpecials();
  renderTime();
}

function initialLanguage() {
  const saved = storageGet("lang");
  if (saved && STRINGS[saved]) return saved;
  return (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
}

/* =========================================================================
   Boot
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(initialLanguage());

  document.getElementById("lang-toggle").addEventListener("click", () => {
    const next = lang === "en" ? "es" : "en";
    storageSet("lang", next);
    applyLanguage(next);
  });

  document.getElementById("notice-close").addEventListener("click", () => {
    storageSet("notice-dismissed", JSON.stringify(SITE.notice));
    document.getElementById("notice").hidden = true;
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  setInterval(renderTime, 60 * 1000);
});
