var inputList = document.getElementById('valor');
var inputPecas = document.getElementById('inputPecas');
var inputCod = document.getElementById('inputCodigos');
var appCod = document.getElementById('resultadoPorCodigo');
var appTotal = document.getElementById('resultadoTotal');

const btn = document.getElementById('button');

btn.addEventListener('click', function () {

  var list = inputList.value;
  var pecas = inputPecas.value;
  var cod = inputCod.value;

 if(list == 1){
  var resultadoPec = pecas * 0.25 ;
  var resultado = resultadoPec/cod;
 }
 if(list == 2){
  var resultadoPec = pecas * 0.4 ;
  var resultado = resultadoPec/cod;
 }

 if(list == 3){
  var resultadoPec = pecas * 0.5 ;
  var resultado = resultadoPec/cod;
 }
 

 appCod.innerHTML = `Devem ser inspecionadas ${Math.round(resultadoPec)} peças no total`
 appTotal.innerHTML = `Devem ser inspecionadas ${Math.round(resultado)} peças por codigo`

 appCod.style.color = '#da0808';
 appTotal.style.color = '#da0808';
})

function abrirJanelaPopUp() {
  var url = "https://www.youtube.com/";
  var config = "width=400, height=300, top=100, left=100, scrollbars=yes, resizable=yes";
  window.open(url, "_blank", config);
        }
