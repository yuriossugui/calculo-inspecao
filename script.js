function calcularInspecao() {
  var inputPorcentagem = document.querySelector('input[name="porcentagem"]:checked').value;
  var inputPecas = document.getElementById("inputPecas").value;
  var inputCodigos = document.getElementById("inputCodigos").value;

  var per = parseFloat(inputPorcentagem); 

  var pecas = parseInt(inputPecas);
  var codigos = parseInt(inputCodigos);

  var resultadoPorCodigo = (pecas * per) / codigos;
  var resultadoTotal = pecas * per;

  var resultadoElement = document.getElementById("resultadoPorCodigo");
  var resultadoElement2 = document.getElementById("resultadoTotal");
  resultadoElement.textContent = "DEVEM SER INSPECIONADAS: " + resultadoPorCodigo + " PEÇAS POR CÓDIGO!";
  resultadoElement2.textContent = "DEVEM SER INSPECIONADAS: " + resultadoTotal + " PEÇAS NO TOTAL!";
}
