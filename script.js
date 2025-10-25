// Dark mode toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Language switcher
const langBtn = document.getElementById('lang-btn');
langBtn.addEventListener('change', (e) => {
  const lang = e.target.value;
  if (lang === 'en') {
    window.location.href = 'index_en.html';
  } else {
    window.location.href = 'index.html';
  }
});
