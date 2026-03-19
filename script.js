// ================= INIT =================
const darkBtn = document.getElementById("dark-mode-toggle");
const langSwitcher = document.getElementById("language-switcher");
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

let currentLang = localStorage.getItem("vistore-lang") || "fr";
let currentMode = localStorage.getItem("vistore-mode") || "dark";

// ================= MODE =================
function updateModeBtn() {
    if (!darkBtn) return;
    if (currentMode === "dark") {
        darkBtn.textContent = currentLang === "en" ? "Light Mode" : "Mode Clair";
    } else {
        darkBtn.textContent = currentLang === "en" ? "Dark Mode" : "Mode Sombre";
    }
}

function applyMode(mode) {
    if (mode === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
    updateModeBtn();
}

// ================= LANGUAGE =================
function applyLanguage(lang) {
    document.querySelectorAll("[data-fr]").forEach(el => {
        const translation = el.getAttribute("data-" + lang);
        if (translation) el.textContent = translation;
    });
    if (langSwitcher) langSwitcher.value = lang;
    updateModeBtn();
}

// ================= EVENTS =================
if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        currentMode = currentMode === "dark" ? "light" : "dark";
        localStorage.setItem("vistore-mode", currentMode);
        applyMode(currentMode);
    });
}

if (langSwitcher) {
    langSwitcher.addEventListener("change", (e) => {
        currentLang = e.target.value;
        localStorage.setItem("vistore-lang", currentLang);
        applyLanguage(currentLang);
    });
}

if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });
}

// ================= ON LOAD =================
applyMode(currentMode);
applyLanguage(currentLang);
