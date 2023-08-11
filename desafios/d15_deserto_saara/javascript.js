var header = document.getElementById("header");
var navigation_header = document.getElementById("navigation_header");
var conteudo = document.getElementById("main");
var mostrarSidebar = false;

/*Muda o estado do side bar de activo margin-left=0vw para desativo margin-left=-100vw e vice versa*/
function mudar_estado_sidebar() {
  mostrarSidebar = !mostrarSidebar;
  if (mostrarSidebar) {
    navigation_header.style.position = "fixed";

    navigation_header.style.marginLeft = "0vw";
    navigation_header.style.animationName = "showSidebar";
    conteudo.style.filter = "blur(2px)"; /*Desfoca o conteudo principal*/
    /*Tornar o menu lateral estatico */
  } else {
    navigation_header.style.marginLeft = "-100vw";
    navigation_header.style.animationName = "";
    conteudo.style.filter = "";
  }
}

/*Fechar o sidebar ao clicar no conteudo principal */
function fecharSidebar() {
  if (mostrarSidebar) {
    mudar_estado_sidebar();
  }
}

function fechar_sidebar_redimensionartela() {
  if (window.innerWidth > 750) {
    navigation_header.style.position =
      "relative"; /*o nav volta acupar a sua posicao original na tela*/
    fecharSidebar();
  } else {
    navigation_header.style.position =
      "fixed"; /*O nav ocupa um espaco fixo na tela */
  }
}

window.addEventListener("resize", function (event) {
  fechar_sidebar_redimensionartela();
});
