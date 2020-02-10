/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largo;
var ancho;
var radio;
var resultado;
var circular;
var cemento;
var cal;

function Rectangulo () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    resultado = largo * ancho;

    console.log("Se necesitan " + resultado + " metros de alambre")
}
function Circulo () 
{
	radio = document.getElementById("Radio").value;
    radio = parseInt(radio);

    circular = 2 * Math.PI * radio

    console.log("Se necesitan " + circular + " metros de alambre")
}
function Materiales () 
{
	largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    cemento = 2
    cal = 3

    resultado = largo * ancho;

    cemento = 2 * resultado;
    cal = 3 * resultado;

    console.log("Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal")

}