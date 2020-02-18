function mostrar()
{
	var max = 0;
	var min = 999999999;
	var num = 0;
	var respuesta='si';

	respuesta = prompt("Ingresar numero?");

	while(respuesta!='no')
	{
		num = prompt("ingrese un numero");
		num = parseInt(num);

		console.log("numero ingresado: " + num)

		if(num > max){
			max = num;
			console.log("maximo: " + max);
		}
		if(num < min){
			min = num;
			console.log("minimo: " + min);
		}

		respuesta = prompt("Ingresar otro numero?");
		
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN