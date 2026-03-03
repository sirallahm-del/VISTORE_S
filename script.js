// DARK MODE
const darkBtn = document.getElementById("dark-mode-toggle");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// LANGUAGE SWITCH
const langSwitcher = document.getElementById("language-switcher");

if (langSwitcher) {
    langSwitcher.addEventListener("change", (e) => {
        const lang = e.target.value;

        document.querySelectorAll("[data-fr]").forEach(el => {
            const translation = el.getAttribute("data-" + lang);
            if (translation) el.textContent = translation;
        });
    });
}

// HAMBURGER
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });
}


