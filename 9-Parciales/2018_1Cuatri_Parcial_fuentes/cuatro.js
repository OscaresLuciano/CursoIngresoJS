function mostrar()
{
    var num1 = 0;
    var num2 = 0;
    var resta = 0;
    var suma = 0;

    num1 = prompt("Ingrese un numero");
    num2 = prompt("Ingrese otro numero");

    if(num1 == num2) {
        alert("Numeros iguales concatenados: " + num1 + num2);
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(num1 > num2) {
        resta = num1 - num2;
        alert("Resta: " + resta);
    } else {
        suma = num1 + num2;
        alert("Suma: " + suma);
    }

    if (suma > 10 ) {
        alert("La suma da " + suma + " y es mayor a 10");
    }

}
