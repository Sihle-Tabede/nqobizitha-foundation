# Nqobizitha Thabede Foundation — Accessible Community Website

A React/Vite frontend prototype focused on community upliftment in uPhongolo, KwaZulu-Natal. This is an updated iteration of the source project, **not a live transactional platform**.

## Why this website exists (inferred from the supplied project)

Community information about relief, youth opportunities, events, the Nqobizitha Boxing Tournament and the Umuntu Ubongwa Esaphila Awards is dispersed across public posts. Families, young people, volunteers, donors and sponsors need a **clear, affordable, accessible and trustworthy** way to discover activities, understand fundraising purposes, find verified updates and learn how to take part.

**The ZIP supplied did not contain a separately stated, official problem statement.** This is a working problem framing inferred from existing content; compare it against the foundation's approved statement before publishing.

## Navigation (latest update)

The site now has a consistent floating navbar: **Home, Our Work, Campaigns, Gallery, and Reflections**. On desktop the five links appear in a centred, animated glass-effect pill at the top, and on mobile/tablet in an icon-and-label dock at the bottom. A visible **Get involved** button and the low-data switch remain in the branded header. The active link follows the current React Router URL; the interaction uses lightweight CSS instead of Next.js or Framer Motion. Other site sections are available from the footer and context links. See `NAVIGATION_UPDATE.md` for detail.

## Implemented sections

- **Homepage engagement redesign:** three visible action pathways directly below the hero — **See Our Impact** (`/#impact`), **Join a Campaign** (`/campaigns`), and **Become a Volunteer or Partner** (`/get-involved#volunteer`, `/get-involved#partner`). Each points to existing content or a functioning public contact route; no fake completed actions or donation metrics.
- **Curved homepage gallery:** `src/components/CircularGallery.jsx` adapts the supplied circular-gallery API (`items`, `bend`, `borderRadius`, `scrollSpeed`) and feel using performant CSS transforms instead of OGL. Swipe left/right, click previous/next, or use trackpad horizontal scrolling / Shift+wheel; the carousel wraps around. A centred **Click to explore** button opens `/gallery`.
- **Accessible gallery fallback:** switches to native horizontal scroll-snap cards for low-data mode and `prefers-reduced-motion`. It does not create a perpetual WebGL/animation loop and respects the existing low-data image suppression.
- Home retains the campaign, programme, gallery, reflection and sourced awards-recipient information.
- `/gallery`: six editorial activity/campaign story cards, category filters (All, Campaigns, Boxing, Awards, Activities), native keyboard-accessible dialog, explicit illustrative-image labels, links to published reporting or official channels.
- `/reflections`: three *editorial* reflections, clearly distinguished from personal testimonials, and a *partial press-sourced* awards recipient archive.
- `/awards`: existing programme/timeline plus press-sourced 2024 recipient cards.
- `/activities`: linked to the gallery.
- `/privacy`: plain-language online-safety guidance and honest description of prototype limits.
- `/request-assistance`: safer status page **with no fake confidential intake form**. Points visitors toward verified channels and explains not to post private documents or stories publicly.
- `/donate`: amount preview only, no financial details and no payment transaction.
- `/get-involved` now offers an actionable route through the foundation's linked public channels for volunteering or partnerships instead of an unconnected volunteer application form. The Contact form remains a **clearly marked local-only demo** (no backend submissions).

## Accessibility and affordability

- Accessible headings, labelled controls, accessible filter statuses, keyboard focus indicators and a skip-to-content link.
- Motion reduction (`prefers-reduced-motion`) is honoured, including section hash navigation.
- Gallery details use the native `<dialog>` (Escape to close and browser-provided keyboard focus handling); visible close button.
- Low-data toggle in the navigation **avoids fetching optional remote images** and retains user preference locally. Browsers advertising `Save-Data` initialise the toggle automatically when no preference is stored.
- Lazy-loaded stock images with smaller requested widths and quality, compact local WebP/PNG logo; system fonts to avoid third-party font downloads.
- No OGL/WebGL dependency, paid gallery library, API subscription, tracking scripts, advertising pixels or backend hosting required for this stage.

