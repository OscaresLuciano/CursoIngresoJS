cont = true;
function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while(cont){
        if (numero >= 0 && numero <= 9){
			console.log("Número: " + numero);
			document.getElementById("Numero").value = numero
            cont = false;
        }else{
            console.log("Numero incorrecto");
            cont = true;
            numero = prompt("ingrese un número entre 0 y 10.");
        }
    }

}//FIN DE LA FUNCIÓN