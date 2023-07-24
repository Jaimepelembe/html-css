var header = document.getElementById("header");
var navigation_header = document.getElementById("navigation_header");
var conteudo = document.getElementById("main");

function clickMenu() {
  if (navigation_header.style.display == "block") {
    if (window.innerWidth <= 768) {
      navigation_header.style.display = "none";
    }

    navigation_header.style.animationName = "";
    conteudo.style.filter = "";
  } else {
    navigation_header.style.display = "block";
    navigation_header.style.animationName = "showSidebar";
    conteudo.style.filter = "blur(2px)";
  }
}

function fecharMenu() {
  if (navigation_header.style.display == "block") {
    clickMenu();
  }
}

function fechar_sidebar_redimensionartela() {
  if (window.innerWidth > 768) {
    navigation_header.style.display = "block";
  } 
  
  else {
    fecharMenu();
  }
}

window.addEventListener("resize", function (event) {
  fechar_sidebar_redimensionartela();
});
