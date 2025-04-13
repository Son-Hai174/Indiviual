document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".click-effect");

  elements.forEach(el => {
    el.addEventListener("click", () => {
      el.classList.add("clicked");
      setTimeout(() => el.classList.remove("clicked"), 400);
    });
  });
});




