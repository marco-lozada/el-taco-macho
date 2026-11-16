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
  timezone: "America/Los_Angeles",
  // Map links: every link marked data-maps in index.html opens the truck's listing.
  // iPhone/iPad get Apple Maps; everyone else (and no-JS) gets the Google link in the HTML.
  maps: {
    google: "https://maps.app.goo.gl/c8hriSUc7dh7fYxA7",
    apple: "https://maps.apple/p/VvrhcNTG0ASGfn"
  }
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
    "hero.photoAlt": "A plate of tacos topped with cabbage, cilantro, radish, a grilled chile and lime, with a cup of salsa",
    "hero.payment": "Cash or Cash App",
    "hero.directions": "Get Directions",

    "visit.label": "Plan your visit",
    "visit.week": "Weekly schedule",
    "visit.todayTag": "Today",
    "visit.dayOpen": "{day}: open {hours}",
    "visit.dayClosed": "{day}: closed",
    "visit.igCta": "Check Instagram for schedule updates",
    "visit.cross": "Corner of Ashlan & Marks",

    "meat.asada": "Grilled beef steak",
    "meat.pastor": "Marinated pork",
    "meat.suadero": "Slow-cooked beef brisket",
    "meat.pollo": "Chicken",
    "meat.chorizo": "Mexican pork sausage",
    "meat.cabeza": "Beef head meat",
    "meat.cecina": "Thinly sliced, salted beef",
    "meat.lengua": "Beef tongue",
    "meat.tripa": "Beef small intestine",
    "meat.campechanos": "Mixed meats",

    "carne.intro": "The difference is in the meat: fresh, seasoned, and grilled to order.",
    "carne.photoAlt": "Meat being turned with tongs on the grill, beside a row of fresh tortillas",

    "find.title": "Find Us",
    "find.intro": "Northeast corner of Ashlan & Marks",
    "find.range": "{from} to {to}",
    "find.and": "and",
    "find.closed": "Closed",
    "find.mapTitle": "Map of El Taco Macho at 2848 W Ashlan Ave, Fresno",
    "find.truckAlt": "The El Taco Macho truck at night, with customers ordering at the window",

    "events.title": "Catering",
    "events.copy": "Tacos for any event: birthdays, quinceañeras, weddings, work parties. We bring the truck and the grill.",
    "events.note": "Call to book. These lines are for events only; order food at the truck window.",
    "events.photoAlt": "Tongs setting grilled onions on a plate of tacos topped with cilantro, radish and lime",
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
    "hero.photoAlt": "Un plato de tacos con repollo, cilantro, rábano, chile asado y limón, con un vasito de salsa",
    "hero.payment": "Efectivo o Cash App",
    "hero.directions": "Cómo llegar",

    "visit.label": "Planea tu visita",
    "visit.week": "Horario semanal",
    "visit.todayTag": "Hoy",
    "visit.dayOpen": "{day}: abierto {hours}",
    "visit.dayClosed": "{day}: cerrado",
    "visit.igCta": "Avisos de horario en Instagram",
    "visit.cross": "Esquina de Ashlan y Marks",

    "meat.asada": "Bistec de res asado",
    "meat.pastor": "Cerdo adobado",
    "meat.suadero": "Pecho de res cocido lentamente",
    "meat.pollo": "Pollo",
    "meat.chorizo": "Chorizo de cerdo",
    "meat.cabeza": "Carne de cabeza de res",
    "meat.cecina": "Res salada en corte delgado",
    "meat.lengua": "Lengua de res",
    "meat.tripa": "Intestino delgado de res",
    "meat.campechanos": "Mezcla de carnes",

    "carne.intro": "Aquí la diferencia está en la carne: fresca, bien sazonada y asada al momento.",
    "carne.photoAlt": "Carne volteada con pinzas en el asador, junto a una fila de tortillas frescas",

    "find.title": "Encuéntranos",
    "find.intro": "Esquina noreste de Ashlan y Marks",
    "find.range": "De {from} a {to}",
    "find.and": "y",
    "find.closed": "Cerrado",
    "find.mapTitle": "Mapa de El Taco Macho en 2848 W Ashlan Ave, Fresno",
    "find.truckAlt": "El camión de El Taco Macho de noche, con clientes ordenando en la ventana",

    "events.title": "Eventos",
    "events.copy": "Tacos para todo tipo de evento: cumpleaños, quinceañeras, bodas, fiestas de trabajo. Llevamos el camión y el asador.",
    "events.note": "Llama para reservar. Estas líneas son solo para eventos; pide tu comida en la ventana del camión.",
    "events.photoAlt": "Pinzas colocando cebolla asada sobre un plato de tacos con cilantro, rábano y limón",
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
   Hours: the regular schedule as text (hero)
   (No "open now" / "closed" states: the truck closes for events without
   notice, so the hero points to Instagram for changes.)
   ========================================================================= */
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
  // Spelled-out days for the hero: "Tuesday to Friday, 7–11 PM"
  const long = open ? daysLong() + ", " + formatRange(SITE.open, SITE.close) : t("find.closed");
  document.querySelectorAll("[data-hours='long']").forEach(el => { el.textContent = long; });
}

/* =========================================================================
   Week strip (hero): the regular schedule, with today's day marked.
   No open/closed claim: Instagram is the source of truth for any given night.
   ========================================================================= */
const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0]; // Mon → Sun

function todayIndex() {
  try {
    const name = new Intl.DateTimeFormat("en-US", { timeZone: SITE.timezone, weekday: "short" }).format(new Date());
    return STRINGS.en.daysShort.indexOf(name);
  } catch (e) {
    return new Date().getDay();
  }
}

function renderWeek() {
  const week = document.getElementById("week");
  if (!week) return;
  const now = todayIndex();
  const hours = formatRange(SITE.open, SITE.close);

  week.textContent = "";
  WEEK_ORDER.forEach(d => {
    const open = SITE.days.includes(d);
    const li = document.createElement("li");
    li.className = "day" + (open ? " is-open" : "") + (d === now ? " is-today" : "");
    li.setAttribute("aria-label", t(open ? "visit.dayOpen" : "visit.dayClosed", { day: STRINGS[lang].days[d], hours: hours }));
    const abbr = document.createElement("span");
    abbr.setAttribute("aria-hidden", "true");
    abbr.textContent = STRINGS[lang].daysShort[d];
    li.appendChild(abbr);
    if (d === now) {
      li.setAttribute("aria-current", "date");
      const tag = document.createElement("span");
      tag.className = "day-tag";
      tag.setAttribute("aria-hidden", "true");
      tag.textContent = t("visit.todayTag");
      li.appendChild(tag);
    }
    week.appendChild(li);
  });
}

/* =========================================================================
   Map links: Apple Maps on iOS, Google Maps everywhere else
   ========================================================================= */
function isAppleMobile() {
  const ua = navigator.userAgent || "";
  // iPadOS reports itself as a Mac, so also check for a touch screen.
  return /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
}

function setMapLinks() {
  if (!isAppleMobile()) return;
  document.querySelectorAll("[data-maps]").forEach(a => { a.href = SITE.maps.apple; });
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
  renderWeek();
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
  setMapLinks();

  document.getElementById("lang-toggle").addEventListener("click", () => {
    const next = lang === "en" ? "es" : "en";
    storageSet("lang", next);
    applyLanguage(next);
  });

  document.getElementById("notice-close").addEventListener("click", () => {
    storageSet("notice-dismissed", JSON.stringify(SITE.notice));
    document.getElementById("notice").hidden = true;
  });

  // Safari bar color: dark while the footer is on screen (see html.at-footer in styles.css).
  const footer = document.querySelector(".footer");
  if (footer && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      document.documentElement.classList.toggle("at-footer", entry.isIntersecting);
    }).observe(footer);
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
