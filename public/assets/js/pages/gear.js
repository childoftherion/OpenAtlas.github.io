import { gearCategories } from "../../data/gear.js";
import { posts } from "../../data/posts.js";
import { renderGearItem, postLookup } from "../components.js";
import { esc, html } from "../site.js";
import { initReveal } from "../motion.js";

export function init() {
  const slot = document.querySelector("[data-gear]");
  const toc = document.querySelector("[data-gear-toc]");
  if (!slot) return;

  const lookup = postLookup(posts);

  slot.innerHTML = gearCategories
    .map((cat) => {
      const body =
        cat.items.length === 0
          ? html`<p class="text-muted"><em>Stay tuned. More awesome gear coming soon.</em></p>`
          : html`<div class="stack stack--lg">${cat.items
              .map((i) => renderGearItem(i, lookup))
              .join("")}</div>`;
      return html`
        <section class="gear-section reveal" id="${esc(cat.id)}">
          <div class="gear-section__head">
            <h2 class="gear-section__title">${esc(cat.title)}</h2>
            <span class="gear-section__tag">${esc(cat.tag ?? "")}</span>
          </div>
          ${body}
        </section>
      `;
    })
    .join("");

  if (toc) {
    toc.innerHTML = gearCategories
      .map(
        (c) =>
          html`<a class="btn btn--ghost btn--sm" href="#${esc(c.id)}">${esc(c.title)}</a>`
      )
      .join("");
  }
  initReveal();
}
