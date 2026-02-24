// ----- DARK MODE -----
const toggleDarkMode = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark');
}

if (toggleDarkMode) {
  toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const darkModeEnabled = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
  });
}

// ----- LANGUE -----
const langBtn = document.getElementById('lang-btn');

if (langBtn) {
  let lang = localStorage.getItem('lang') || 'FR';
  langBtn.textContent = lang;

  langBtn.addEventListener('click', () => {
    lang = lang === 'FR' ? 'EN' : 'FR';
    langBtn.textContent = lang;
    localStorage.setItem('lang', lang);
  });
}
