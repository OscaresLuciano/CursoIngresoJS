function mostrar()
{
    var marca;
    var peso = 0;
    var temperatura = 0;
    var respuesta = "si";
    var temperaturasPares = 0;
    var productoMasPesado;
    var productosBajoCero = 0;
    var pesoPromedio = 0;
    var pesoMaximo = 0;
    var pesoMinimo = 0;

    while(respuesta != "no") {
        marca = prompt("Ingrese marca");
        peso = prompt("Ingrese el peso del producto"); 
        peso = parseInt(peso);

        while(peso < 1 || peso > 100) {
            peso = prompt("peso incorrecto, vuelva a ingresarlo");
        }



        console.log("peso: " + peso);

        respuesta = prompt("Ingresar otro numero?");
    }

    document.write("Marca " + marca);

}
