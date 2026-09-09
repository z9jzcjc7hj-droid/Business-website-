# R&N Detailing LLC — Website

A premium, conversion-focused marketing website for R&N Detailing LLC, a mobile
auto detailing company serving Cincinnati, Ohio and surrounding areas within
approximately a 50-mile radius.

Built with **React + Vite + Tailwind CSS**, deployable to **Netlify**.

---

## 1. Project File Structure

```
Business-website-/
├── index.html                  # Document shell, SEO meta tags, JSON-LD schema, hidden Netlify form
├── netlify.toml                # Netlify build & redirect config
├── package.json
├── tailwind.config.js          # Brand colors, fonts, animations
├── vite.config.js
├── postcss.config.js
├── .eslintrc.cjs
├── public/
│   ├── favicon.svg             # Placeholder favicon (R&N monogram)
│   ├── robots.txt
│   └── images/
│       ├── logo/                # <- put your real logo file(s) here
│       └── gallery/              # <- put real before/after photos here
└── src/
    ├── main.jsx                 # React entry point
    ├── App.jsx                  # Assembles all page sections
    ├── index.css                # Tailwind directives + shared utility classes
    ├── data/
    │   └── siteData.js          # ALL editable content lives here (see below)
    └── components/
        ├── Logo.jsx              # Logo placeholder — swap for real logo image
        ├── Navbar.jsx             # Sticky nav + mobile hamburger menu
        ├── Reveal.jsx             # Reusable scroll fade-in wrapper
        ├── Hero.jsx               # Homepage hero section
        ├── TrustBar.jsx           # "Mobile Service / Professional Equipment..." strip
        ├── Services.jsx           # Service cards + Basic Detail pricing + add-ons
        ├── Packages.jsx           # Basic / Premium / Supreme package cards
        ├── CeramicCoating.jsx     # Ceramic coating benefits + pricing + CTA
        ├── WhyChooseUs.jsx        # Why choose R&N section
        ├── Gallery.jsx            # Before/After gallery (placeholders)
        ├── Reviews.jsx            # Testimonials (clearly labeled placeholders)
        ├── CTASection.jsx         # Reusable bold call-to-action banner
        ├── ServiceArea.jsx        # Cincinnati service radius section
        ├── FAQ.jsx                # Accordion FAQ section
        ├── QuoteForm.jsx          # Quote request form (Netlify Forms-ready)
        ├── StickyQuoteButton.jsx  # Floating mobile "Get a Quote" button
        └── Footer.jsx             # Footer with contact/social placeholders
```

This is a **single-page site** (all sections live on one page, `App.jsx`) with
anchor-link navigation (`#services`, `#packages`, etc.), which is the standard,
SEO-friendly pattern for a small local service business site.

---

## 2. Installation

Requires **Node.js 18+** (Node 20 recommended).

```bash
npm install
```

## 3. Run Locally

```bash
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

## 4. Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the production build locally with:

```bash
npm run preview
```

## 5. Deploy to Netlify

**Option A — Netlify CLI**

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

**Option B — Git-connected deploy (recommended)**
1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**, select the repo.
3. Netlify will auto-detect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Netlify Forms will automatically pick up the quote request form
   (see section 7 below) — no extra configuration needed.

---

## 6. Editing Content

**Almost everything on the site is controlled from one file:**
`src/data/siteData.js`

This includes: business contact info, nav links, services, pricing, add-ons,
packages, ceramic coating benefits, "why choose us" points, gallery items,
testimonials, FAQs, and the quote form's dropdown options.

---

## 7. The Quote Form — Connecting a Backend

The form (`src/components/QuoteForm.jsx`) is fully functional on the front end
and defaults to **Netlify Forms**, which requires zero backend setup once
deployed on Netlify:

- `index.html` contains a hidden static `<form name="quote-request" data-netlify="true">`
  with every field name — this is what Netlify's build bots scan to register
  the form.
- The live React form in `QuoteForm.jsx` POSTs to `/` with the same
  `form-name` and field values on submit.
- Submitted leads will appear in your Netlify dashboard under
  **Site → Forms**, and you can set up email notifications there.

**To use Formspree (or another provider) instead:**
1. Create a form endpoint at [formspree.io](https://formspree.io) (or your
   provider of choice).
2. In `src/components/QuoteForm.jsx`, replace the `fetch('/', ...)` call
   inside `handleSubmit` with a POST to your new endpoint (a code comment
   directly above that function shows exactly how).
3. You can then remove the hidden form block from `index.html`.

A honeypot field (`company`) is included for basic spam/bot filtering.

---

## 8. Where To Insert Your Real Information

Everything below is currently a clearly-marked placeholder. Update these
before launch:

| What | Where | Notes |
|---|---|---|
| **Logo** | `src/components/Logo.jsx` | Drop your logo file in `public/images/logo/` and replace the placeholder `<div>` with an `<img>` tag (instructions are commented directly in the file). Used automatically in Navbar, Hero area, mobile menu, and Footer. |
| **Phone number** | `src/data/siteData.js` → `business.phone` and `business.phoneHref` | Update both the display text and the `tel:` link. |
| **Email address** | `src/data/siteData.js` → `business.email` and `business.emailHref` | Update both the display text and the `mailto:` link. |
| **Business address** | `src/data/siteData.js` → `business.address` | Shown in the footer and quote section. If you have no public storefront, you can change this to something like "Mobile service — no storefront location." |
| **Facebook / Instagram / TikTok / Google Business Profile links** | `src/data/siteData.js` → `business.facebookUrl`, `instagramUrl`, `tiktokUrl`, `googleBusinessUrl` | Replace the `'#'` placeholders with your real profile URLs. Icons are already wired up in the Footer. |
| **Real customer reviews** | `src/data/siteData.js` → `testimonials` array | Replace `name`, `vehicle`, `quote`, and set `placeholder: false` to remove the "Placeholder" badge. |
| **Real before/after photos** | `src/data/siteData.js` → `galleryItems` array | Add photos to `public/images/gallery/`, then set `beforeImg`/`afterImg` to the file paths (e.g. `/images/gallery/job1-before.jpg`). |
| **Domain name in SEO tags** | `index.html` (`<link rel="canonical">`, Open Graph/Twitter `og:url`, `og:image`) and `public/robots.txt` (sitemap URL) and the JSON-LD schema block | Currently placeholder `https://www.rndetailingllc.com/` — update to your real domain once purchased. |
| **Open Graph preview image** | `index.html` (`og:image`, `twitter:image`) | Currently points to `/images/og-cover.jpg`, which doesn't exist yet. Add a 1200×630px image at `public/images/og-cover.jpg` (a nice exterior/interior detail shot works well). |
| **LocalBusiness structured data** | `index.html` (`<script type="application/ld+json">`) | Update `telephone`, and consider adding a real `streetAddress` once you're ready to publish one, plus real `sameAs` social links. |

---

## 9. Design & Content Notes

- **Colors**: Black, dark charcoal, and vibrant purple, defined in
  `tailwind.config.js` under `theme.colors.brand`. Adjust the purple shades
  there to match your exact brand palette if needed.
- **Fonts**: "Rajdhani" (headings, aggressive automotive feel) + "Inter"
  (body text), loaded via Google Fonts in `index.html`.
- **Hero background & service-area graphic**: Built with CSS gradients and
  inline SVG (no stock photography used) to avoid placeholder/stock imagery
  that could look inauthentic. You're welcome to add a real photo of a
  detailed vehicle as a background image in `Hero.jsx` — a comment marks
  exactly where.
- **Animations**: Powered by `framer-motion` — fade-in-on-scroll sections,
  hover lift effects on cards, smooth accordion transitions on FAQ, and a
  sticky mobile quote button. Kept intentionally subtle for performance.
- **Pricing**: Reflects the exact numbers provided (Basic Detail: Sedan
  $225 / SUV $260 / Truck $275; add-ons; ceramic coating from $750), with
  copy throughout noting that final pricing depends on vehicle size,
  condition, and requested services.

---

## 10. Pre-Launch Checklist

- [ ] Replace logo, phone, email, address, and social links (see section 8)
- [ ] Add real before/after photos to the Gallery section
- [ ] Replace placeholder testimonials with real customer reviews
- [ ] Update the domain name across SEO/meta tags and `robots.txt`
- [ ] Add a real Open Graph preview image (`public/images/og-cover.jpg`)
- [ ] Connect the quote form to Netlify Forms (default, automatic) or Formspree
- [ ] Proofread all pricing and service descriptions for accuracy
- [ ] Test the quote form end-to-end after deploying to Netlify
- [ ] Verify on real iPhone/Android devices in addition to browser dev tools
