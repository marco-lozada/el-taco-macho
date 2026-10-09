# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: regulars and new customers.** Regulars check whether the truck is open tonight and that it's in the same spot. New customers, who found the truck on Google, Maps, or Instagram, are deciding whether to come. Both are mostly on phones, often in the evening, close to service time.
- **Secondary: event hosts** booking the truck for birthdays, quinceañeras, weddings, and work parties. They book by phone.
- Visitors read English or Spanish. One simple EN/ES toggle switches the whole page; Spanish is the default when the browser language is Spanish.

## Product Purpose

The one-page site for El Taco Macho, a walk-up taco truck at 2848 W Ashlan Ave, Fresno, CA 93705 (Ashlan & Marks). It answers, in seconds: is it open, where is it, how do I pay, and how do I book it for an event. Success: people show up at the window, and event hosts call.

## Positioning

Fresh food, a deep meat menu, and a family-owned truck. Their own taglines: "Del Asador a Tu Plato" and "Sabor de México • Made in Fresno". Their own claim, from their Instagram: "The difference is in the meat: fresh, seasoned, and grilled to order." / "Aquí la diferencia está en la carne: fresca, bien sazonada y asada al momento." "Grilled to order" is the truck's claim; use it verbatim and don't extend it.

## Operating Context

- Walk-up orders only, in person at the truck window. No online ordering and no orders by DM (Instagram or Facebook messages).
- Hours: Tuesday to Friday, 7–11 PM, year-round. Closed Saturday to Monday. The truck takes breaks and announces them; the site has a notice banner for closures and schedule changes.
- Payment: cash and Cash App ($eltacomacho) only. No cards.
- Catering and event phone lines: (559) 360-3714 and (559) 681-7250. These are for events only, not food orders.
- Their own channels: Instagram @eltacomacho, Facebook /eltacomacho559, a Google Maps pin, and a Linktree.

## Capabilities and Constraints

- Static one-pager: `index.html`, `css/styles.css`, `js/main.js`. No framework and no build step. Deployed on Netlify (`netlify.toml`, publish = ".") from GitHub.
- Everything that changes (hours, open days, notice) lives in the `SITE` config at the top of `js/main.js`. Every EN/ES string lives in its `STRINGS` object. The JSON-LD hours in `index.html` have to be updated by hand when the hours change.
- Current sections: Hero → La Carne (Instagram intro, meat list for tacos, grill photo; nav label "Menu" / "Menú") → Find Us (status, week strip, truck photo, address + map card) → Catering/Eventos (taco plate photo, tap-to-call) → Footer.
- The two catering numbers are unlabeled until the owner confirms which is the main line ((559) 681-7250 is believed to be main; both work).
- The meats are Asada, Pastor, Suadero, Pollo, Chorizo, Cabeza, Cecina (the truck spells it "Sesina"), Lengua, Tripa, and Campechanos (mixed meats). Prices are unconfirmed and must not be invented; the page says to ask at the window. Other menu items (burritos, quesadillas, etc.) are unconfirmed.
- The truck wrap shows other addresses (504 E. Belmont Ave on the wrap; 1639 S. Orange on a decal). They are not the service location, and the site must never show them.

## Brand Commitments

- Name: El Taco Macho. Taglines "Del Asador a Tu Plato" and "Sabor de México • Made in Fresno" stay in Spanish in both languages, as do meat names, Agua de Sandía, and Tres Leches.
- Voice: proud, warm, a little bold. Short lines, no corporate fluff.
- Assets: the mustached-taco mascot logo (`images/el-taco-macho-logo.webp`), a night photo of the truck with customers (`images/el-taco-macho.webp`, decal painted out), a grill photo (`images/grill-480.webp`, `grill-960.webp`), a taco plate with radish and salsa (`images/taco-plate-480.webp`, `taco-plate-960.webp`), favicons, and `images/og-image.jpg` (built from the taco plate).
- Visual identity commitments from their real branding (League Spartan, Bangers as an accent, and the sun/mango/chile/nopal/carbon/crema palette) are recorded in `SITE-CONTENT.md` and the code, not here.

## Evidence on Hand

- Real: the address and cross streets (Ashlan & Marks), hours, phone numbers, Cash App handle, social links, the mascot logo, the truck photo, and real food photos: the grill, a taco plate (radish, salsa), and an asada/pollo plate (`images/el-taco-macho-tacos-2.jpeg`, held back for now). Original photo files are backed up outside the site.
- Not on hand, and never to be fabricated: menu prices, reviews or testimonials, press, customer counts, and any menu items beyond tacos with the listed meats.

## Product Principles

1. "Open tonight?" gets answered first, everywhere, in both languages.
2. Walk-up truth: never suggest ordering online, by DM, or by phone.
3. Real over polished: use only the truck's own facts, photos, and words; leave gaps empty rather than invented.
4. Bilingual by default: Spanish is a first-class version of the page, not a translation afterthought.
5. Easy to keep current: anything that changes is edited in one place.

## Accessibility & Inclusion

- WCAG AA contrast for every text/background pair. Contrast was audited during the design pass.
- Phone-first, with tap targets of at least 44px. The key info and Get Directions are visible without scrolling on a phone.
- Full EN/ES parity, including aria-labels, alt text, and `<html lang>`.
