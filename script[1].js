
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  const toggleMenu = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  toggleMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
