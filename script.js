function calcularInspecao() {
  var inputPorcentagem = document.getElementById("inputPorcentagem").value;
  var inputPecas = document.getElementById("inputPecas").value;
  var inputCodigos = document.getElementById("inputCodigos").value;


  var per = inputPorcentagem / 100
  var pecas = parseInt(inputPecas);
  var codigos = parseInt(inputCodigos);

  var resultado = (pecas * per) / codigos;

 
  var resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = "Devem ser inspecionadas: "+ resultado + " Peças por código";
}