## Security and privacy boundaries

- No authentication, server-side data collection, database, private photo uploads, payment processing or voting exists in this frontend-only release.
- Visitors are advised not to share identity documents, precise addresses, banking information or sensitive beneficiary stories publicly.
- Source data is rendered with React's standard escaped text rendering, **not** injected as raw HTML.
- External links use `rel="noopener noreferrer"` with `target="_blank"` where relevant.
- `public/_headers` provides sample Content Security Policy, referrer, MIME and browser-feature restrictions for **Netlify / Cloudflare Pages** hosting. Other hosts require equivalent headers configured manually. Production enforcement must be checked after deployment.
- Site must be deployed over HTTPS.
- Dependencies are pinned to the existing lockfile versions instead of `latest`; update them intentionally after review.
- This release is **not** evidence of completed penetration testing, WCAG conformance, POPIA compliance or deployment security. Those require additional assessment.

## Getting started

Requirements: Node.js 20.19+ or 22.12+, npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

The uploaded source archive included Windows native development packages. Those were intentionally **excluded from the deliverable** so `npm ci` will install platform-appropriate dependencies. A clean build could not be executed inside the provided Linux runtime because its local Vite/Rolldown binary was unavailable and fresh downloads were unavailable; JSX source parsing and static checks were performed instead. **Run `npm ci && npm run build` in your environment before deployment.**

## Maintaining the gallery and awards records

Content is stored in:

- `src/data/stories.js` — editorial reflections, gallery items, partial awards-recipient entries and their references.
- `src/data/content.js` — campaign goals, programme details, annual awards milestones and official social links.

Replace stock images **only with photos you have the right and consent to publish**. For each photo, collect source/photographer, rights, the date, event description, publish permission and additional guardian authorisation where children are identifiable. Ensure meaningful `photoAlt` text. Never silently represent illustrative imagery as documentary photography.

Past winners listed in this version are **press-caption references only** from the 2024 Zululand Observer article, not a full or officially verified archive. Confirm exact name spelling, category, year and consent before adding official profiles. Do not invent testimonials, donation totals, campaign outcomes, event dates or winner biographies.

Current news sources used for the editorials:

- [Zululand Observer, 19 December 2024 — Pongola NPO recognises good deeds](https://www.citizen.co.za/zululand-observer/news-headlines/local-news/2024/12/19/pongola-npo-recognises-good-deeds/)
- [Daily Sun, June 2025 — Nqobizitha tournament reporting](https://www.snl24.com/dailysun/celebs/uzalo-stars-cebo-mthembu-and-thembinkosi-thwala-to-box-in-real-life-at-nqobizitha-tournament-in-kzn-20250608/)

## Before launching real community services

1. Approve the problem statement, foundation identity, official URLs, campaign facts and image permissions.
2. Provide a private, accessible reporting channel with consent, data-minimisation, documented retention periods, owner accountability and safeguarding for vulnerable beneficiaries (POPIA review).
3. Build protected server-side submissions with schema validation, rate limits, spam controls, sanitised uploads, encrypted storage in transit/at rest, fine-grained admin access, audit records and tested incident response.
4. Use an authorised payment processor and verify the beneficiary of payments; never collect card details directly in the frontend.
5. If running awards voting, define and implement anti-abuse measures, transparency, independent result verification and clear nomination rules.
6. Test with real low-end devices, South African mobile connectivity and assistive technologies; review accessibility against WCAG 2.2 AA.
7. Configure/verify security headers, HTTPS, hosting privacy, backups, CI tests and dependency updates on the actual hosting platform.

For homepage changes and gallery interactions see `HOMEPAGE_ENGAGEMENT_UPDATE.md`. For the feature roadmap see `PROJECT_DIRECTION.md`.
