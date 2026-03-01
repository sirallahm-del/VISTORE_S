// Dark mode
const darkBtn = document.getElementById("dark-toggle");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Language toggle simple
const langBtn = document.getElementById("lang-toggle");

let isEnglish = false;

langBtn.addEventListener("click", () => {
  isEnglish = !isEnglish;

  const title = document.getElementById("title");
  const description = document.getElementById("description");

  if (title && description) {
    if (isEnglish) {
      title.textContent = "Your Future Tech & AI Partner";
      description.textContent =
        "Data & Artificial Intelligence solutions designed with precision and strategic vision.";
    } else {
      title.textContent = "Votre future partenaire Tech & IA";
      description.textContent =
        "Des solutions Data & Intelligence Artificielle conçues avec rigueur, élégance et vision stratégique.";
    }
  }
});
