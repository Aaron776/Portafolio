(() => {
  "use strict";
  const key = "aaron-theme";
  const modes = ["light", "dark"];
  const labels = {
    es: { light: "Claro", dark: "Oscuro", next: "Cambiar a", theme: "Tema" },
    en: { light: "Light", dark: "Dark", next: "Switch to", theme: "Theme" }
  };
  const icons = { light: "fa-sun", dark: "fa-moon" };
  let current = "light", button;
  try { const saved = localStorage.getItem(key); if (modes.includes(saved)) current = saved; } catch { /* Storage is optional. */ }
  function updateButton() {
    if (!button) return;
    const text = labels[document.documentElement.lang] || labels.es;
    const next = modes[(modes.indexOf(current) + 1) % modes.length];
    button.innerHTML = `<i class="fa-solid ${icons[current]}" aria-hidden="true"></i><span>${text[current]}</span>`;
    button.setAttribute("aria-label", `${text.theme}: ${text[current]}. ${text.next} ${text[next]}`);
    button.title = `${text.next} ${text[next]}`;
  }
  function apply(mode) {
    current = modes.includes(mode) ? mode : "light";
    document.documentElement.dataset.theme = current;
    const light = document.getElementById("light-theme");
    if (light) light.media = current === "light" ? "all" : "not all";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = { light: "#f2f4f7", dark: "#181a1d" }[current];
    updateButton();
  }
  apply(current);
  function init() {
    const shell = document.querySelector(".nav-shell");
    if (!shell) return;
    button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.id = "theme-toggle";
    shell.insertBefore(button, shell.querySelector(".hamburger"));
    updateButton();
    button.addEventListener("click", () => {
      apply(modes[(modes.indexOf(current) + 1) % modes.length]);
      try { localStorage.setItem(key, current); } catch { /* Theme still works for this visit. */ }
    });
    new MutationObserver(updateButton).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  }
  addEventListener("storage", event => { if (event.key === key) apply(event.newValue); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
