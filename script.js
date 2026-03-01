// ===== DARK MODE =====
const darkBtn = document.getElementById("dark-toggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// ===== LANGUAGE SWITCH =====
const langBtn = document.getElementById("lang-toggle");
let currentLang = "fr";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";

  document.querySelectorAll("[data-fr]").forEach(el => {
    el.textContent = el.getAttribute("data-" + currentLang);
  });
});
