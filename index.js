const toTop = document.querySelector(".scrollButton");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 120) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const toggleButton = document.getElementsByClassName("toggler-button")[0];
const navLeft = document.getElementsByClassName("navLeft")[0];

toggleButton.addEventListener("click", () => {
  navLeft.classList.toggle("active");
});
