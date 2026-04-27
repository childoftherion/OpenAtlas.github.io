# Open Atlas — site

Rebuild of [openatlas.wiki](https://openatlas.wiki/).
Built as an Astro site with route files in `src/pages/` and static assets/content data in `public/`.
There is no React/Vue/Svelte UI framework — pages are authored as HTML-first Astro route files plus browser ES modules.

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
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── CNAME                        GitHub Pages custom domain (openatlas.wiki)
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
└── src/
    ├── env.d.ts
    ├── layouts/                     Shared Astro layout components
    │   └── BaseLayout.astro         Main layout with Google Analytics, head, header/footer
    └── pages/                       Astro-native route files
        ├── index.astro              /
        ├── 404.astro                /404.html
        └── pages/*.astro            /pages/... routes
```

## How the site is wired

- Every page uses `BaseLayout.astro` which provides the HTML boilerplate, loads the same four stylesheets, includes Google Analytics, and boots `public/assets/js/main.js` via a path relative to that HTML file.

- `BaseLayout` renders the shared **header** and **footer** into `<div data-site-header></div>` and `<div data-site-footer></div>` slots, so you only define the chrome in one place (`public/assets/data/site.js` + `public/assets/js/site.js`). If the site is ever served under a URL prefix, that prefix is derived automatically using `import.meta.url`.

- If a page sets `pageId="home"`, `main.js` dynamically imports `public/assets/js/pages/home.js` and calls its `init()` function.

- Reveal-on-scroll is automatic for any element with the `reveal` class. `prefers-reduced-motion` is respected.

## Editing content

### Nav, brand, footer, tagline

Edit `public/assets/data/site.js`.

### Add a journal entry

1. Create your new route as `src/pages/pages/journal/new-trip.astro`.
2. Use the `BaseLayout` component and fill in your content:

   ```astro
   ---
   import BaseLayout from '../../../layouts/BaseLayout.astro';
   ---

   <BaseLayout
     title="Your Entry Title — Open Atlas"
     description="Brief description for SEO and social sharing."
     ogImage="https://openatlas.wiki/assets/images/posts/new-trip-hero.jpg"
     pageId="journal"
     dataSlug="new-trip"
     assetPrefix="../../../"
   >
     <header class="article-header">
       <div class="container container--narrow">
         <nav aria-label="Breadcrumb">
           <ol class="breadcrumbs">
             <li><a href="../../../">Home</a></li>
             <li><a href="../../explore/">Explore</a></li>
             <li>Your Entry Title</li>
           </ol>
         </nav>
         <div class="article-meta">
           <span class="article-meta__category">Destination</span>
           <span>By freedomland</span>
           <span>·</span>
           <time datetime="2026-05-01">May 1, 2026</time>
         </div>
         <h1>Your full article headline.</h1>
       </div>
     </header>

     <article class="article-body">
       <div class="container container--narrow">
         <!-- Your article content here -->
       </div>
     </article>
   </BaseLayout>
   ```

   **BaseLayout props:**
   - `title` — Page title (appears in browser tab and social shares)
   - `description` — Meta description for SEO
   - `ogImage` — Full URL to hero image for social sharing
   - `pageId` — Sets `data-page` attribute (use `"journal"` for journal entries)
   - `dataSlug` — Sets `data-slug` attribute (drives the "more posts" list)
   - `assetPrefix` — Path prefix for assets (`../../../` for journal depth)

3. Open `public/assets/data/posts.js` and prepend a new entry:

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

6. Drop the cover image into `public/assets/images/posts/`.

That's it — the entry now shows up on the home page, on `/pages/explore/`,
and in the "more posts" row of every existing journal entry.

### Add a regular page (not a journal entry)

1. Create your route as `src/pages/pages/my-page.astro`.
2. Use the `BaseLayout` component with the appropriate `assetPrefix`:

   ```astro
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   ---

   <BaseLayout
     title="My Page Title — Open Atlas"
     description="Brief description for SEO and social sharing."
     ogImage="https://openatlas.wiki/assets/images/hero/my-page-hero.jpg"
     pageId="my-page"
     assetPrefix="../../"
   >
     <section class="hero hero--short">
       <div class="hero__media">
         <img src="../../assets/images/hero/my-page-hero.jpg" alt="Description" />
       </div>
       <div class="container hero__content">
         <nav aria-label="Breadcrumb">
           <ol class="breadcrumbs">
             <li><a href="../../">Home</a></li>
             <li>My Page Title</li>
           </ol>
         </nav>
         <span class="hero__eyebrow">Optional eyebrow</span>
         <h1 class="hero__title">Page headline.</h1>
         <p class="hero__sub">Subtitle or short description.</p>
       </div>
     </section>

     <!-- Your page sections here -->
   </BaseLayout>
   ```

   **Asset prefix guide:**
   - Root pages (`src/pages/index.astro`, `src/pages/404.astro`): `assetPrefix="./"`
   - Pages in `src/pages/pages/`: `assetPrefix="../../"`
   - Journal entries in `src/pages/pages/journal/`: `assetPrefix="../../../"`

### Add a PNW destination

Open `public/assets/data/destinations.js` and push an entry under the right state.
Supported fields: `name`, `region`, `difficulty`, `managedBy`, `note`,
`planned` (boolean for "future trip" badge), and `post: "<slug>"` to
auto-link the destination name to a journal entry.

### Add a gear item

Open `public/assets/data/gear.js` and push into the right category's `items` array.
Each item supports `brand`, `name`, `image`, `imageAlt`, `blurb`, a
`details` array (rendered as bullet points), optional `review: "<slug>"`
(adds a "Read the review" button), and one or more `links`.

If a real photo isn't available, add a custom SVG to
`public/assets/images/gear/<slug>.svg` following the pattern already in that
folder (dark background gradient + ember accent geometry). The gear media
tile automatically switches SVGs to `object-fit: contain` with padding, so
illustrations read cleanly without cropping.

### Add new reference materials (Library)

Open `public/assets/data/library.js` and push into the right category's `items` array.
Each item supports:

| Field | Description |
|-------|-------------|
| `author` | Author name (displayed as category tag) |
| `name` | Book/title name (displayed as title) |
| `publisher` | Publisher name (displayed below title) |
| `image` | Path to cover image in `/assets/images/library/` |
| `imageAlt` | Alt text for the image |
| `blurb` | Short description of the item |
| `details` | Array of bullet points with additional info |
| `links` | Array of `{ label, href }` for buy/affiliate links |
| `review` | Optional slug to link to a journal review |

**Example item:**
```javascript
{
  author: "Author Name",
  name: "Book Title",
  publisher: "Publisher Name",
  image: "/assets/images/library/my-book.jpg",
  imageAlt: "Book cover description",
  blurb: "Short description of why this is recommended",
  details: [
    "Key detail 1",
    "Key detail 2",
    "Key detail 3"
  ],
  links: [{ label: "Buy on Amazon", href: "https://..." }]
}
```

**To add a new category:** Add a new object to `libraryCategories`:
```javascript
{
  id: "category-id",
  title: "Category Title",
  tag: "Short tagline",
  items: [
    // ... book items
  ]
}
```

**Images:** Drop cover images into `public/assets/images/library/` and reference by relative path.

### Update FJ13

Everything — specs, gallery, and upgrades — is in `public/assets/data/fj13.js`.

### Trip-planning resources

`public/assets/data/resources.js` exports two arrays: `planningKit` (grouped
planning cards with `title`, `lede`, `items`) and `fieldSignals` (the
Weather / Cell / Permits / Fire strip reused on Home and Resources). Add
an entry to either to make it appear everywhere it's used.

### Pillars and stats

`public/assets/data/site.js` also exports `pillars` (four editorial principles
rendered on Home and About) and `stats` (the "By the numbers" strip).
Update the copy or reorder the array and both pages follow automatically.

## Design system

All design tokens are in `public/assets/css/tokens.css`:

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
