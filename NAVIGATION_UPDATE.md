# Navigation redesign

## Navigation hierarchy

Five persistent, high-value discovery links:

1. **Home** — introduce the mission and show ways to engage.
2. **Our Work** — show programmes and practical community benefit.
3. **Campaigns** — highlight active causes and progress.
4. **Gallery** — document campaigns, awards and the boxing tournament.
5. **Reflections / Stories** — communicate community impact and recognition.

The gold **Get involved** header call to action is visible at every screen size. Other pages including Donate, Contact, Assistance, Awards and Privacy remain accessible through the home page, contextual links and footer. Nothing was deleted.

## Implementation

The project uses **React, Vite and React Router**, not Next.js. `src/components/Navbar.jsx` is the equivalent of the supplied Next.js example, replacing `next/link` with `react-router-dom` links and using URL-aware active state instead of an on-click-only state. CSS renders an animated shared active pill, green lamp and frosted/glass surface without an additional Framer Motion dependency; less data is downloaded and there is one fewer dependency to secure. CSS honours reduced-motion preferences.

- Mobile and tablet (<1024px): a labelled, five-icon bottom dock with generous touch targets and safe-area support; the footer includes extra bottom clearance.
- Desktop (>=1024px): an always-visible centred floating pill at the top, anchored over a persistent branded header.
- The low-data switch remains available in the header as an accessible icon button at all widths.
- Current route is reflected by the highlighted pill, including programme activities and awards stories. The primary landmark is labelled `Primary navigation`, with `aria-current` and visible focus styles.

## Check before deployment

1. `npm ci`, `npm run dev`, and `npm run build` in a Node version supported by this Vite release.
2. Verify 320px, 375px, 768px, 1024px and 1440px widths; use keyboard and screen reader.
3. Test Get involved CTA, bottom safe-area, live low-data toggle, and the active tab after refresh, direct links and browser Back/Forward navigation.
4. Reconfirm the foundation's approved problem statement and publishing rights for any event photographs or award recipients before launch.

The work remains a frontend prototype; donations and beneficiary submissions are not live services.
