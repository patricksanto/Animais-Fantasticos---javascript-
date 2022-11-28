const primeiraImg = document.querySelector("img");
console.log(primeiraImg.offsetTop);

function somaImagens() {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((img) => {
    soma = soma + img.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};

const menuLinks = document.querySelectorAll(".menu a");

console.log(menuLinks[0].clientHeight);

menuLinks.forEach((link) => {
  if (link.clientHeight < 48 || link.clientWidth < 48) {
    console.log("link inacessivel para google");
  }
});

const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
