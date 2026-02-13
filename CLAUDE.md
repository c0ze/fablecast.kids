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

## SEO

The site targets a niche bilingual/multilingual audience rather than the generic "AI stories" market. All SEO is configured for the specific edge: multilingual children's stories in 7 languages.

### Keyword Strategy

Target long-tail niche terms: "bilingual children's books", "Turkish English bedtime stories", "Japanese English children's books", native-language keywords (cocuklara hikaye, 子供向け絵本, etc.). Avoid generic terms like "AI stories" or "kids books" where the domain has no authority.

### Crawlability (SPA)

Since this is a client-rendered React SPA, search engine crawlability is handled via:

- **Static `<head>` meta tags** — Title, description, keywords, canonical, OG, Twitter Card are all in `index.html` and visible without JS execution.
- **Structured data (JSON-LD)** — Organization, WebSite, Product/Subscription, and FAQPage schemas in `index.html`.
- **`<noscript>` fallback** — Full static HTML content block in `<body>` for crawlers that don't execute JavaScript. Contains all series descriptions, language info, pricing, and CTAs.
- **No SSR/pre-rendering** — Not needed for a single-URL SPA. Googlebot renders JS fine, and the noscript block covers everything else.

### SEO Files

| File | Purpose |
|------|---------|
| `public/robots.txt` | Allows all crawlers, disallows `/api/`, points to sitemap |
| `public/sitemap.xml` | Single canonical URL with hreflang alternates for all 7 languages |
| `index.html` | All meta tags, structured data, and noscript fallback |

### hreflang & Alternate Languages

All 7 language variants are declared via `<link rel="alternate" hreflang="...">` in `index.html` and `sitemap.xml`:
- `en` (default), `tr`, `ja`, `es`, `pt`, `de`, `fr`

### Structured Data Schemas

1. **Organization** — Name, URL, logo, contact email
2. **WebSite** — Name, URL, description, 7 languages
3. **Product** — Free and Member tier offers with pricing
4. **FAQPage** — Key questions for rich snippet eligibility

### Important SEO Notes

- Hash-based URLs (`#about`, `#faq`) are **not** indexed as separate pages by Google. The sitemap only lists the canonical root URL.
- The `og-image.png` is referenced in meta tags but **must exist** in `public/` — generate and add a 1200x630 OG image.
- Dynamic `document.title` and meta description are updated per page via i18n keys under `seo.*` in each locale file.
- After deploying, **register on Google Search Console**, verify DNS, and submit the sitemap.

## Conventions

- **Do not commit:** `.env`, `dist/`, `node_modules/`
- **No component splitting yet** — `App.jsx` is monolithic by design for this stage
- **Mobile-first** — Touch gestures on carousel, responsive layout throughout
- **Accessibility** — `prefers-reduced-motion` support, semantic HTML
