// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'light') document.body.classList.add('light-mode');

// Langue Toggle
const langSelect = document.getElementById('lang-select');
const savedLang = localStorage.getItem('lang') || 'fr';
if(langSelect) langSelect.value = savedLang;

langSelect?.addEventListener('change', e => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    // Ici tu peux ajouter la traduction dynamique si tu veux
});
