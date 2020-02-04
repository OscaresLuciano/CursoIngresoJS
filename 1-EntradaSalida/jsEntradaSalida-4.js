/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var datoPrompt;

	datoPrompt = prompt("Ingrese su nombre", "Nombre");
	mostrarDato = document.getElementById("elNombre").innerHTML = datoPrompt;

	alert(mostrarDato)
}

