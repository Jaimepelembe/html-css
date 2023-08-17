var header = document.getElementById("header");
var navigation_header = document.getElementById("navigation_header");
var content = document.getElementById("main");
var schedule_operating = document.getElementById("schedule_operating");
var showingSidebar = false;

function changeStatusSidebar() {
  showingSidebar = !showingSidebar;

  if (showingSidebar) {
    showSidebar();
  } else {
    closeSidebar();
  }
}

function showSidebar() {
  navigation_header.style.marginLeft = "0vw";
  navigation_header.style.animationName = "showSidebar";
  content.style.filter = "blur(2px)";
  schedule_operating.style.filter = "blur(2px)";
}

function closeSidebar() {
  navigation_header.style.marginLeft = "-100vw";
  navigation_header.style.animationName = "";
  content.style.filter = "";
  schedule_operating.style.filter = "";
}

/*Fechar o sidebar ao clicar no conteudo principal */
function endtheSidebar() {
  if (showingSidebar) {
    changeStatusSidebar();
  }
}

function fechar_sidebar_redimensionartela() {
  if (window.innerWidth > 768) {
    navigation_header.style.position =
      "absolute"; /*o nav volta acupar a sua posicao original na tela*/
    navigation_header.style.marginLeft = "0vw";
  } else {
    navigation_header.style.position =
      "fixed"; /*O nav ocupa um espaco fixo na tela */
    closeSidebar();
  }
}

window.addEventListener("resize", function (event) {
  fechar_sidebar_redimensionartela();
});
