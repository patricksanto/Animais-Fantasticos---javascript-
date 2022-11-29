function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");
  tabcontent[0].classList.add("ativo");

  if (tabmenu.length && tabcontent.length) {
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
  }
}
initTabNav();

function initAccordion() {
  const perguntas = document.querySelectorAll(".js-accordion dt");
  if (perguntas.length) {
    perguntas[0].nextElementSibling.classList.add("ativo");
    perguntas[0].classList.add("ativo");

    function abrirRespostas(event) {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    perguntas.forEach((item) => {
      item.addEventListener("click", abrirRespostas);
    });
  }
}
initAccordion();

function smoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollsuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // VERSAO ALTERNATIVA
    // const topo = section.offsetTop;
    // console.log(topo);
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollsuave);
  });
}
smoothScroll();
