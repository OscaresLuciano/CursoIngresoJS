/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionJugador;
var min = 1;
var max = 4;

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random()*(max - min)) + min;
    console.log("Elección máquina: " + eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
    eleccionJugador = 1;
    console.log("Elección de jugador: " + eleccionJugador);

    switch (eleccionMaquina) {
        case 1:
            alert("Empató");
            break;
        
        case 2:
            alert("Perdió");
            break;

        case 3:
            alert("Ganó");
            break;

    }

}//FIN DE LA FUNCIÓN
function papel()
{
    eleccionJugador = 2;
    console.log("Elección de jugador: " + eleccionJugador);

    switch (eleccionMaquina) {
        case 1:
            alert("Ganó");
            break;
        
        case 2:
            alert("Empató");
            break;

        case 3:
            alert("Perdió");
            break;
            
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    eleccionJugador = 3;
    console.log("Elección de jugador: " + eleccionJugador);

    switch (eleccionMaquina) {
        case 1:
            alert("Perdió");
            break;
        
        case 2:
            alert("Ganó");
            break;

        case 3:
            alert("Empató");
            break;
            
    }

}//FIN DE LA FUNCIÓN