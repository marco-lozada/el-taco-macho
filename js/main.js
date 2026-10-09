/* =========================================================================
   SITE CONFIG: edit this when hours or breaks change.
   - notice: a plain string, or { en: "...", es: "..." }. Empty = hidden.
   - On a break, set `notice` and `days: []` so the page shows "Closed".
   - When hours change, also update the JSON-LD block and <title>/meta
     description in index.html.
   ========================================================================= */
const SITE = {
  notice: "",            // e.g. "Summer Break · Descanso de Verano: back Sept 2"
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
    "hero.sub": "From the grill to your plate. Sabor de México, made in Fresno.",
    "hero.quickInfo": "Quick info",
    "hero.payment": "Cash or Cash App",
    "hero.noCards": "No cards.",
    "hero.directions": "Get Directions",

    "status.open": "Open until {time}",
    "status.closing": "Closing soon, at {time}",
    "status.tonight": "Opens tonight at {time}",
    "status.tomorrow": "Opens tomorrow at {time}",
    "status.day": "Opens {day} at {time}",
    "status.closed": "Closed for now",

    "carne.intro": "The difference is in the meat: fresh, seasoned, and grilled to order.",
    "carne.lead": "Pick the meat for your tacos:",
    "carne.photoAlt": "Meat being turned with tongs on the grill, beside a row of fresh tortillas",
    "carne.campechanos": "mixed meats",
    "carne.prices": "Order at the window and ask for today's prices.",

    "find.title": "Find Us",
    "find.updates": "Breaks and updates: @eltacomacho on Instagram",
    "find.hours": "Hours",
    "find.range": "{from} to {to}",
    "find.and": "and",
    "find.closed": "Closed",
    "find.today": "Today",
    "find.mapTitle": "Map of El Taco Macho at 2848 W Ashlan Ave, Fresno",
    "find.truckAlt": "The El Taco Macho truck at night, with customers ordering at the window",

    "events.title": "Tacos for Any Event",
    "events.copy": "Birthdays, quinceañeras, weddings, work parties. We bring the truck and the grill.",
    "events.note": "For events only. Order food at the truck window.",
    "events.photoAlt": "A plate of tacos topped with cabbage, cilantro, radish, a grilled chile and lime, with a cup of salsa",
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
    "hero.sub": "Sabor de México, hecho en Fresno.",
    "hero.quickInfo": "Información rápida",
    "hero.payment": "Efectivo o Cash App",
    "hero.noCards": "Sin tarjetas.",
    "hero.directions": "Cómo llegar",

    "status.open": "Abierto hasta las {time}",
    "status.closing": "Cierra pronto, a las {time}",
    "status.tonight": "Abre hoy a las {time}",
    "status.tomorrow": "Abre mañana a las {time}",
    "status.day": "Abre el {day} a las {time}",
    "status.closed": "Cerrado por ahora",

    "carne.intro": "Aquí la diferencia está en la carne: fresca, bien sazonada y asada al momento.",
    "carne.lead": "Escoge la carne de tus tacos:",
    "carne.photoAlt": "Carne volteada con pinzas en el asador, junto a una fila de tortillas frescas",
    "carne.campechanos": "carnes mixtas",
    "carne.prices": "Ordena en la ventana y pregunta por los precios del día.",

    "find.title": "Encuéntranos",
    "find.updates": "Avisos: @eltacomacho en Instagram",
    "find.hours": "Horario",
    "find.range": "De {from} a {to}",
    "find.and": "y",
    "find.closed": "Cerrado",
    "find.today": "Hoy",
    "find.mapTitle": "Mapa de El Taco Macho en 2848 W Ashlan Ave, Fresno",
    "find.truckAlt": "El camión de El Taco Macho de noche, con clientes ordenando en la ventana",

    "events.title": "Tacos para todo tipo de eventos",
    "events.copy": "Cumpleaños, quinceañeras, bodas, eventos de trabajo. Llevamos el camión y el asador.",
    "events.note": "Solo para eventos. Pide tu comida en la ventana del camión.",
    "events.photoAlt": "Un plato de tacos con repollo, cilantro, rábano, chile asado y limón, con un vasito de salsa",
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
   Hours: summary text, week strip, today highlight, open-now status
   ========================================================================= */
const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0]; // Mon → Sun

function daysSummary() {
  const days = openDays();
  const short = STRINGS[lang].daysShort;
  const consecutive = days.every((d, i) => i === 0 || d === days[i - 1] + 1);
  if (consecutive && days.length > 2) return short[days[0]] + "–" + short[days[days.length - 1]];
  return days.map(d => short[d]).join(", ");
}

// "Tuesday to Friday" / "De martes a viernes", or "Tuesday and Friday"
function daysLong() {
  const days = openDays();
  const names = days.map((d, i) => {
    const name = STRINGS[lang].days[d];
    return lang === "es" && (i > 0 || days.length > 2) ? name.toLowerCase() : name;
  });
  const consecutive = days.every((d, i) => i === 0 || d === days[i - 1] + 1);
  if (consecutive && days.length > 2) return t("find.range", { from: names[0], to: names[names.length - 1] });
  if (names.length === 1) return names[0];
  return names.slice(0, -1).join(", ") + " " + t("find.and") + " " + names[names.length - 1];
}

function renderHoursSummary() {
  const open = SITE.days.length > 0;
  const summary = open ? daysSummary() + ", " + formatRange(SITE.open, SITE.close) : t("find.closed");
  document.querySelectorAll("[data-hours='summary']").forEach(el => { el.textContent = summary; });

  const time = document.getElementById("hours-time");
  const days = document.getElementById("hours-days");
  if (time) time.textContent = open ? formatRange(SITE.open, SITE.close) : t("find.closed");
  if (days) { days.textContent = open ? daysLong() : ""; days.hidden = !open; }
}

function renderWeek(today) {
  const list = document.getElementById("week");
  if (!list) return;
  const days = openDays();
  const range = formatRange(SITE.open, SITE.close);

  list.textContent = "";
  WEEK_ORDER.forEach(d => {
    const isOpen = days.includes(d);
    const isToday = d === today;
    const li = document.createElement("li");
    li.className = "day" + (isOpen ? " is-open" : "") + (isToday ? " is-today" : "");

    const short = document.createElement("span");
    short.className = "day-name";
    short.setAttribute("aria-hidden", "true");
    short.textContent = STRINGS[lang].daysShort[d];

    const full = document.createElement("span");
    full.className = "sr-only";
    full.textContent = STRINGS[lang].days[d] + ": " + (isOpen ? range : t("find.closed")) + (isToday ? " (" + t("find.today") + ")" : "");

    li.append(short, full);
    if (isToday) {
      const tag = document.createElement("span");
      tag.className = "day-today";
      tag.setAttribute("aria-hidden", "true");
      tag.textContent = t("find.today");
      li.appendChild(tag);
    }
    list.appendChild(li);
  });
}

const CLOSING_SOON_MINUTES = 30;

function renderStatus(now) {
  const targets = document.querySelectorAll("[data-status]");
  if (!targets.length) return;
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

  const minutesLeft = (closeM - now.minutes + 1440) % 1440;
  const isClosing = isOpen && minutesLeft <= CLOSING_SOON_MINUTES;

  let text;
  if (isClosing) {
    text = t("status.closing", { time: formatTime(SITE.close) });
  } else if (isOpen) {
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

  targets.forEach(el => {
    el.textContent = text;
    el.classList.toggle("is-open", isOpen && !isClosing);
    el.classList.toggle("is-closing", isClosing);
    el.hidden = false;
  });
}

function renderTime() {
  let now = null;
  try { now = nowInTruckTime(); } catch (e) { /* no Intl timezone support: skip today + status */ }
  renderWeek(now ? now.day : -1);
  if (now) renderStatus(now);
}

/* =========================================================================
   Notice banner
   ========================================================================= */
function renderNotice() {
  const banner = document.getElementById("notice");
  const text = localized(SITE.notice);
  if (!banner) return;
  const dismissed = storageGet("notice-dismissed") === JSON.stringify(SITE.notice);
  banner.hidden = !text || dismissed;
  document.getElementById("notice-text").textContent = text;
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

  // The toggle's label is in the *other* language, so mark it for correct pronunciation.
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.lang = lang === "en" ? "es" : "en";
  document.querySelectorAll(".lang-toggle [data-lang]").forEach(el => {
    el.classList.toggle("is-active", el.dataset.lang === lang);
  });

  renderHoursSummary();
  renderNotice();
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
