function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = true;

	while (respuesta == true) {

		var numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		do{			

			acumulador = acumulador + numero;
			respuesta = confirm("Ingresar otro número?")
			
		}while (isNaN(numero)) ;

		
		contador++
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN