var entradaSenha = document.getElementById("idpassword");
var icone_olho_aberto = document.getElementById("icone_olho_aberto");
var icone_olho_fechado = document.getElementById("icone_olho_fechado");

function alterarvisibilidadeSenha() {
  if (entradaSenha.type === "password") {
    entradaSenha.setAttribute("type", "text");
    ocultarOlho();
  } else {
    entradaSenha.setAttribute("type", "password");
    ocultarOlho();
  }
}

function ocultarOlho() {
  if (entradaSenha.type === "password") {
    icone_olho_aberto.style.display = "block";
    icone_olho_fechado.style.display = "none";
  } else {
    icone_olho_aberto.style.display = "none";
    icone_olho_fechado.style.display = "block";
  }
}
