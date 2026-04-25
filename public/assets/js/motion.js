// Reveal-on-scroll using IntersectionObserver. Respects prefers-reduced-motion.

export function initReveal(root = document) {
  const targets = root.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    targets.forEach((t) => t.classList.add("is-in"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  targets.forEach((t) => io.observe(t));
}
