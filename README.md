# Nqobizitha Thabede Foundation — Accessible Community Website

A React/Vite frontend prototype focused on community upliftment in uPhongolo, KwaZulu-Natal. This is an updated iteration of the source project, **not a live transactional platform**.

## Why this website exists (inferred from the supplied project)

Community information about relief, youth opportunities, events, the Nqobizitha Boxing Tournament and the Umuntu Ubongwa Esaphila Awards is dispersed across public posts. Families, young people, volunteers, donors and sponsors need a **clear, affordable, accessible and trustworthy** way to discover activities, understand fundraising purposes, find verified updates and learn how to take part.

**The ZIP supplied did not contain a separately stated, official problem statement.** This is a working problem framing inferred from existing content; compare it against the foundation's approved statement before publishing.

## Navigation and page structure (October 2026 revision)

The floating navbar now offers **Home, About, Our Work, Campaigns, Gallery, Awards, and Reflections**. A separate **Get involved** action and the low-data switch remain in the header. The active tab follows React Router's current pathname and works after reload and Back/Forward. On small devices, the seven routes use short text labels and icons above the bottom edge.

The **simplified homepage** features its core engagement sections:

1. A short introduction to the foundation, with one participation action.
2. A brief **About** preview linking to `/about`.
3. The three engagement pathways: **See Our Impact** (`/activities`), **Join a Campaign** (`/campaigns`) and **Volunteer or Partner** (`/get-involved`).
4. A brief **Awards & Reflections** preview linking to the existing full pages.
5. A **three-image-at-a-time gallery** with a real CSS grid gap, arrows, swipe, keyboard navigation and a centred **Click to explore** button linking to `/gallery`.

The homepage gallery intentionally shows **only photographs**. No category label, photo badge, caption, story details or dates appear on the image cards. Categories and full editorial descriptions remain on `/gallery`, where the user deliberately chooses to explore. A short note underneath identifies the images as illustrative.

The implementation uses CSS Grid instead of absolute-positioned cards or OGL/WebGL. Three preview images appear on phones and desktops, without overlapping; lighter imagery and no auto-play help reduce mobile data and device load. Low-data mode still suppresses fetching optional photographs, and reduced-motion preferences remain respected.

`src/components/PageHero.jsx` and `src/components/SectionHeading.jsx` now establish centre-aligned titles/subheadings throughout the site. The contact page was simplified: it links directly to the provided public channels rather than asking visitors to complete an unconnected demo form.

The longer programme, campaign, awards, reflections, activities and help pages remain accessible without crowding the homepage. No active route was removed.

## Included pages and boundaries

- `/about`: foundation introduction, purpose, founder and values.
- `/programmes`, `/activities`, `/campaigns`: detailed work and participation information.
- `/gallery`: filterable stories and source links (All, Campaigns, Boxing, Awards, Activities); photos are illustrative until approved event photos are supplied.
- `/reflections`: editorial community reflections (not invented beneficiary testimonials).
- `/awards`: awards dates, existing awards information and the partial press-sourced 2024 recipient archive.
- `/get-involved`: volunteering and partnership opportunities via public contact channels.
- `/contact`: published Facebook and Instagram channels. No fake contact submission.
- `/privacy`: online safety and the limits of the frontend prototype.
- `/request-assistance`: no confidential intake form until secure infrastructure exists.
- `/donate`: preview-only amounts with no payment processing or donor-data collection.

## Frontend administration preview (new)

Open **`/admin`** locally to see the separate administration interface. It includes editable local drafts for campaigns, gallery, awards, reflections and the foundation profile; an overview dashboard; search/filter; JSON export; reset; and a backend security roadmap. It uses browser localStorage only and does not publish changes. **There is no login or real access restriction yet; do not deploy the admin as a production portal.** See `ADMIN_FRONTEND_MVP.md` for the full feature description, usage and future backend integration plan.

## Accessibility and affordability

- Accessible headings, labelled controls, accessible filter statuses, keyboard focus indicators and a skip-to-content link.
- Motion reduction (`prefers-reduced-motion`) is honoured, including section hash navigation.
- Gallery details use the native `<dialog>` (Escape to close and browser-provided keyboard focus handling); visible close button.
- Low-data toggle in the navigation **avoids fetching optional remote images** and retains user preference locally. Browsers advertising `Save-Data` initialise the toggle automatically when no preference is stored.
- Lazy-loaded stock images with smaller requested widths and quality, optimized local WebP/PNG approved logo and emblem; system fonts to avoid third-party font downloads.
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

For this revision and carousel behaviour see `HOMEPAGE_ENGAGEMENT_UPDATE.md`. For the feature roadmap see `PROJECT_DIRECTION.md`.

## Approved brand identity

The approved final foundation logo now replaces the original website mark in the navbar and footer, with a matching favicon. See `LOGO_INTEGRATION.md` for source images, responsive use, and a note about the shorter foundation name appearing in the approved artwork.
