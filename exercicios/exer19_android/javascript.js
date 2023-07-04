var header = document.getElementById("header");
var navigation_header = document.getElementById("navigation_header");
var content = document.getElementById("article_main");
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar; /*Change the value of showSidebar*/
  if (showSidebar) {
    navigation_header.style.marginLeft = "-1vw"; /*Show the sidebar*/
    navigation_header.style.animationName = "showSidebar";
    content.style.filter = "blur(2px)"; /**Desfoca o conteudo principal*/
  } else {
    navigation_header.style.marginLeft = "-100vw"; /*hide the sidebar*/
    navigation_header.style.animationName = "";
    content.style.filter = "";
  }
}

/*Fecha o sidebar clicando no conteudo principal */
function closeSidebar() {
  if (showSidebar) {
    toggleSidebar();
  }
}

window.addEventListener("resize", function (event) {
  /*Fechar o sidebar ao redimensionar a janela*/
  if (window.innerWidth > 750) {
    if (showSidebar) {
      toggleSidebar();
    } else {
      navigation_header.style.marginLeft = "-1vw";
    }
  } else {
    navigation_header.style.marginLeft = "-100vw";
  }

});
