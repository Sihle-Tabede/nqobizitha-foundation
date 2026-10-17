# Nqobizitha Foundation — Project Direction and Release Review

## Working problem statement (to be confirmed with foundation)

> Communities in and around uPhongolo face fragmented access to reliable information about charitable campaigns, youth opportunities, local sport, community recognition and assistance. Updates spread across social networks make it difficult for residents, volunteers, sponsors and donors to find trustworthy details, understand impact or participate, especially when data and digital access are limited. The foundation needs an inclusive, affordable and secure digital space that organises this information, protects vulnerable people and makes practical participation easier.

This is **proposed**, not supplied verbatim. Do not claim it has been signed off without confirmation.

## Problem ↔ feature alignment

| Identified challenge | Implemented response | Next stage |
|---|---|---|
| Social posts are scattered | Centralised campaigns, activities and filterable gallery | Verified update history with staff review |
| Good work goes unrecognised | Editorial reflections and reported 2024 award recipient examples | Consent-based verified winners archive, photographs and categories |
| Weak mobile data and low-cost devices | Low-data option, lazy media, system fonts, static frontend | Device testing and offline-friendly cache strategy |
| Visitors need trust and transparency | Sourced content, visible illustrative-image labelling, no made-up fundraising totals | Signed-off financial milestones, receipts and reporting |
| Online scams and beneficiary exposure | No fake intake or payments; safety guide and external link safeguards | Secure backed forms, consent, RBAC, POPIA work, abuse prevention |
| Hard to take part | Straightforward navigation and get-involved pathways | Secure follow-up management and volunteer scheduling |

## Release status

- Done: Gallery filters; story dialog; award recipient samples; editorial reflections; home/awards/activity integration; low-data control; photo/quote attribution; privacy-safety page; demo clarification; dependency pinning; static-host sample security headers.
- Incomplete: Real campaign/event photographs, official signed-off winner list, verified financial totals, real submissions, secure admin interface, payment provider, trusted site domain, production header verification, full device/assistive-technology audit.
- Validation: JSX parser checks passed. The build was attempted but was blocked by missing **Linux native bundler dependencies** in the supplied Windows-based node_modules; clean install/build required in a networked environment.

## Content approval checklist

- [ ] Get foundation-approved exact problem statement and organisational details.
- [ ] Confirm campaign description, goal and outcomes from foundation records.
- [ ] Obtain boxing and awards photos with required permission and attribution.
- [ ] Confirm all names/categories/years in official awards winners archive.
- [ ] Approve editorial reflections and event descriptions.
- [ ] Verify public contact channel and safer route for confidential support requests.

## Security priorities before live forms

**High:** Avoid identity-document collection unless absolutely necessary; HTTPS; backend schema validation; server-side authorisation; least privilege for beneficiary records; bot/rate-limit controls; encrypted data; secret management; logs excluding sensitive personal content; retention/deletion process; backups and restore tests.

**High:** If payments or voting are introduced, use purpose-built audited providers where appropriate. Verify offsite destinations, prevent duplicate submissions, review fraud/abuse and implement transparent disputes/resolution processes.

**Medium:** CI vulnerability checks; security.txt / vulnerability reporting route; CMS publishing roles and moderation; multi-factor authentication for staff; security-header testing on the chosen host; access reviews; volunteer-data minimisation.

**Accessibility:** Test screen-reader navigation, modal interaction, focus recovery, mobile screen sizes/zoom, large text, colour contrast, reduced motion and native control labels. No automatic WCAG 2.2 AA certification is claimed.
