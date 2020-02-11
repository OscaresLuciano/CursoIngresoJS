function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;
    var estadoCivil = document.getElementById("estadoCivil").value

    if(edad < 18 && estadoCivil != "Soltero"){

    }else if(estadoCivil == "Soltero" && edad > 17){
        console.log("Es soltero y no es menor.")            
    }
    

}//FIN DE LA FUNCIÓN