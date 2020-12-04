// const tryNowBtn = document.querySelector('.btn');
// window.addEventListener("scroll", function () {
//   document.querySelector(".fa-arrow-up").innerHTML = pageYOffset + "px";
//   console.log("Scrool");
// });

const btnMenu = document.querySelector(".menu__burger");
const menuOpen = document.querySelector(".menu__open");
const closeMenu = document.querySelector(".menu__close");
const nav = document.querySelector(".nav");

btnMenu.addEventListener("click", function () {
  nav.style.display ="block";
  console.log("Menu");
});
