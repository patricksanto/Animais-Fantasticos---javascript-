const img = document.querySelector("img");

function clicou(event) {
  console.log(event);
}

img.addEventListener("click", clicou);

const linkExt = document.querySelector("a[href^=http]");

function eventoPrev(event) {
  event.preventDefault();
  console.log(event);
}
linkExt.addEventListener("click", eventoPrev);

const h1doc = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}
h1doc.addEventListener("click", handleEvent);
h1doc.addEventListener("mousemove", handleEvent);
window.addEventListener("keydown", handleEvent);

function handleKeyboard(event) {
  if (event.key === k) {
    console.log("apertou o k");
  }
}

window.addEventListener("keydown", handleKeyboard);
const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.target);
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
// });
const linkInterno = document.querySelectorAll('a[href^="#"]');

function toggleMenu(event) {
  event.preventDefault();
  linkInterno.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.toggle("ativo");
}

linkInterno.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const tudo = document.querySelectorAll("body *");

function handleTudo(event) {
  event.currentTarget.remove();
}
tudo.forEach((cadacoisa) => {
  cadacoisa.addEventListener("click", handleTudo);
});
function handleClickT(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("texto-maior");
  }
}
window.addEventListener("keydown", handleClickT);
