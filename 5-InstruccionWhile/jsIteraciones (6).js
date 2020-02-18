function mostrar()
{
	var contador=1;
	var acumulador=0;

	while(contador <= 5){
		valor = prompt("Ingrese un número");
		valor = parseInt(valor);
		acumulador = acumulador + valor;
		contador++
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN