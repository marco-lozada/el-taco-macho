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
    "lang.toggle": "EN / ES: Cambiar a español",
    "skip": "Skip to content",
    "notice.dismiss": "Dismiss notice",
    "brand.tagline": "Sabor de México • Made in Fresno",
    "nav.label": "Sections",
    "nav.menu": "Menu",
    "nav.findUs": "Find Us",
    "nav.catering": "Catering",

    "hero.logoAlt": "El Taco Macho mascot logo",
    "hero.quickInfo": "Quick info",
    "hero.payment": "Cash or Cash App",
    "hero.directions": "Get Directions",
    "hero.igNote.before": "Check",
    "hero.igNote.after": "for same-day updates.",

    "carne.intro": "The difference is in the meat: fresh, seasoned, and grilled to order.",
    "carne.photoAlt": "Meat being turned with tongs on the grill, beside a row of fresh tortillas",
    "carne.campechanos": "(mixed meats)",

    "find.title": "Find Us",
    "find.range": "{from} to {to}",
    "find.and": "and",
    "find.closed": "Closed",
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
    "lang.toggle": "EN / ES: Switch to English",
    "skip": "Saltar al contenido",
    "notice.dismiss": "Cerrar aviso",
    "brand.tagline": "Sabor de México • Hecho en Fresno",
    "nav.label": "Secciones",
    "nav.menu": "Menú",
    "nav.findUs": "Encuéntranos",
    "nav.catering": "Eventos",

    "hero.logoAlt": "Logo de la mascota de El Taco Macho",
    "hero.quickInfo": "Información rápida",
    "hero.payment": "Efectivo o Cash App",
    "hero.directions": "Cómo llegar",
    "hero.igNote.before": "Revisa",
    "hero.igNote.after": "para avisos del día.",

    "carne.intro": "Aquí la diferencia está en la carne: fresca, bien sazonada y asada al momento.",
    "carne.photoAlt": "Carne volteada con pinzas en el asador, junto a una fila de tortillas frescas",
    "carne.campechanos": "(carnes mixtas)",

    "find.title": "Encuéntranos",
    "find.range": "De {from} a {to}",
    "find.and": "y",
    "find.closed": "Cerrado",
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

/* =========================================================================
   Hours: the regular schedule as text (hero and footer)
   (No "open now" / "closed" states: the truck closes for events without
   notice, so the hero points to Instagram for changes.)
   ========================================================================= */
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
  // Spelled-out days for the hero: "Tuesday to Friday, 7–11 PM"
  const long = open ? daysLong() + ", " + formatRange(SITE.open, SITE.close) : t("find.closed");
  document.querySelectorAll("[data-hours='long']").forEach(el => { el.textContent = long; });
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
});
