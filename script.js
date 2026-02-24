const toggle = document.getElementById("dark-mode-toggle");
const langBtn = document.getElementById("lang-btn");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
  document.body.classList.add("dark-mode");
}

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("dark-mode");
    const enabled = document.body.classList.contains("dark") || document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
  });
}

if (langBtn) {
  const saved = localStorage.getItem("lang") || "FR";
  langBtn.textContent = saved;
  langBtn.addEventListener("click", () => {
    const next = langBtn.textContent.trim() === "FR" ? "EN" : "FR";
    langBtn.textContent = next;
    localStorage.setItem("lang", next);
  });
}
