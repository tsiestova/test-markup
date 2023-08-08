import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector(".burger-menu");
  const header = document.querySelector(".header");

  btnMenu.addEventListener("click", () => {
    header.toggleAttribute("data-active");
  });
});
