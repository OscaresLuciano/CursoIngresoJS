function mostrar()
{
	var max;
	var min;
	var num = 0;
	var primeraVez = true; // flag o bandera
	var respuesta = true;

	while(respuesta == true)
	{
		num = prompt("ingrese un numero");
		num = parseInt(num);
		
		do {
			
			console.log("Numero ingresado: " + num)

			if(primeraVez) {

				primeraVez = false;
				max = num;
				min = num;
				console.log("maximo: " + max);
				console.log("minimo: " + min);

			} else {

				if (num > max) {
					max = num;
					console.log("maximo: " + max);
				}

				if (num < min) {
					min = num;
					console.log("minimo: " + min);
				}

			}


			respuesta = confirm("Ingresar otro numero?");

		} while (isNaN(num)) 
		
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN