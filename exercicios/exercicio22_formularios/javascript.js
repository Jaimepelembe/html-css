//Variaveis para calculo da idade
var ano_actual = new Date().getFullYear();
var idade = -1;
var data_nascimento = document.getElementById("idano_nascimento");
var outputIdade = document.getElementById("ididade");

//Variaveis para operacoes aritmeticas
var numero1 = document.getElementById("idnumero1");
var numero2 = document.getElementById("idnumero2");
var resultadoSoma = document.getElementById("idsoma");
var resultadoSubtracao = document.getElementById("idsubtracao");
var resultadoMultiplicacao = document.getElementById("idmultiplicacao");
var resultadoDivisao = document.getElementById("iddivisao");

//Calculo da idade
function calcularIdade() {
  if (data_nascimento.value == "") {
    return 0;
  } else {
    idade = Number(ano_actual) - Number(data_nascimento.value);
    return idade;
  }
}

function atribuirIdade() {
  console.log(calcularIdade());
  outputIdade.innerHTML = calcularIdade();
}

//Operacoes aritmeticas
function soma() {
  return Number(numero1.value) + Number(numero2.value);
}

function subtracao() {
  return Number(numero1.value) - Number(numero2.value);
}

function multiplicacao() {
  return Number(numero1.value) * Number(numero2.value);
}

function divisao() {
  return Number(numero1.value) / Number(numero2.value);
}

function operacoesAritmeticas() {
  if (numero1.value == "" || numero2.value == "") {
  } else {
    resultadoSoma.innerHTML = soma();
    resultadoSubtracao.innerHTML = subtracao();
    resultadoMultiplicacao.innerHTML = multiplicacao();
    resultadoDivisao.innerHTML = divisao();
  }
}
