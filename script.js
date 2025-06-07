
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    });
  });
});
