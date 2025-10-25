// ----- DARK MODE -----
const toggleDarkMode = document.getElementById('dark-mode-toggle');
toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ----- LANGUE -----
const langBtn = document.getElementById('lang-btn');
let lang = 'FR';
langBtn.addEventListener('click', () => {
  if (lang === 'FR') {
    lang = 'EN';
    langBtn.textContent = 'EN';
  } else {
    lang = 'FR';
    langBtn.textContent = 'FR';
  }
});
