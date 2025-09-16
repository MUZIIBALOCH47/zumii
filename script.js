const toggleBtn = document.querySelector(".mobile-toggle");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
