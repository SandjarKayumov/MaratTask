// window.addEventListener("scroll", function () {
//   document.querySelector(".fa-arrow-up").innerHTML = pageYOffset + "px";
//   console.log("Scrool");
// });

const bntBurger = document.querySelector(".menu__burger");
const menuClose = document.querySelector(".menu__close");
const faBars = document.querySelector(".fa-bars");
const faTimes = document.querySelector(".fa-times");
const navMedia = document.querySelector(".nav__media");

const openMenu = function () {
  navMedia.classList.add("block");
  faBars.style.display = "block";
  menuClose.style.display = "block";
  console.log("Open");
}
const closeMenu = function () {
  // navMedia.classList.remove("block");
  // faTimes.style.display = "none";
  // faBars.style.display = "block";
  // console.log("Close");
}

bntBurger.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);



// document.addEventListener("keydown", (event) => {
//   if (event.code === "Escape") {
//     closeMenu();
//     console.log(event);
//   }
// });

// menuBurger.addEventListener("click", function(){
//   if(menuBurger){
//     navMedia.classList.add("block");
//     menuOpen.style.display = "none";
//     menuClose.style.display="block"
//     console.log("Open");
//   } else {
//     menuOpen.style.display = "block";
//     menuClose.style.display="none"
//   }
// });

