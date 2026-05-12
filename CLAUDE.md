# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack & versions

- Next.js **16.2.4** (App Router) on React **19.2.4**, TypeScript strict mode.
- Tailwind CSS **v4** via `@tailwindcss/postcss` (no `tailwind.config.*` — use the `@import "tailwindcss"` directive in [globals.css](app/globals.css) and `:root` CSS variables for the design tokens).
- Email: `nodemailer` (Gmail SMTP). `resend` is also a dependency but not currently wired up.

`AGENTS.md` warns that this Next.js version has breaking changes vs. older training data — when an API behaves unexpectedly, consult `node_modules/next/dist/docs/` in the installed copy rather than recalling Next 13/14 conventions. Run `npm install` first; `node_modules/` is not checked in.

## Commands

```bash
npm install          # install deps (required — node_modules not committed)
npm run dev          # start dev server on http://localhost:3000
npm run build        # production build (see "Build gotcha" below)
npm run start        # serve the production build
npm run lint         # eslint via flat config (eslint.config.mjs)
```

There is no test suite configured.

## Build gotcha — static export vs. API route

[next.config.ts](next.config.ts) sets `output: "export"` (with `images: { unoptimized: true }`), which produces a fully static site in `out/`. **But** the project also ships [app/api/contact/route.ts](app/api/contact/route.ts), which requires a Node server runtime (it instantiates a Nodemailer transport).

These two cannot both be live in production simultaneously. When working in this repo, decide intentionally:

- If the contact form must work in prod → remove `output: "export"` and deploy as a Node/Vercel server app.
- If the site must remain a static export → the `/api/contact` route will not exist in `out/` and the booking modal's `fetch("/api/contact")` will 404. Move the form action to an external service (Resend, Formspree, etc.) — `resend` is already in dependencies.

Don't silently "fix" one side without confirming which deployment model is intended.

## Required environment variables

Used by [app/api/contact/route.ts](app/api/contact/route.ts):

- `GMAIL_USER` — Gmail address used as the SMTP sender.
- `GMAIL_APP_PASSWORD` — Gmail App Password (not the account password).
- `CONTACT_EMAIL` — destination address for booking notifications.

`.env*` is gitignored.

## Architecture

Single-page marketing landing for a real-estate-website agency. Everything renders from one route:

[app/page.tsx](app/page.tsx) composes the page in a fixed order: `Navbar → Hero → Marquee → Services → Why → Process → Testimonials → Pricing → FAQ → CTA → Footer`. Each block is a sibling section in [components/](components/); navigation is anchor-based (`#services`, `#pricing`, etc.) — there are no other routes.

[app/layout.tsx](app/layout.tsx) sets up the two Google fonts (`Cormorant Garamond` serif and `DM Sans` sans) as CSS variables (`--font-cormorant`, `--font-dm-sans`) and mounts the global custom [Cursor](components/Cursor.tsx) once for the whole site.

### Styling model — read this before editing UI

The codebase mixes three styling layers and they each own a distinct concern:

1. **CSS variables in [app/globals.css](app/globals.css):** the design tokens (`--ink`, `--bone`, `--gold`, `--gold-accent`, `--serif`, `--sans`, etc.). All colors and font families come from here. Use these tokens — don't hard-code hex values.
2. **Inline `style={{}}` props:** the dominant pattern for component-level layout, typography, and one-off effects. Most components are styled almost entirely inline (see [Hero.tsx](components/Hero.tsx), [BookingModal.tsx](components/BookingModal.tsx)).
3. **Global CSS classes in [globals.css](app/globals.css):** reserved for shared, repeated patterns — `.section-label`, `.pricing-grid`/`.price-card`/`.price-cta`, `.faq-inner`/`.faq-item`, `.marquee-track`, `.reveal`, `.cursor`/`.cursor-ring`, `#cta-final`, plus the responsive `@media` overrides at the bottom of [globals.css](app/globals.css). Pricing and FAQ are duplicated across both inline styles and global classes — modify both sides when changing layout.

Tailwind is installed but barely used; `className`-driven Tailwind utilities are not the convention here.

### Custom cursor

[Cursor.tsx](components/Cursor.tsx) replaces the native cursor site-wide — `cursor: none !important` is enforced by a broad selector list in [globals.css](app/globals.css). It tracks mouse position with rAF and a `MutationObserver` re-attaches `mouseenter`/`mouseleave` "grow" handlers to `a, button, .service-card, .faq-item` whenever the DOM changes. If you add new interactive elements that should grow the cursor, either give them one of those selectors or extend the selector list in `Cursor.tsx`.

### Reveal-on-scroll

[RevealWrapper.tsx](components/RevealWrapper.tsx) (`<Reveal>`) wraps content in a `.reveal` div and uses `IntersectionObserver` (threshold 0.12, fires once) to add `.visible`. The CSS lives in [globals.css](app/globals.css) (`.reveal`, `.reveal-d1`…`.reveal-d4`). Prefer wrapping with `<Reveal delay={0.1}>` over reimplementing the observer.

### Booking flow

[Pricing.tsx](components/Pricing.tsx) holds plan state and conditionally mounts [BookingModal.tsx](components/BookingModal.tsx), which `POST`s `{ name, email, phone, plan }` to `/api/contact`. Server-side, [app/api/contact/route.ts](app/api/contact/route.ts) renders an HTML email and sends it via Nodemailer/Gmail. The modal's UX assumes 200 OK on any non-throw — it does not branch on `response.ok`. See "Build gotcha" above for why this route may not exist in production.

### Path alias

`@/*` resolves to the repo root ([tsconfig.json](tsconfig.json)), so imports look like `import Hero from "@/components/Hero"`.

### Assets

The hero image [public/LH-photo.png](public/LH-photo.png) is ~21 MB and committed. Replace or compress before any production deploy — this is the single biggest payload on the page.
