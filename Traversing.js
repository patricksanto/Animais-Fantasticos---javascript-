const menu = document.querySelector("nav");
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector(".copy");
const animais = document.querySelector(".animais");

copy.appendChild(cloneMenu);

const faq = document.querySelector(".faq");
const dt = faq.querySelector("dt");
const dd = dt.nextElementSibling;

faq.innerHTML = animais.innerHTML;
