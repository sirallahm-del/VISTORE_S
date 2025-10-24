// Translations (basic; expand as needed)
const translations = {
    fr: {
        subtitle: "LABORATOIRE DE RECHERCHE & DÉVELOPPEMENT",
        "hero-title": "Laboratoire d'Innovation en",
        "accent-text": "Data & IA",
        description: "Nous sommes spécialisés dans la modélisation prédictive et l'analyse de données complexes (géospatiales, financières, etc.). Notre mission est d'optimiser les stratégies d'entreprise par des solutions d'Intelligence Artificielle rigoureuses et sur mesure. Déterminée à redéfinir les standards par la rigueur du code et l'excellence de l'analyse.",
        "case-studies-btn": "Accéder aux Études de Cas",
        "collaborate-btn": "Démarrer une Collaboration",
        "case-studies-title": "Nos Solutions Prouvées",
        "case-studies-subtitle": "Démontrer la rigueur technique et l'impact de l'Intelligence Artificielle.",
        "nasa-title": "Hackathon NASA : Projet GaiaByte – Climat Insights",
        tag1: "Analyse Géospatiale (SIG)",
        tag2: "Google Earth Engine (GEE)",
        tag3: "Télédétection",
        "nasa-desc": "Participation à un défi d'innovation intense (Hackathon NASA, Octobre 2025). Ce projet visait à modéliser l'impact des variations climatiques en utilisant des données satellites (Landsat/SRTM).<br><br><strong>Rôle et Impact :</strong> J'ai géré le volet d'analyse géospatiale, utilisant <strong>Google Earth Engine (GEE) et Python</strong> pour traiter rapidement des volumes importants de données de télédétection. Le défi était de livrer une solution fonctionnelle en 48 heures, démontrant ma <strong>rigueur en SIG</strong> et ma capacité à la <strong>gestion de projet</strong> sous contrainte.",
        "github-btn": "Voir le code source (GitHub)",
        "cs50-title": "Certification CS50 (HarvardX) : Maîtrise des Fondamentaux de l'Informatique",
        tag4: "Python",
        tag5: "C & Algorithmique",
        tag6: "SQL & Bases de Données",
        "cs50-desc": "Certification démontrant la maîtrise des concepts fondamentaux de l'informatique. J'ai acquis les bases solides en algorithmique, en langages C et Python, et en bases de données SQL.<br><br><strong>Démonstration :</strong> La validation de CS50 prouve ma capacité à écrire du <strong>code propre et performant</strong> pour la résolution de problèmes, un socle essentiel pour l'Intelligence Artificielle et la Data Science.",
        "project-btn": "Accéder au Projet",
        "services-title": "🚀 Services & Offres Partenaires",
        "services-desc": "Nous développons actuellement une structure de conseil sur mesure.<br>Revenez bientôt pour découvrir comment la Data et l'IA peuvent transformer votre business.",
        "back-btn": "Retour à l'Accueil",
        "affiliate-text": "Recommandé: Livre sur l'IA pour Débutants (Gagnez des commissions sur les achats)",
        "donate-btn": "Soutenez Veritasia - À partir de 1$"
    },
    en: {
        subtitle: "RESEARCH & DEVELOPMENT LABORATORY",
        "hero-title": "Innovation Laboratory in",
        "accent-text": "Data & AI",
        description: "We specialize in predictive modeling and complex data analysis (geospatial, financial, etc.). Our mission is to optimize business strategies through rigorous and customized Artificial Intelligence solutions. Committed to redefining standards through code rigor and analytical excellence.",
        "case-studies-btn": "Access Case Studies",
        "collaborate-btn": "Start a Collaboration",
        "case-studies-title": "Our Proven Solutions",
        "case-studies-subtitle": "Demonstrating technical rigor and the impact of Artificial Intelligence.",
        "nasa-title": "NASA Hackathon: GaiaByte Project – Climate Insights",
        tag1: "Geospatial Analysis (GIS)",
        tag2: "Google Earth Engine (GEE)",
        tag3: "Remote Sensing",
        "nasa-desc": "Participation in an intense innovation challenge (NASA Hackathon, October 2025). This project aimed to model the impact of climate variations using satellite data (Landsat/SRTM).<br><br><strong>Role and Impact:</strong> I managed the geospatial analysis aspect, using <strong>Google Earth Engine (GEE) and Python</strong> to quickly process large volumes of remote sensing data. The challenge was to deliver a functional solution in 48 hours, demonstrating my <strong>GIS rigor</strong> and <strong>project management</strong> under constraint.",
        "github-btn": "View Source Code (GitHub)",
        "cs50-title": "CS50 Certification (HarvardX): Mastering Computer Science Fundamentals",
        tag4: "Python",
        tag5: "C & Algorithms",
        tag6: "SQL & Databases",
        "cs50-desc": "Certification demonstrating mastery of computer science fundamentals. I acquired solid foundations in algorithms, C and Python languages, and SQL databases.<br><br><strong>Demonstration:</strong> CS50 validation proves my ability to write <strong>clean and efficient code</strong> for problem-solving, an essential foundation for Artificial Intelligence and Data Science.",
        "project-btn": "Access the Project",
        "services-title": "🚀 Services & Partner Offers",
        "services-desc": "We are currently developing a customized consulting structure.<br>Come back soon to discover how Data and AI can transform your business.",
        "back-btn": "Back to Home",
        "affiliate-text": "Recommended: Book on AI for Beginners (Earn commissions on purchases)",
        "donate-btn": "Support Veritasia - From $1"
    }
};

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
            toggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
        // Load saved preference
        const saved = localStorage.getItem('darkMode') === 'true';
        if (saved) document.body.classList.add('dark-mode');
        toggle.textContent = saved ? '☀️ Light Mode' : '🌙 Dark Mode';
    }

    // Language Switcher
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.dataset.translate;
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key]; // Use innerHTML for <br> tags
                }
            });
            localStorage.setItem('lang', lang);
        });
        // Load saved or default
        const savedLang = localStorage.getItem('lang') || 'fr';
        langSelect.value = savedLang;
        // Apply on load
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            if (translations[savedLang] && translations[savedLang][key]) {
                el.innerHTML = translations[savedLang][key];
            }
        });
    }
});
