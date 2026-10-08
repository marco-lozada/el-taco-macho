# El Taco Macho: Site Content

Drop this file in the project root and tell Claude Code:
"Use SITE-CONTENT.md as the source of truth for all site copy, data, and schema."

---

## Core facts

| Field | Value |
|---|---|
| Business name | El Taco Macho |
| Type | Taco truck (walk-up only) |
| Domain | https://eltacomachofresno.com |
| Address | 2848 W Ashlan Ave, Fresno, CA 93705 |
| Days | Tuesday–Friday (Martes–Viernes) |
| Hours | 7:00 PM – 11:00 PM (Linktree labels these "Summer hours"; TODO: confirm year-round hours) |
| Closed | Saturday–Monday |
| Payment | Cash & Cash App only (no cards) |
| Instagram | https://www.instagram.com/eltacomacho/ |
| Facebook | https://www.facebook.com/eltacomacho559 |
| Cash App | $eltacomacho → https://cash.app/$eltacomacho |
| Google Maps pin | https://maps.app.goo.gl/c8hriSUc7dh7fYxA7 |
| Linktree | https://linktr.ee/eltacomacho |
| Ordering | In person at the truck only. NO orders by DM. Phones are for catering/events, not food orders (TODO: confirm). |
| Phone (catering/events) | (559) 360-3714 · (559) 681-7250 (from the truck wrap) |
| Truck wrap address | 504 E. Belmont Ave: NOT the service location. Do not use on the site. Instagram and Linktree both confirm 2848 W Ashlan Ave. |

## Scope
A SIMPLE ONE-PAGER: a single index.html, one CSS file, one small JS file.
Sections in order: Hero → Menu → Find Us → Good to Know → Catering → Footer.
No extra pages, no frameworks, no build step.

## Language: English / Español toggle
- One EN | ES toggle button, fixed in the top corner, always visible on mobile.
- Wherever this file shows "English / Español" or "English · Español", the
  first part is the EN string and the second is the ES string. Show only the
  active language on the page (no side-by-side text).
- Implementation (keep it simple):
  - Every translatable element gets a key: `<h2 data-i18n="menu.title">Menu</h2>`
  - All strings live in ONE object in `js/main.js`:
    `const STRINGS = { en: { "menu.title": "Menu", ... }, es: { "menu.title": "Menú", ... } }`
  - Toggle swaps textContent for every [data-i18n], also placeholders
    ([data-i18n-placeholder]) and aria-labels, and sets `<html lang>`.
  - Default: Spanish if the browser language starts with "es", otherwise
    English. Remember the choice in localStorage (wrapped in try/catch).
  - HTML ships with English text so the page works without JS and for SEO.
- Brand phrases stay in Spanish in BOTH languages: "Del Asador a Tu Plato",
  "Sabor de México", menu meat names, Agua de Sandía, Tres Leches.

## Brand voice
- Proud, warm, a little bold. Short lines, no corporate fluff.
- Key taglines (from their own Instagram bio):
  - **Sabor de México • Made in Fresno**
  - **Del Asador a Tu Plato** (From the Grill to Your Plate)

---

## Page sections

### 0. Notice banner (optional, top of page)
A dismissible strip for closures and schedule changes, e.g.
"Summer Break · Descanso de Verano: back on [date]". The truck's Linktree
avatar currently shows a Summer Break graphic, so they clearly use this.
Controlled by one `notice` field in the site config (see Editability below);
if empty, the banner doesn't render.

### 1. Hero
- Headline: **El Taco Macho**
- Tagline: **Del Asador a Tu Plato**
- Sub: *From the grill to your plate · Sabor de México, made in Fresno*
- Quick-info strip (visible without scrolling on mobile):
  - Tue–Fri · Mar–Vie · 7–11 PM
  - 2848 W Ashlan Ave
  - Cash & Cash App
- Primary button: **Get Directions / Cómo Llegar** →
  https://maps.app.goo.gl/c8hriSUc7dh7fYxA7 (their own Google Maps pin, so it
  drops people at the exact truck spot)
