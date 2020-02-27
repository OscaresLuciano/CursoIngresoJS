/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;
var max = 101;
var min = 1;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  
	numeroSecreto = Math.floor(Math.random()*(max - min)) + min;
  console.log(numeroSecreto);
  
  //alert(numeroSecreto );
  
  alert("Se generó el número secreto!")

}

function verificar()
{
  numeroIngresado = document.getElementById("numero").value;
  numeroIngresado = parseInt(numeroIngresado);

	if (numeroIngresado == numeroSecreto){

    alert("Usted es un ganador!!! y en sólo " + contadorIntentos + " intentos.");

  } else if (numeroIngresado < numeroSecreto) {

    alert("Falta...");

  } else {

    alert("Se pasó...");

  }

  contadorIntentos++
  document.getElementById("intentos").value = contadorIntentos;
	
}