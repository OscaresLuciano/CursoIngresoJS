var eleccionMaquina;
var eleccionJugador;
var min = 1;
var max = 4;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina = Math.floor(Math.random()*(max - min)) + min;
	alert ("Elección máquina realizada");
    console.log("Elección máquina: " + eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	eleccionJugador = 1;
    console.log("Elección de jugador: " + eleccionJugador);

    switch (eleccionMaquina) {
        case 1:
			alert("Empató");
			ContadorDeEmpates++
            break;
        
        case 2:
			alert("Perdió");
			ContadorDePerdidas++
            break;

        case 3:
			alert("Ganó");
			ContadorDeGanadas++
            break;

	}
	
	document.getElementById("ganadas").value = "Juegos ganados: " + ContadorDeGanadas;
	document.getElementById("perdidas").value = "Juegos ganados: " + ContadorDePerdidas;
	document.getElementById("empatadas").value = "Juegos ganados: " + ContadorDeEmpates;

	eleccionMaquina = Math.floor(Math.random()*(max - min)) + min;

}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionJugador = 2;
    console.log("Elección de jugador: " + eleccionJugador);

    switch (eleccionMaquina) {
        case 1:
			alert("Ganó");
			ContadorDeGanadas++
            break;
        
        case 2:
			alert("Empató");
			ContadorDeEmpates++
            break;

        case 3:
			alert("Perdió");
			ContadorDePerdidas++
			break;
			
	}

	document.getElementById("ganadas").value = "Juegos ganados: " + ContadorDeGanadas;
	document.getElementById("perdidas").value = "Juegos ganados: " + ContadorDePerdidas;
	document.getElementById("empatadas").value = "Juegos ganados: " + ContadorDeEmpates;

	eleccionMaquina = Math.floor(Math.random()*(max - min)) + min;

}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccionJugador = 3;
    console.log("Elección de jugador: " + eleccionJugador);

    switch (eleccionMaquina) {
        case 1:
			alert("Perdió");
			ContadorDePerdidas++
            break;
        
        case 2:
			alert("Ganó");
			ContadorDeGanadas++
            break;

        case 3:
			alert("Empató");
			ContadorDeEmpates++
			break;
	
	}

	document.getElementById("ganadas").value = "Juegos ganados: " + ContadorDeGanadas;
	document.getElementById("perdidas").value = "Juegos ganados: " + ContadorDePerdidas;
	document.getElementById("empatadas").value = "Juegos ganados: " + ContadorDeEmpates;

	eleccionMaquina = Math.floor(Math.random()*(max - min)) + min;
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}