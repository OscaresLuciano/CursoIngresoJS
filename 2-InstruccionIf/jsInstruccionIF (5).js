function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;

    if(edad < 13 || edad > 17){
        console.log("No es un adolescente.");
    }
}//FIN DE LA FUNCIÓN