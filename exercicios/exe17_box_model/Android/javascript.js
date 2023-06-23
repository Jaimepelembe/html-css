var header = document.getElementById("header");
var navigation_header = document.getElementById("navigation_header");
var content = document.getElementById("article_main");
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar; /*Chane the value of showSidevar*/
  if (showSidebar) {
    navigation_header.style.marginLeft = "-1vw"; /*Show the sidebar*/
    navigation_header.style.animationName = "showSidebar";
    content.style.filter = "blur(2px)"; /**Desfoca o conteudo principal*/
  } else {
      navigation_header.style.marginLeft = "-100vw"; /*hide the sidebar*/
    navigation_header.style.animationName = "";
    content.style.filter = "";
    update_gap();
  }
}

/*Fecha o sidebar clicando no conteudo principal */

function closeSidebar() {
  if (showSidebar) {
    toggleSidebar();
  }
}

function update_gap() {
  if (window.innerWidth > 750) {
    navigation_header.style.gap = "50px";
    navigation_header.style.fontSize = "20px";
  
  } else {
    navigation_header.style.gap = "20px";
    navigation_header.style.fontSize = "18px";
  }
}

window.addEventListener("resize", function (event) {
  update_gap();
  /*Fechar o sidebar ao redimensionar a janela*/
  if (window.innerWidth > 750 && showSidebar) {
    toggleSidebar();

  }
});
