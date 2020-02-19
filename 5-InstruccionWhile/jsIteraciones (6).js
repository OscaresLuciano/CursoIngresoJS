function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var iteraciones;
	
	iteraciones = prompt("Cuantos numeros desea ingresar?");
	iteraciones = parseInt(iteraciones);

	while(contador < iteraciones){

		do{
			
			var numero = prompt("Ingrese un número");
			numero = parseInt(numero);

			acumulador += numero;

		}while (isNaN(numero)) ;

		contador++;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

	/*
	var contador = 0;
	var acumulador = 0;
	var iteraciones = 5;

	while(contador < 5){

		var numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			
			numero = prompt("Error! Ingrese un número.");
			numero = parseInt(numero);

		}

		acumulador += numero;

		contador++;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;
	*/

}//FIN DE LA FUNCIÓN