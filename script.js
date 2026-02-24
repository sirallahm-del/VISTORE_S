// 🌙 Mode sombre
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 🌍 Langue
document.getElementById("lang-btn").addEventListener("click", () => {
  alert("Version anglaise à venir !");
});
