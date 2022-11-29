const tabmenu = document.querySelectorAll(".js-tabmenu li");
const tabcontent = document.querySelectorAll(".js-tabcontent section");

function activeContent(index) {
  tabcontent.forEach((content) => {
    content.classList.remove("ativo");
  });
  tabcontent[index].classList.add("ativo");
}

tabmenu.forEach((item, index) => {
  item.addEventListener("click", function () {
    activeContent(index);
  });
});
