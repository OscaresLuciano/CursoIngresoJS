function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	var max;
	var min;
	var max = 11;
	var min = 1;

	random = Math.floor(Math.random()*(max - min)) + min;
	
	console.log("El número random es: " + random)

}//FIN DE LA FUNCIÓN