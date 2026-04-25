import { initReveal } from "../motion.js";

export function init() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-contact-status]");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.message) {
      status.textContent = "Please fill in your name, email, and message.";
      status.dataset.state = "error";
      return;
    }
    status.textContent =
      "Thanks — this form is a placeholder. Wire it up to your mail service when ready.";
    status.dataset.state = "ok";
    form.reset();
  });
  initReveal();
}
