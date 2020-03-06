function mostrar()
{
    var precio = 0;
    var descuento = 0;

    precio = parseInt(prompt("Ingrese precio"));
    descuento = parseInt(prompt("Ingrese descuento"));

    descuento = precio * descuento / 100;
    precio = precio + descuento;

    document.getElementById("elPrecioFinal").value = precio;
}
