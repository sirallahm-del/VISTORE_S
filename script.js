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
// HAMBURGER TOGGLE
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});
<header class="navbar">
    <div class="brand">VISTORÉ</div>

    <!-- Hamburger -->
    <div class="hamburger" id="hamburger">
        ☰
    </div>

    <nav class="main-nav" id="mainNav">
        <ul>
            <li><a href="index.html" data-fr="Accueil" data-en="Home">Accueil</a></li>
            <li><a href="profil.html" data-fr="Profil" data-en="Profile">Profil</a></li>
            <li><a href="case-studies.html" data-fr="Études de Cas" data-en="Case Studies">Études de Cas</a></li>
            <li><a href="services.html" data-fr="Services" data-en="Services">Services</a></li>
            <li><a href="contact.html" data-fr="Contact" data-en="Contact">Contact</a></li>
        </ul>
    </nav>

    <div class="header-utils">
        <select id="language-switcher" class="util-select">
            <option value="fr">FR</option>
            <option value="en">EN</option>
        </select>

        <button id="dark-mode-toggle" class="util-button"
            data-fr="Mode Sombre"
            data-en="Dark Mode">
            Mode Sombre
        </button>
    </div>
</header>


