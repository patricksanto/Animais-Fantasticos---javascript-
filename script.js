const todasImagens = document.querySelectorAll("img");
console.log(todasImagens);

const imagensIMG = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensIMG);

// const linksInternos = document.querySelectorAll("href^="#");
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

const paragrafos = document.querySelectorAll("p");
const ultimoP = paragrafos[paragrafos.length - 1];
