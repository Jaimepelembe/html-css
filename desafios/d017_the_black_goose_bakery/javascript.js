var header = document.getElementById("header");
var navigation_header = document.getElementById("navigation_header");
var conteudo = document.getElementById("main");
var horario_funcionamento = document.getElementById("horario_funcionamento");
var showSidebar = false;

function mudar_estado_sidebar() {
  showSidebar = !showSidebar;

  if (showSidebar) {
    navigation_header.style.marginLeft = "0vw";
    navigation_header.style.animationName = "showSidebar";
    conteudo.style.filter = "blur(2px)";
    horario_funcionamento.style.filter = "blur(2px)";
  } else {
    navigation_header.style.marginLeft = "-100vw";
    navigation_header.style.animationName = "";
    conteudo.style.filter = "";
    horario_funcionamento.style.filter = "";
  }
}

/*Fechar o sidebar ao clicar no conteudo principal */
function fecharSidebar() {
  if (showSidebar) {
    mudar_estado_sidebar();
  }
}
