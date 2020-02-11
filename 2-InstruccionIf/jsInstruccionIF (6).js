function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;

    if(edad > 17){
        console.log("Es mayor.")
    }else{ 
        if(edad > 12 ){
            console.log("Es un adolescente.");
        }else{
            console.log("Es menor.");
        }
    }

}//FIN DE LA FUNCIÓN