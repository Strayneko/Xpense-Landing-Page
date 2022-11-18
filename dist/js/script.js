/*
       * ===============
       * Hamburger button
       * ===============
       */
const hamburgerBtn = document.getElementById("hamburger");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");
  document.querySelector(".navbar-menu").classList.toggle("hidden");
});
const hamburgerBtnFooter = document.getElementById("hamburger-footer");
hamburgerBtnFooter.addEventListener("click", () => {
  hamburgerBtnFooter.classList.toggle("hamburger-active");
  document.getElementById("footer-menu").classList.toggle("hidden");
});
