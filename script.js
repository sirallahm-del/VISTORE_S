// THEME
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// LANGUAGE
const langBtn = document.getElementById("langBtn");
let currentLang = "fr";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  langBtn.textContent = currentLang.toUpperCase();

  document.querySelectorAll("[data-fr]").forEach(el => {
    el.textContent = el.getAttribute("data-" + currentLang);
  });
});
