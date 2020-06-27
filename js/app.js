//listener for rezise
window.addEventListener("resize", mediaQuerys);
const heroContainer = document.querySelector("#hero-container");
const principalNav = document.querySelector("#principal-nav");

function mediaQuerys() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    const barHeight = document.querySelector(".site-header").clientHeight;
    document.body.style.paddingTop = barHeight + "px";
    heroContainer.classList.add("container");
    principalNav.classList.remove("container");
    principalNav.style.top = "";
  } else {
    const barHeight = document.querySelector(".site-header").clientHeight;
    document.body.style.paddingTop = "";
    heroContainer.classList.remove("container");
    principalNav.classList.add("container");
    principalNav.style.top = barHeight + 10 + "px";
  }
}
mediaQuerys();

if (document.querySelector("#hamburguer-btn")) {
  document
    .querySelector("#hamburguer-btn")
    .addEventListener("click", changeIcon);
}

function changeIcon() {
  if (
    document
      .querySelector("#hamburguer-btn")
      .firstElementChild.classList.contains("fa-bars")
  ) {
    document
      .querySelector("#hamburguer-btn")
      .firstElementChild.setAttribute("class", "fas fa-times");
  } else {
    document
      .querySelector("#hamburguer-btn")
      .firstElementChild.setAttribute("class", "fas fa-bars");
  }
}
