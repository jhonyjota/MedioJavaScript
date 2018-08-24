function trocaImagem() {
	document.getElementById("myImage").src="img/aberta.jpg"; 				
}
function imagemTroca() {
	document.getElementById("myImage").src="img/fechada.jpg";
}	

function trocaFonte() {
	document.getElementById("demo").style.fontSize="50px";
}	
function ocultarElemento(){
	document.getElementById("demo").style.display="none";
}
function naoOcultar(){
	document.getElementById("demo").style.display="block";
}
function calcular(){
	var total = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value) ;
	window.alert(total);
}
