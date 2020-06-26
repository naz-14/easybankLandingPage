//listener for rezise
window.addEventListener("resize", mediaQuerys);
const heroContainer = document.querySelector("#hero-container");

function mediaQuerys() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    const barHeight = document.querySelector(".site-header").clientHeight;
    document.body.style.paddingTop = barHeight + "px";
    heroContainer.classList.add("container");
  } else {
    document.body.style.paddingTop = "";
    heroContainer.classList.remove("container");
  }
}
mediaQuerys();
