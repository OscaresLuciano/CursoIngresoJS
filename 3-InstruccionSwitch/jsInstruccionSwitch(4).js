function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño) {
        case "Febrero":
            mensaje = "Tiene 28 días";
            break;

        case "Abril":
            mensaje = "Tiene 30 días";
            break;
        case "Junio":
            mensaje = "Tiene 30 días";
            break;
        case "Septiembre":
            mensaje = "Tiene 30 días";
            break;
        case "Noviembre":
            mensaje = "Tiene 30 días";
            break;

        default:
            mensaje = "Tiene 31 días";

    }

    alert(mensaje);

}//FIN DE LA FUNCIÓN