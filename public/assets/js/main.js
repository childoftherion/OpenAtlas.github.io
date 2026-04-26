// Open Atlas – entrypoint. Loaded on every page via
// <script type="module" src="assets/js/main.js"></script> (path relative to page).
//
// This module only sets up page chrome (header/footer/motion) and dispatches to page-specific initializers when a page declares one via `<body data-page="home">` etc.

import { renderHeader, renderFooter } from "./site.js";
import { initReveal } from "./motion.js";

renderHeader();
renderFooter();
initReveal();

const pageId = document.body.dataset.page;

const pageInits = {
  home: () => import("./pages/home.js").then((m) => m.init()),
  explore: () => import("./pages/explore.js").then((m) => m.init()),
  "pacific-northwest": () =>
    import("./pages/pnw.js").then((m) => m.init()),
  fj13: () => import("./pages/fj13.js").then((m) => m.init()),
  gear: () => import("./pages/gear.js").then((m) => m.init()),
  library: () => import("./pages/library.js").then((m) => m.init()),
  fuel: () => import("./pages/fuel.js").then((m) => m.init()),
  contact: () => import("./pages/contact.js").then((m) => m.init()),
  journal: () => import("./pages/journal.js").then((m) => m.init()),
  about: () => import("./pages/about.js").then((m) => m.init()),
  resources: () => import("./pages/resources.js").then((m) => m.init()),
};

if (pageId && pageInits[pageId]) {
  pageInits[pageId]().catch((err) => {
    console.error(`Failed to init page "${pageId}":`, err);
  });
}
