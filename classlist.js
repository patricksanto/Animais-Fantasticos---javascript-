const menu1 = document.querySelector(".menu");
menu1.classList.add("ativo", "pronto");

menu1.classList.toggle("azul");

if (menu1.classList.contains("azul")) {
  menu1.classList.add("possuiAzul");
} else {
  menu1.classList.add("nao-possui-azul");
}

console.log(menu1.classList);

const img = document.querySelector("img");
console.log(img);
img.setAttribute("alt", "ë uma raposa");
console.log(img.getAttribute("alt"));

const menu = document.querySelectorAll(".menu li");

menu.forEach((item) => {
  item.classList.add("ativo");
});
menu.forEach((item) => {
  item.classList.remove("ativo");
});
menu[0].classList.add("ativo");

const imgs = document.querySelectorAll("img");
imgs[0].setAttribute("alt", "raposa");

imgs.forEach((img) => {
  const possuiatributo = img.hasAttribute("alt");
  console.log(img, possuiatributo);
});

const linkExt = document.querySelector(".menu [href^=https]");
linkExt.setAttribute("href", "https://google.com");
