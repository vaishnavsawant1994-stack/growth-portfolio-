# Growth Portfolio — Reference Reconstruction

Reference: https://growth-haus-wbs.framer.website/  
Target: https://github.com/vaishnavsawant1994-stack/growth-portfolio-  
Deployment target: Vercel

## Status

**Work in progress. Not pixel-perfect and not production-certified.**

This repository contains a dependency-free, original-code structural reconstruction of the public navigation and route templates. It is not an export of the Framer template. Visual matching, motion matching, licensed asset replacement, forms, and browser-based regression testing are outstanding.

## Verified public route inventory (25)

### Shared/static pages (12)
- /
- /mentorship
- /case
- /about
- /blog
- /contact
- /book-a-call
- /service
- /link-in-bio
- /thank-you
- /legal-pages/privacy-policy
- /legal-pages/terms-conditions

### Case-study entries (6)
- /case/maya.makes.bread
- /case/theo.fitlab
- /case/studio.nora
- /case/jess.copywrites
- /case/danny.cuts
- /case/lea.paints

### Journal entries (7)
- /blog/the-3-second-rule-why-reels-lose-viewers-before-the-hook
- /blog/how-to-sell-in-the-dms-without-sounding-like-a-bot
- /blog/niche-down-without-boxing-yourself-in-the-3-pillar-method
- /blog/the-save-worthy-carousel-a-7-slide-structure-that-gets-bookmarked
- /blog/the-5-frame-story-sequence-i-use-to-sell-every-week
- /blog/faceless-reels-that-still-build-trust-8-formats
- /blog/how-to-pitch-a-collab-when-your-account-is-small

## Observed content and interaction inventory

- Header: page navigation, free resource link, strategy-call CTA, mobile navigation to verify
- Home: editorial hero, follower/client/revenue stats, pain-point copy, four-step Haus method, mentor profile, service offer, case-study proof, DM-style testimonials, email lead magnet, FAQ, blog preview, final CTA
- Mentorship: suitability guidance, three-month roadmap, inclusions, application CTA
- Services: premium offer and four standalone offerings with cards/pricing
- Case studies: six client result cards and six shared detail pages, metrics and cross-links
- Blog: featured post, six additional entries, shared detail pages, mailing-list form
- About: creator biography, social-profile mockup, history, mentor positioning
- Contact: topic choices, required name/email/Instagram/follower fields, message, privacy link and contact details
- Booking: preparation checklist, expected follow-up process, scheduling integration to verify
- Link in bio: compact social profile and link stack
- Thank-you: confirmation view, **must only be used following a real successful submission**
- Legal: privacy and terms routes, legal content requires owner-approved copy

## Copyright and licensing

The reference is a Framer Marketplace template by Salim from Webestica, marked **Free** and **Limited license** (https://www.framer.com/marketplace/templates/growth-haus/). Free does not automatically authorize copying source code, photography, fonts, graphics, testimonials, or template assets into a separately hosted Vercel website.

This repository therefore uses original code and CSS-drawn substitute surfaces **marked as unverified**. No third-party imagery or font files have been taken from the reference. The site's provided sample identity and case labels are for structural route mapping and need license/ownership review before a commercial launch. Legal copy and working marketing integrations are not invented.

## Run

Dependency-free static HTML/CSS/JS. For local preview:

```sh
python -m http.server 8000
```

On a static host, configure route fallback to `/index.html`; `vercel.json` provides this rewrite.

## Forms

Forms display a truthful configuration-required message until an owner-controlled endpoint is supplied via `window.GROWTH_FORM_ENDPOINT` in a deployment-specific script/config. Never show success without an actual successful request. Avoid transmitting user data to the template creator or a third-party by default.

## Required acceptance evidence (not yet completed)

1. Obtain/confirm legal permission and owner-controlled content and media.
2. Open all 25 reference routes in a full browser; capture corresponding 320, 375, 430, 768, 1024, 1440, 1920, 2560px screenshots, including interaction states.
3. Extract verified computed font metrics, colors, breakpoints, images and timing; replace approximate CSS and substitute media.
4. Compare side-by-side, including overlays and motion frames; record and resolve deviations.
5. Configure tested contact, download, subscribe and booking integrations.
6. Run browser navigation, keyboard, mobile touch, reduced-motion, cross-browser, accessibility and performance tests.
7. Deploy to Vercel and verify the actual deployment URL before declaring production readiness.

No performance score, FPS, visual-similarity percentage, build-test pass, or deployment is claimed without executed evidence.
