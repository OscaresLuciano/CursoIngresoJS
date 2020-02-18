function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	respuesta = prompt("Ingresar número?")

	while(respuesta == "si"){
		valor = prompt("Ingrese un número");
		valor = parseInt(valor);
		acumulador = acumulador + valor;
		respuesta = prompt("Ingresar otro número?")
		contador++
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN