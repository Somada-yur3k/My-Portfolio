const typingElement = document.getElementById("typing");
const words = ["Web Developer   ",];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 200;

function type() {
  const currentWord = words[wordIndex];
  const currentText = typingElement.textContent;

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typingSpeed = 1000; // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 200;
  } else {
    typingSpeed = isDeleting ? 60 : 100;
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typingElement.textContent = "";
  type();
});

function filterSkills(category) {
  const allSkills = document.querySelectorAll(".skill-item");
  allSkills.forEach((skill) => {
    if (category === "all" || skill.dataset.category === category) {
      skill.classList.remove("hidden");
    } else {
      skill.classList.add("hidden");
    }
  });
}
