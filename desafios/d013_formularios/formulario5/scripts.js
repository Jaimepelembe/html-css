var entradaSenha = document.getElementById("entrada_senha");
var icone_olho_aberto = document.getElementById("icone_olho_aberto");
var icone_olho_fechado = document.getElementById("icone_olho_fechado");

function mostrarSenha() {
  if (entradaSenha.type === "password") {
    entradaSenha.setAttribute("type", "text");
    ocultarOlho();
  } else {
    entradaSenha.setAttribute("type", "password");
    ocultarOlho();
  }
}

function ocultarOlho() {
  if (entradaSenha.type === "text") {
    icone_olho_aberto.style.display = "none";
    icone_olho_fechado.style.display = "block";
  } else {
    icone_olho_fechado.style.display = "none";
    icone_olho_aberto.style.display = "block";
  }
}

function limparCampos() {
  if (entradaSenha.type === "text") {
    mostrarSenha();
  }
}
