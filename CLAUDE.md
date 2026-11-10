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
npm run build        # production build (see "Deployment model" below)
npm run start        # serve the production build
npm run lint         # eslint via flat config (eslint.config.mjs)
```

There is no test suite configured.

## Deployment model

Deploys to Vercel as a Node/server app. [next.config.ts](next.config.ts) is empty (defaults), so Next builds in hybrid mode: the page prerenders as static, while [app/api/contact/route.ts](app/api/contact/route.ts) runs as a serverless function for the lead form.

There is no separate `out/` directory in this mode — Vercel handles `.next/` directly. If you ever need to switch back to a fully static export (e.g. for here.now or another static host), add `output: "export"` and `images: { unoptimized: true }` to next.config.ts, and accept that `/api/contact` will not exist in production (the lead form will show its error state on submit unless rewired to an external service like Resend or Formspree).

**Case-sensitive paths:** Vercel runs Linux. The hero video at `/Luxury%20Homes%20Hero.mp4`, its poster `/hero-poster.jpg` and the logos at `/brand/lh-logo-dark.png` and `/brand/lh-logo-light.png` must match disk casing exactly. macOS is case-insensitive so bugs here only surface in production.

## Required environment variables

Used by [app/api/contact/route.ts](app/api/contact/route.ts):

- `GMAIL_USER` — Gmail address used as the SMTP sender.
- `GMAIL_APP_PASSWORD` — Gmail App Password (not the account password).
- `CONTACT_EMAIL` — destination address for booking notifications.

`.env*` is gitignored.

## Architecture

Single-page marketing landing for a real-estate-website agency. Everything renders from one route:

[app/page.tsx](app/page.tsx) composes the page in a fixed order: `Navbar → Hero → LeadForm → TrustStrip → Services → Work → Why → Process → Testimonials → Pricing → FAQ → CTA → Footer`. Each block is a sibling section in [components/](components/); navigation is anchor-based (`#services`, `#work`, `#process`, `#pricing`, `#faq`) and every call to action points at the lead form (`#start`) — there are no other routes. The layout follows the "Cream & Gold" homepage design (light cream page, dark Work/CTA/footer bands, gold accents).

[app/layout.tsx](app/layout.tsx) loads three Google fonts as CSS variables — `Gloock` (`--font-gloock`, headings), `Instrument Serif` normal + italic (`--font-instrument-serif`, italic accents, numerals, quotes) and `Outfit` (`--font-outfit`, body/UI, weight 300 by default) — and mounts the global custom [Cursor](components/Cursor.tsx) once for the whole site.

Of the components rendered on the page, only [LeadForm](components/LeadForm.tsx), [Pricing](components/Pricing.tsx), [HeroVideo](components/HeroVideo.tsx), [BookingContext](components/BookingContext.tsx), [Cursor](components/Cursor.tsx) and [RevealWrapper](components/RevealWrapper.tsx) are client components; every other section is a server component. ([Logos.tsx](components/Logos.tsx) is an old, unused component.) Hover effects live in CSS classes, not `onMouseEnter` handlers, so keep it that way unless a section genuinely needs state.

### Styling model — read this before editing UI

The codebase mixes three styling layers and they each own a distinct concern:

1. **CSS variables in [app/globals.css](app/globals.css):** the design tokens — surfaces (`--cream`, `--cream-deep`, `--paper`, `--ink`, `--night`, `--night-deep`), gold (`--gold` for accents on light, `--gold-light` on dark, `--gold-deep` for small gold text on light), text ramps (`--text-*` on light, `--on-dark-*` on dark), lines (`--line*`) and font families (`--display`, `--serif`, `--sans`). All colors and font families come from here. Use these tokens — don't hard-code hex values (the HTML email in the API route is the one exception: mail clients don't support CSS variables).
2. **Inline `style={{}}` props:** one-off typography, spacing and colors inside a component (always via tokens).
3. **Global CSS classes in [globals.css](app/globals.css):** shared, repeated patterns and anything that needs `:hover` or a media query — `.container`, `.section`/`.section-head`, `.eyebrow`, `.title` (section headings; `<em>` inside renders as the gold Instrument Serif italic), `.lead`, `.btn` + variants (`.btn-dark`, `.btn-outline`, `.btn-gold`, `.btn-gold-light`, `.btn-ghost`, `.btn-sm`, `.btn-block`), `.grid-3`/`.grid-4`, `.field`/`.field-input`, `.ph-*` placeholders, per-section layout classes (`.hero-*`, `.lead-*`, `.service-*`, `.work-*`, `.why-*`, `.faq-*`, `.cta-*`), `.reveal`, `.cursor`/`.cursor-ring`, plus the responsive `@media` overrides at the bottom. Inline styles beat these classes, so never set a property inline that a media query needs to change.

