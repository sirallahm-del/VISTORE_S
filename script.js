// Script partagé: fonctionne même si certains éléments n'existent pas selon la page.
const darkModeToggle = document.getElementById('dark-mode-toggle');
const langBtn = document.getElementById('lang-btn');

function setDarkMode(enabled) {
  document.body.classList.toggle('dark-mode', enabled);
  document.body.classList.toggle('dark', enabled); // compatibilité avec anciens styles/classes
}

const darkModeInitial = localStorage.getItem('darkMode') === 'enabled';
setDarkMode(darkModeInitial);

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    const nextEnabled = !document.body.classList.contains('dark-mode') && !document.body.classList.contains('dark');
    setDarkMode(nextEnabled);
    localStorage.setItem('darkMode', nextEnabled ? 'enabled' : 'disabled');
  });
}

if (langBtn) {
  const savedLang = localStorage.getItem('lang') || 'FR';
  langBtn.textContent = savedLang;

  langBtn.addEventListener('click', () => {
    const nextLang = langBtn.textContent.trim().toUpperCase() === 'FR' ? 'EN' : 'FR';
    langBtn.textContent = nextLang;
    localStorage.setItem('lang', nextLang);
  });
}
