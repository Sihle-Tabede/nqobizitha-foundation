# Homepage engagement and curved gallery update

## What the visitor sees

The hero is action-led: **Join a campaign**, **See our impact** and **Volunteer or partner**.
Immediately below are three prominent cards covering those pathways, each with a concrete destination.

| Pathway | Destination | Honest next step |
| --- | --- | --- |
| See Our Impact | `/#impact` | Published coverage, the award archive and campaign purposes, with no invented outcome totals |
| Join a Campaign | `/campaigns` | Read the campaign purpose and use the linked foundation channels to enquire |
| Become a Volunteer or Partner | `/get-involved#volunteer` / `/get-involved#partner` | Read participation options; reach out via the public foundation channel |

The impact section avoids claiming unverified numbers, beneficiary totals, donated amounts or successful application submissions.

## Homepage gallery

`src/components/CircularGallery.jsx` is adapted from the supplied `CircularGallery` component. It maintains the image-and-caption data structure (`image`, `text`) and the `bend`, `borderRadius` and `scrollSpeed` settings, but uses CSS transforms and React state instead of OGL shaders/WebGL. This keeps the curved carousel effect without continuous rendering on budget phones. Behaviour:

- Centred active image and arced neighbouring images; wraparound previous/next controls.
- Pointer swipe/drag and horizontal wheel/Shift+wheel support while preserving ordinary vertical page scrolling.
- Clear caption and **Illustrative image** label for stock photos.
- Changes to low-data mode and reduced-motion preference display readable, naturally scrollable gallery cards instead.
- The exact CTA **Click to explore** is centred below the carousel and links to `/gallery` with category filters and story details.

Items are sourced from `src/data/stories.js`. Do not substitute unapproved personal photographs, misleading event images, guessed award records or unverified campaign statistics. The current photos are illustrative.

## Privacy and delivery boundaries

This remains a **frontend-only prototype**, not a production donation, application or messaging service. The volunteer route no longer asks visitors to enter personal information into a nonfunctional application form. It directs interested users to a linked public contact route and reminds them not to share IDs, banking details or beneficiary records in public comments. Contact, donations, payments and confidential assistance must not be described as operational until secure, verified infrastructure exists.

## Local testing

```bash
npm ci
npm run dev
npm run build
```

Checks to perform before publication: desktop and low-end mobile widths; navbar remains visible; the three CTAs navigate correctly; `/#impact` scrolls to its section; the volunteer and partner hashes work; arrows and touch gestures move the carousel; reduced-motion and low-data fallbacks work; the centred gallery CTA opens `/gallery`; no false form-delivery claims; security headers apply on the chosen host. Run axe / keyboard / screen-reader reviews plus contrast tests for WCAG 2.2 AA.

The supplied dependencies contain no Linux native Rolldown binary in this environment, and npm registry resolution is unavailable here. Source syntax and local imports can be checked, but a clean platform-specific install and production build must be confirmed on the development machine before deployment.