Wrap dark bands in `.tone-dark`: it switches text to `--paper`, eyebrows to `--gold-light` and sets `--accent` so `.title em` uses the lighter gold.

Tailwind is installed but barely used; `className`-driven Tailwind utilities are not the convention here.

### Image placeholders

The design's screenshots/mockups don't exist yet, so [Placeholder.tsx](components/Placeholder.tsx) renders striped stand-ins (`tone="light" | "dark"`) labelled with what belongs there — in Work, Why and CTA. Bracketed copy such as `[Client name]` / `[City, State]` next to them is also placeholder text. Swap each for a `next/image` when the real asset arrives.

### Custom cursor

[Cursor.tsx](components/Cursor.tsx) replaces the native cursor on devices with a fine pointer — `cursor: none !important` is applied inside a `(hover: hover) and (pointer: fine)` media query in [globals.css](app/globals.css), and the cursor elements are hidden on touch devices. It tracks mouse position with rAF and a `MutationObserver` re-attaches `mouseenter`/`mouseleave` "grow" handlers to `a, button, summary, input, select` whenever the DOM changes. If you add new interactive elements that should grow the cursor, either use one of those elements or extend the selector list in `Cursor.tsx`.

### Reveal-on-scroll

[RevealWrapper.tsx](components/RevealWrapper.tsx) (`<Reveal>`) wraps content in a `.reveal` div and uses `IntersectionObserver` (threshold 0.12, fires once) to add `.visible`. The CSS lives in [globals.css](app/globals.css) (`.reveal`, `.reveal-d1`…`.reveal-d4`) and is disabled under `prefers-reduced-motion`. Prefer wrapping with `<Reveal delay={0.1}>` over reimplementing the observer. The wrapper `div` becomes the grid/flex item, so pass layout classes through its `className`/`style` props, and don't wrap `<li>`s (it would put a `div` inside the `<ol>`/`<ul>`).

### Booking flow

The inline [LeadForm](components/LeadForm.tsx) (`#start`, right after the hero) is the only form. Pricing "Book a call" buttons link to `#start` and call `selectPlan()` from [BookingContext](components/BookingContext.tsx); the form panel then shows the chosen plan and includes it in the submission. The form `POST`s `{ name, email, phone, market, website, role, plan }` to `/api/contact`. Server-side, [app/api/contact/route.ts](app/api/contact/route.ts) requires `name` and a valid `email` (400 otherwise), trims/caps every field, HTML-escapes them into the email and sends it via Nodemailer/Gmail with `replyTo` set to the lead. The form shows the thank-you state only on `response.ok` and an error message otherwise (e.g. missing Gmail env vars → 500). See "Deployment model" above for why this route may not exist in production.

### Path alias

`@/*` resolves to the repo root ([tsconfig.json](tsconfig.json)), so imports look like `import Hero from "@/components/Hero"`.

### Assets

Brand logos live in [public/brand/](public/brand/) (`lh-logo-dark.png` for light surfaces, `lh-logo-light.png` for dark), rendered through `next/image`.

The hero's right-hand box plays `public/Luxury Homes Hero.mp4` (1920×1080, 21 s, ~18 MB) through [HeroVideo.tsx](components/HeroVideo.tsx): muted loop, `preload="none"`, started from `useEffect` only when `prefers-reduced-motion` isn't set (reduced-motion visitors keep the poster and never download the video). The poster `public/hero-poster.jpg` (~230 KB) is the video's first frame, so playback starts without a visual jump. It is preloaded with `fetchPriority: "high"` since it's the biggest above-the-fold image. If you re-encode the video, regenerate the poster from its new first frame.

`public/LH-photo.png` (~21 MB, the old poster, which didn't match the video) and `public/Logos/*.png` are committed but not referenced by the page. Compress anything you bring back before deploying.
