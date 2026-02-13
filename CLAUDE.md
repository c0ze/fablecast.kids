# Fablecast Landing Page

## Overview

Marketing landing page and signup flow for the Fablecast subscription service. Single-page React application with Firebase authentication and Firestore user profiles.

**Domain:** fablecast.kids
**Target audience:** Parents of children aged 3-8

## Tech Stack

- **Framework:** React 18 (hooks, no router)
- **Build:** Vite 5
- **Styling:** Tailwind CSS 3 with custom theme
- **Auth/DB:** Firebase (Google OAuth + Firestore)
- **Fonts:** Fraunces (display), Nunito Sans (body)

## Project Structure

```
fablecast.kids/
├── index.html              # HTML shell entry point
├── src/
│   ├── main.jsx            # React 18 entry (StrictMode)
│   ├── App.jsx             # Entire landing page (single component)
│   ├── index.css           # Global styles, animations, Tailwind directives
│   └── firebase.js         # Firebase init (graceful degradation if no config)
├── dist/                   # Production build output (do not commit)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Running

```bash
npm run dev       # Start dev server
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Environment Variables

Firebase config via Vite env vars (in `.env` or hosting provider):

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

If these are missing, Firebase features degrade gracefully (auth exports `null`).

## Architecture

- **Single-component SPA:** All logic lives in `App.jsx` (~770 lines). No routing, no state library.
- **Data-driven:** Story series, pricing tiers, and features are defined as arrays at the top of `App.jsx` and rendered via `.map()`.
- **Firebase integration:** Google Sign-In → Firestore user profile with plan, age range, language, and series preferences.
- **Scroll animations:** Intersection Observer triggers `.reveal` → `.is-visible` CSS transitions. Respects `prefers-reduced-motion`.

## Theme

Custom Tailwind palette in `tailwind.config.js`:

| Token       | Hex       | Use                   |
|-------------|----------|-----------------------|
| `cosmos`    | `#2C194A` | Deep purple background |
| `twilight`  | `#4B2E83` | Purple accent          |
| `moonbeam`  | `#FFF8EB` | Warm cream text        |
| `starlight` | `#F4D27A` | Golden highlight       |
| `plumMist`  | `#6B4FA2` | Light purple accent    |
| `page`      | `#FFFDF7` | Off-white background   |

Custom animations: `drift` (vertical float), `marquee` (horizontal scroll).

## Landing Page Sections

1. **Hero** — Value prop + daily batch snapshot
2. **Marquee** — Auto-scrolling today's titles
3. **Language demo** — Interactive EN/TR/JA switcher
4. **Feature cards** — Pipeline capabilities
5. **Story carousel** — 6 series with touch swipe + auto-rotate (4.5s)
6. **Pricing** — Free tier + diminishing monthly plan + lifetime option
7. **Auth + onboarding modal** — Google Sign-In → language, series selection

## Pricing Model

Diminishing price model: the monthly price decreases the longer a user stays subscribed, eventually becoming free after 5 years.

| Phase | Price    | When          |
|-------|----------|---------------|
| Free  | $0       | 6 sample books, no card required |
| 1     | $4.99/mo | Months 1–6    |
| 2     | $3.99/mo | Months 7–12   |
| 3     | $2.99/mo | Months 13–24  |
| 4     | $1.99/mo | Months 25–36  |
| 5     | $0.99/mo | Months 37–60  |
| 6     | Free     | After 5 years |

**Lifetime Membership:** $99 one-time payment for permanent full access to all current and future content.

## Conventions

- **Do not commit:** `.env`, `dist/`, `node_modules/`
- **No component splitting yet** — `App.jsx` is monolithic by design for this stage
- **Mobile-first** — Touch gestures on carousel, responsive layout throughout
- **Accessibility** — `prefers-reduced-motion` support, semantic HTML
