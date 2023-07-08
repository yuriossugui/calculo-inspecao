function calcularInspecao() {
  var inputPorcentagem = document.getElementById("inputPorcentagem").value;
  var inputPecas = document.getElementById("inputPecas").value;
  var inputCodigos = document.getElementById("inputCodigos").value;


  var per = inputPorcentagem / 100;

  var pecas = parseInt(inputPecas);
  var codigos = parseInt(inputCodigos);

  var resultadoPorCodigo = (pecas * per) / codigos;
  var resultadoTotal = pecas * per;

 
  var resultadoElement = document.getElementById("resultadoPorCodigo");
  var resultadoElement2 = document.getElementById("resultadoTotal");
  resultadoElement.textContent = "Devem ser inspecionadas: "+ resultadoPorCodigo + " Peças por código";
  resultadoElement2.textContent = "Devem ser inspecionadas: "+ resultadoTotal + " Peças no total." ;
}
