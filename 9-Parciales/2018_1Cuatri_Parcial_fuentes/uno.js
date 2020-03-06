
function mostrar()
{
    var ancho = 0;
    var largo = 0;
    var perimetro = 0;

    ancho = prompt("Ingrese el ancho del rectangulo ");
    largo = prompt("Ingrese el largo del rectangulo");

    perimetro = 2*(ancho * largo);

    alert("El perimetro es: " + perimetro);

}
