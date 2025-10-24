/* ========== MODE SOMBRE (auto + manuel) ========== */
const toggleBtn = document.getElementById("dark-mode-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
} else if (currentTheme === "light") {
  document.body.classList.remove("dark-mode");
} else if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

/* ========== TRADUCTION FR / EN ========== */
const langSelect = document.getElementById("lang-select");
const translations = {
  en: {
    "nav-home": "Home",
    "nav-profile": "Profile",
    "nav-cases": "Case Studies",
    "nav-services": "Services",
    "nav-contact": "Contact",

    "case-studies-title": "Proven Solutions",
    "case-studies-subtitle": "Showcasing the technical rigor and impact of Artificial Intelligence.",

    "nasa-title": "NASA Hackathon: Project GaiaByte – Climate Insights",
    "nasa-desc": "Participation in an intense innovation challenge (NASA Hackathon, October 2025). The project modeled climate variation impacts using satellite data (Landsat/SRTM). I led the geospatial analysis part, using Google Earth Engine (GEE) and Python to process large datasets efficiently.",

    "cs50-title": "CS50 Certification (HarvardX): Computer Science Fundamentals",
    "cs50-desc": "Certification demonstrating mastery of foundational concepts in algorithms, C, Python, and SQL. It proves my ability to write clean, structured, and efficient code — essential for AI and Data Science.",

    "tag1": "Geospatial Analysis (GIS)",
    "tag2": "Google Earth Engine (GEE)",
    "tag3": "Remote Sensing",
    "tag4": "Python",
    "tag5": "C & Algorithms",
    "tag6": "SQL & Databases",

    "github-btn": "View Source Code (GitHub)",
    "project-btn": "View Project",
  },

  fr: {
    "nav-home": "Accueil",
    "nav-profile": "Profil",
    "nav-cases": "Études de Cas",
    "nav-services": "Services",
    "nav-contact": "Contact",

    "case-studies-title": "Nos Solutions Prouvées",
    "case-studies-subtitle": "Démontrer la rigueur technique et l'impact de l'IA.",

    "nasa-title": "Hackathon NASA : Projet GaiaByte – Climat Insights",
    "nasa-desc": "Participation à un défi d'innovation intense (Hackathon NASA, Octobre 2025). Ce projet visait à modéliser l'impact des variations climatiques à partir de données satellites (Landsat/SRTM). J'ai géré l'analyse géospatiale en utilisant Google Earth Engine (GEE) et Python.",

    "cs50-title": "Certification CS50 (HarvardX) : Fondamentaux de l'Informatique",
    "cs50-desc": "Certification démontrant la maîtrise des concepts fondamentaux en algorithmique, C, Python et SQL. Elle prouve ma capacité à écrire un code propre et efficace, base essentielle pour l'IA et la Data Science.",

    "tag1": "Analyse Géospatiale (SIG)",
    "tag2": "Google Earth Engine (GEE)",
    "tag3": "Télédétection",
    "tag4": "Python",
    "tag5": "C & Algorithmique",
    "tag6": "SQL & Bases de Données",

    "g
