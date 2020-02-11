function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var max;
	var min;
	var max = 11;
	var min = 1;

	nota = Math.floor(Math.random()*(max - min)) + min;
	console.log(nota);

	if(nota > 8){
		console.log("Excelente");
	}else{
		if(nota < 4){
			console.log("Vamos, la proxima se puede");
		}else{
			console.log("Aprobó");
		}
	}

}//FIN DE LA FUNCIÓN