- Secondary button: **See the Menu / Ver Menú** (scrolls to #menu)
- Optional: "Open now / Abierto ahora" badge, computed in JS from
  America/Los_Angeles time (Tue–Fri, 19:00–23:00). Shows "Opens Tuesday at
  7 PM" etc. when closed. Fail gracefully: if JS is off, show nothing.

### 2. Menu / Menú  (id="menu")
Meats / Carnes (from the truck's menu board), shown as a bold grid of tags:
- Asada
- Pastor
- Suadero
- Pollo
- Chorizo
- Cabeza
- Cecina (the truck spells it "Sesina", so use "Cecina" on the site unless the owner prefers their spelling)
- Lengua
- Tripa
- Campechanos (mixed meats)

TODO: prices, and whether they also sell burritos, quesadillas, mulitas, etc.
Until prices are confirmed, show the meats without prices plus a line:
"Ask at the window for today's prices · Pregunta por los precios en la ventana."

Specials / Especiales (rotating, from Instagram):
- Agua de Sandía (watermelon agua fresca)
- Tres Leches
Add a small "Tonight's specials / Especiales de hoy" line driven by a
`specials` field in the SITE config (empty = hidden).

### 3. Find Us / Encuéntranos  (id="find-us")
- Address: 2848 W Ashlan Ave, Fresno, CA 93705
- Hours table:

  | Day | Día | Hours |
  |---|---|---|
  | Tuesday | Martes | 7 – 11 PM |
  | Wednesday | Miércoles | 7 – 11 PM |
  | Thursday | Jueves | 7 – 11 PM |
  | Friday | Viernes | 7 – 11 PM |
  | Sat – Mon | Sáb – Lun | Closed / Cerrado |

- Highlight today's row with JS.
- Google Map embed (no API key needed):
  `https://www.google.com/maps?q=2848+W+Ashlan+Ave,+Fresno,+CA+93705&output=embed`
  Use loading="lazy" and a title attribute.

### 4. Good to Know / Bueno Saber
Three simple icon cards:
- 💵 **Cash & Cash App** · Efectivo y Cash App: show the $eltacomacho
  cashtag large and easy to read, linked to https://cash.app/$eltacomacho
- 🚶 **Walk-up orders only** · Pedidos solo en el camión
- 🚫 **No DM orders** · No pedidos por DM

### 5. Footer
- El Taco Macho · Sabor de México • Made in Fresno
- Address + hours (short form)
- Instagram + Facebook icon links (target="_blank" rel="noopener")
- Cash App: $eltacomacho
- © current year (set with JS)
- Small credit line for the builder (optional)

---

### 4b. Events & Catering / Eventos  (id="eventos")
Confirmed by the truck wrap: "Tacos para todo tipo de eventos."
- Headline: **Tacos for Any Event · Tacos Para Todo Tipo de Eventos**
- Copy: Birthdays, quinceañeras, weddings, work parties. We bring the truck
  and the grill. / Cumpleaños, quinceañeras, bodas, eventos de trabajo.
- Two large tap-to-call buttons (tel: links): (559) 360-3714 and (559) 681-7250
- Calling is the only way to book an event.
- Place between Good to Know and Footer. Nav/hero link: "Catering" / "Eventos".

## Not included (for now)
- Online ordering: intentionally excluded; they're walk-up only.

---

## SEO

- `<html lang="en">` by default; the toggle switches it to "es".
- `<title>`: El Taco Macho | Taco Truck in Fresno, CA · Tue–Fri 7–11 PM
- Meta description: Authentic Mexican tacos from the grill on W Ashlan Ave in
  Fresno. Open Tuesday–Friday, 7–11 PM. Cash & Cash App. Del asador a tu plato.
- Open Graph: title, description, og:image (TODO: best food photo, 1200×630),
  og:url https://eltacomachofresno.com
- Canonical: https://eltacomachofresno.com/

### Schema (JSON-LD in <head>)
```json
{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "El Taco Macho",
  "url": "https://eltacomachofresno.com",
  "servesCuisine": "Mexican",
  "priceRange": "$",
  "paymentAccepted": "Cash, Cash App",
  "telephone": "+1-559-360-3714",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2848 W Ashlan Ave",
    "addressLocality": "Fresno",
    "addressRegion": "CA",
    "postalCode": "93705",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "19:00",
    "closes": "23:00"
  }],
  "hasMap": "https://maps.app.goo.gl/c8hriSUc7dh7fYxA7",
  "sameAs": [
    "https://www.instagram.com/eltacomacho/",
    "https://www.facebook.com/eltacomacho559"
  ]
}
```

## Editability
Hours change seasonally and they take breaks, so put everything that changes
in ONE place at the top of the main script (or a small `site-config.js`):

```js
const SITE = {
  notice: "",            // e.g. "Summer Break · Descanso de Verano: back Sept 2"
  specials: "",          // e.g. "Agua de Sandía + Tres Leches"
  days: [2, 3, 4, 5],    // 0=Sun … 6=Sat → Tue–Fri
  open: "19:00",
  close: "23:00",
  timezone: "America/Los_Angeles"
};
```
The hours table, today-highlight, and Open-now badge all read from this.
Remember to update the JSON-LD hours too when hours change.

## Design direction (matched to their branding)

### Fonts (Google Fonts, free)
- **League Spartan SemiBold (600)**: headings and big bold text. This is the font
  on their Instagram graphics ("TACO MATH", "AGUA DE SANDIA"), uppercase.
- **Bangers**: sparingly, for punchy accent labels like "SERVING TONIGHT"
  or "ESPECIALES". It's a close free match to the comic-style italic in their
  posts and truck lettering. Add a small offset text-shadow for the same pop.
- Body text: League Spartan 400–500. Use 600 for headings, buttons, and the
  quick-info strip; avoid going heavier so it stays true to their posts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=League+Spartan:wght@400;500;600&display=swap" rel="stylesheet">
```

### Colors (sampled from their posts and truck wrap)
```css
:root {
  --sun:      #F9CA18;  /* gradient start, yellow */
  --mango:    #FE934B;  /* gradient end, orange */
  --chile:    #C8102E;  /* "EL TACO MACHO" red */
  --nopal:    #2E5E3A;  /* menu band green, use sparingly */
  --carbon:   #1B1B1B;  /* dark sections / text */
  --crema:    #FFF8EC;  /* light backgrounds */
}
--brand-gradient: linear-gradient(135deg, var(--sun), var(--mango));
```
- Hero: the yellow→orange gradient (like their posts) with white League
  Spartan headline and the mascot logo.
- Red for buttons and accents; dark carbon section for Find Us so the
  7–11 PM night feel still comes through.

### Images
- Logo: the mustached-taco mascot. TODO: get an original PNG/SVG with a
  transparent background from the owner (don't use the IG-compressed one).
- Truck photo (yellow truck in the lot) works well in Find Us or as an
  "about" image; crop out the phone numbers' angle if needed.
- Food photos: TODO

### General
- Mobile first. Big tap targets. Quick-info strip and Directions button
  visible on a phone without scrolling.
- Fast: compress images (WebP), lazy-load below the fold, no frameworks.
