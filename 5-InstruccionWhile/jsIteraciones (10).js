function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		num = prompt("ingrese un numero");
		num = parseInt(num);

		console.log("numero ingresado: " + num)

		

		respuesta = prompt("Ingresar otro numero?");
	
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN