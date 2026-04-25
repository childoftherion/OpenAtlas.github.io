# Open Atlas — site

Rebuild of [openatlas.wiki](https://openatlas.wiki/).
[Astro](https://docs.astro.build/) wraps the static tree for a standard build and [GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) deploy.
There is no React/Vue/Svelte UI framework — only static HTML in `public/` and browser ES modules.

## Run locally

Use the Astro dev server:

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:4321/`).

To preview the production build:

```bash
npm run build
npm run preview
```

## Folder tour

```
├── astro.config.mjs                 Astro site + GitHub Pages base URL
├── package.json
├── public/                          copied verbatim to build output
│   ├── index.html                   home
│   ├── 404.html                     friendly not-found page
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── CNAME                        GitHub Pages custom domain (openatlas.wiki)
│   ├── pages/                       every non-home page
│   │   ├── explore/                 journal index (filterable by tag)
│   │   ├── pacific-northwest/       PNW + AK destinations directory
│   │   ├── fj13/                    the rig
│   │   ├── our-gear/                gear catalog + reviews
│   │   ├── fuel-the-adventure/      support page
│   │   ├── contact/                 contact info + form
│   │   ├── about/                   about the project + pillars + timeline
│   │   ├── resources/               trip-planning kit + field signals
│   │   └── journal/<slug>/          one folder per journal entry
│   └── assets/
│       ├── css/                     tokens, base, components, pages
│       ├── js/                      site chrome, components, page inits
│       │   └── pages/               one init module per page
│       ├── data/                    site.js, posts.js, destinations.js,
│       │                            gear.js, fj13.js, resources.js
│       ├── images/
│       │   ├── hero/                full-bleed hero photography
│       │   ├── posts/               journal thumbnails and inline shots
│       │   ├── destinations/        PNW feature photography
│       │   ├── gear/                real gear photos + SVG illustrations
│       │   ├── fj13/                FJ Cruiser photography
│       │   ├── travel/              travel-fund supporting photography
│       │   └── meta/                favicon + social-card assets
│       └── icons/                   reserved for shared inline SVGs
└── src/                             Astro scaffolding (no page routes yet)
```

## How the site is wired

- Every page loads the same four stylesheets and boots `assets/js/main.js` via a path
  relative to that HTML file.
- `main.js` renders the shared **header** and **footer** into `<div data-site-header></div>`
  and `<div data-site-footer></div>` slots, so you only define the chrome in one
  place (`public/assets/data/site.js` + `public/assets/js/site.js`). If the site is ever
  served under a URL prefix, that prefix is derived automatically using `import.meta.url`.
- If a page sets `<body data-page="home">`, `main.js` dynamically imports
  `assets/js/pages/home.js` and calls its `init()` function.
- Reveal-on-scroll is automatic for any element with the `reveal` class.
  `prefers-reduced-motion` is respected.

## Editing content

### Nav, brand, footer, tagline

Edit `assets/data/site.js`.

### Add a journal entry

1. Copy an existing folder under `pages/journal/` (e.g.
   `pages/journal/yeti-rambler-26oz-review/`).
2. Rename to your slug (`pages/journal/new-trip/`).
3. Update the `<title>`, meta description, breadcrumbs, and body content.
4. Set `data-slug="new-trip"` on `<body>` (drives the "more posts" list).
5. Open `assets/data/posts.js` and prepend a new entry:

   ```js
   {
     slug: "new-trip",
     title: "Your title",
     excerpt: "…",
     category: "Destination",
     tags: ["Hiking", "Volcano"],
     author: "freedomland",
     date: "2026-05-01",
     readMinutes: 7,
     image: "/assets/images/posts/new-trip-hero.jpg",
     imageAlt: "Describe the image.",
     url: "/pages/journal/new-trip/",
   }
   ```

6. Drop the cover image into `assets/images/posts/`.

That's it — the entry now shows up on the home page, on `/pages/explore/`,
and in the "more posts" row of every existing journal entry.

### Add a PNW destination

Open `assets/data/destinations.js` and push an entry under the right state.
Supported fields: `name`, `region`, `difficulty`, `managedBy`, `note`,
`planned` (boolean for "future trip" badge), and `post: "<slug>"` to
auto-link the destination name to a journal entry.

### Add a gear item

Open `assets/data/gear.js` and push into the right category's `items` array.
Each item supports `brand`, `name`, `image`, `imageAlt`, `blurb`, a
`details` array (rendered as bullet points), optional `review: "<slug>"`
(adds a "Read the review" button), and one or more `links`.

If a real photo isn't available, add a custom SVG to
`assets/images/gear/<slug>.svg` following the pattern already in that
folder (dark background gradient + ember accent geometry). The gear media
tile automatically switches SVGs to `object-fit: contain` with padding, so
illustrations read cleanly without cropping.

### Update FJ13

Everything — specs, gallery, and upgrades — is in `assets/data/fj13.js`.

### Trip-planning resources

`assets/data/resources.js` exports two arrays: `planningKit` (grouped
planning cards with `title`, `lede`, `items`) and `fieldSignals` (the
Weather / Cell / Permits / Fire strip reused on Home and Resources). Add
an entry to either to make it appear everywhere it's used.

### Pillars and stats

`assets/data/site.js` also exports `pillars` (four editorial principles
rendered on Home and About) and `stats` (the "By the numbers" strip).
Update the copy or reorder the array and both pages follow automatically.

## Design system

All design tokens are in `assets/css/tokens.css`:

- Surfaces: `--bg-base`, `--bg-surface`, `--bg-elevated`
- Text: `--text-primary`, `--text-secondary`, `--text-muted`
- Accents: `--accent-ember` (FJ orange), `--accent-moss`, `--accent-sky`, `--accent-sand`
- Gradient: `--grad-sunrise`
- Type: `--font-display` (Fraunces), `--font-ui` (Manrope), `--font-mono` (Fira Code)
- Spacing: `--sp-1` … `--sp-10` on an 8 px baseline
- Radii, shadows, motion durations and easings

## Deploy

- **Production URL**: [https://openatlas.wiki/](https://openatlas.wiki/) via `public/CNAME` and GitHub Pages **Custom domain** settings.
- **GitHub Actions**: `.github/workflows/deploy.yml` builds with `npm run build` and publishes `dist/`. Enable Pages once: **Settings → Pages → Build and deployment → GitHub Actions**, then under **Custom domain** enter `openatlas.wiki` and follow DNS instructions (when DNS is ready).
- **Canonical URLs**: `site` in `astro.config.mjs` plus `public/sitemap.xml`, `public/robots.txt`, and `og:image` tags should all stay aligned with the live hostname.
- **Other hosts**: run `npm run build` and upload the `dist/` directory (and copy `public/CNAME` if the host uses it).

No server-side runtime. No WordPress.
