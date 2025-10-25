// Toggle mode sombre / clair
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Gestion langue (simple placeholder)
const langSelect = document.getElementById("lang-select");
langSelect.addEventListener("change", (e) => {
  alert("Version multilingue à venir 🌍");
});
