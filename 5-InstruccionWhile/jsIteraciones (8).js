function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	respuesta = prompt("Ingresar número?")

	while(respuesta == "si"){
		valor = prompt("Ingrese un número");
		valor = parseInt(valor);

		if(valor >= 0){
			positivo = positivo + valor
			console.log(positivo)
		}else{
			negativo = negativo * valor
			console.log(negativo)
		}

		respuesta = prompt("Ingresar otro número?")
		contador++
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN