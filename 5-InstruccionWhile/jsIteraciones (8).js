function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = true;

	while(respuesta == true){

		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		do {
			
			if(numero >= 0){

				positivo += numero
				console.log("Suma de números positivo: " + positivo);

			}else{

				negativo *= numero
				console.log("Producto  de números negativos: " + negativo);

			}

		respuesta = confirm("Ingresar otro número?")

		}while (isNaN(numero)) ;

		contador++
	}


document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN