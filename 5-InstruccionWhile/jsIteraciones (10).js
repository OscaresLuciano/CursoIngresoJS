function mostrar()
{
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferencia;
	var numero;
	//declarar contadores y variables 
	
	var respuesta="si";
	

	while(respuesta!="no") {
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		var tipo=(numero%2)?"Impar":"Par";

		console.log("numero ingresado: " + numero);

		do{

			if(numero < 0) {

				sumaNegativos += numero;
				contadorNegativos++;

				promedioNegativos = sumaNegativos / contadorNegativos;

				console.log("Suma de negativos: " + sumaNegativos);
				console.log("Promedio de negativos: " + promedioNegativos);

			} else if(numero > 0) {

				sumaPositivos += numero;
				contadorPositivos++;

				promedioPositivos = sumaPositivos / contadorPositivos;

				console.log("Suma de positivos: " + sumaPositivos);
				console.log("Promedio de positivos: " + promedioPositivos);

			} else if (numero == 0) {

				++contadorCeros;
				console.log("Cantidad de ceros: " + contadorCeros);

			}else if (tipo == "par") {

				++contadorPares;
				console.log("Cantidad de pares: " + contadorPares);

			}

			diferencia = sumaPositivos - sumaNegativos;
			console.log("Diferencia entre positivos y negativos: " + diferencia);

		} while (isNaN(numero));
		

		respuesta = prompt("Ingresar otro numero?");
	
	}

	document.write("Suma de positivos: " + sumaPositivos + "</br>");
	document.write("Promedio de positivos: " + promedioPositivos + "</br>");

	document.write("Suma de negativos: " + sumaNegativos + "</br>");
	document.write("Promedio de negativos: " + promedioNegativos + "</br>");

	document.write("Cantidad de ceros: " + contadorCeros + "</br>");
	document.write("Cantidad de pares: " + contadorPares + "</br>");
}//FIN DE LA FUNCIÓN