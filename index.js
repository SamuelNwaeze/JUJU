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
