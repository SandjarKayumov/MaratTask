const tryNowBtn = document.querySelector('.btn');

tryNowBtn.addEventListener("click", function () {
  const modalWindow = document.querySelector(".modal");
  modalWindow.classList.toggle("none");
  console.log("Click");
});

const leftSection = document.querySelector(".left__section");
leftSection.addEventListener("click", function () {
  if (leftSection) {
    leftSection.style.width = "400px";
  } else {
    // leftSection.classList.remove(leftSection);
  }
  console.log(leftSection);

})
window.addEventListener("keyup", function (e) {
  if (e.Escape == 27) {
    leftSection.classList.add('none')
  }
});

window.addEventListener("scroll", function () {
  document.querySelector(".fa-arrow-down").innerHTML = pageYOffset + "px";
  const pageHeight = pageYOffset;
  console.log("Scrool");
})