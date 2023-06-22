var header = document.getElementById("header");
var navigation_header = document.getElementById("navigation_header");
var content = document.getElementById("article_main");
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar; /*change the value of showSidebar*/
  if (showSidebar) {
    navigation_header.style.marginLeft = "-10vw"; /*show the sidebar*/
    navigation_header.style.animationName = "showSidebar";
    content.style.filter = "blur(2px)"; /*Desfoca o conteudo principal */
  } else {
    navigation_header.style.marginLeft = "-100vw"; /*hide the sidebar*/
    navigation_header.style.animationName = "";
    content.style.filter = "";
  }
}
/*Close the side bar clicking in the article main */
function closeSidebar() {
  if (showSidebar) {
    toggleSidebar();
  }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    toggleSidebar();
  }
});
