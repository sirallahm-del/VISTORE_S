// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    let theme = 'light';
    if (document.body.classList.contains('dark')) theme = 'dark';
    localStorage.setItem('theme', theme);
});

// Language Toggle
const langSelect = document.getElementById('lang-select');
const translations = {
    "fr": {
        "nav-home":"Accueil",
        "nav-profile":"Profil",
        "nav-case":"Études de Cas",
        "nav-services":"Services",
        "nav-contact":"Contact",
        "services-title":"Nos Services Exclusifs",
        "services-subtitle":"Solutions techniques et digitales haut de gamme, conçues pour impacter et performer.",
        "service1-title":"Développement Web Sur-Mesure",
        "service1-desc":"Création de sites web et applications personnalisées avec une attention premium aux détails et à la performance.",
        "service1-btn":"Demander un devis",
        "service2-title":"Intelligence Artificielle & Automatisation",
        "service2-desc":"Solutions IA pour automatiser vos processus et transformer vos données en décisions intelligentes.",
        "service2-btn":"Découvrir",
        "service3-title":"Branding & Stratégie Digitale",
        "service3-desc":"Positionnez votre marque comme un produit de luxe digital avec une stratégie percutante et exclusive.",
        "service3-btn":"Contactez-nous",
        "vault-title":"Veritasia Vault – Édition Limitée",
        "vault-desc":"Rejoignez notre cercle exclusif et accédez à des expériences numériques uniques et limitées. Seuls quelques privilégiés pourront en profiter.",
        "vault-btn":"Réservez votre accès"
    },
    "en": {
        "nav-home":"Home",
        "nav-profile":"Profile",
        "nav-case":"Case Studies",
        "nav-services":"Services",
        "nav-contact":"Contact",
        "services-title":"Our Exclusive Services",
        "services-subtitle":"High-end technical and digital solutions designed to impact and perform.",
        "service1-title":"Custom Web Development",
        "service1-desc":"Creating tailored websites and applications with premium attention to detail and performance.",
        "service1-btn":"Request a Quote",
        "service2-title":"AI & Automation",
        "service2-desc":"AI solutions to automate processes and transform your data into smart decisions.",
        "service2-btn":"Discover",
        "service3-title":"Branding & Digital Strategy",
        "service3-desc":"Position your brand as a premium digital product with a powerful and exclusive strategy.",
        "service3-btn":"Contact Us",
        "vault-title":"Veritasia Vault – Limited Edition",
        "vault-desc":"Join our exclusive circle and access unique, limited digital experiences. Only a few privileged can benefit.",
        "vault-btn":"Reserve Your Access"
    }
};

const savedLang = localStorage.getItem('lang') || 'fr';
langSelect.value = savedLang;
translatePage(savedLang);

langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    localStorage.setItem('lang', lang);
    translatePage(lang);
});

function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });
}
