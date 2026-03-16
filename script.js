// ================= DARK / LIGHT MODE =================
const darkBtn = document.getElementById("dark-mode-toggle");
const body = document.body;

function applyMode(mode) {
    if (mode === "light") {
        body.classList.add("light-mode");
        if (darkBtn) darkBtn.textContent = currentLang === "en" ? "Dark Mode" : "Mode Sombre";
    } else {
        body.classList.remove("light-mode");
        if (darkBtn) darkBtn.textContent = currentLang === "en" ? "Light Mode" : "Mode Clair";
    }
}

let currentMode = localStorage.getItem("vistore-mode") || "dark";
applyMode(currentMode);

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        currentMode = currentMode === "dark" ? "light" : "dark";
        localStorage.setItem("vistore-mode", currentMode);
        applyMode(currentMode);
    });
}

// ================= LANGUAGE =================
const langSwitcher = document.getElementById("language-switcher");
let currentLang = localStorage.getItem("vistore-lang") || "fr";

function applyLanguage(lang) {
    document.querySelectorAll("[data-fr]").forEach(el => {
        const translation = el.getAttribute("data-" + lang);
        if (translation) el.textContent = translation;
    });
    if (langSwitcher) langSwitcher.value = lang;
    // Update mode button text after lang change
    if (darkBtn) {
        if (currentMode === "dark") {
            darkBtn.textContent = lang === "en" ? "Light Mode" : "Mode Clair";
        } else {
            darkBtn.textContent = lang === "en" ? "Dark Mode" : "Mode Sombre";
        }
    }
}

if (langSwitcher) {
    langSwitcher.value = currentLang;
    langSwitcher.addEventListener("change", (e) => {
        currentLang = e.target.value;
        localStorage.setItem("vistore-lang", currentLang);
        applyLanguage(currentLang);
    });
}

applyLanguage(currentLang);

// ================= HAMBURGER =================
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });
}

