// Typing Effect

const typingElement = document.querySelector(".typing");

const text = "Hi, I'm Kaviyarasu G";

let index = 0;

function typeEffect() {

  if (index < text.length) {

    typingElement.textContent += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);

  }

}

typeEffect();

// Dark Mode Toggle

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  toggleBtn.textContent =

    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";

});