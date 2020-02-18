var cont = true;
function mostrar()
{
    var clave = prompt("ingrese el número clave.");
    
    while(cont){
        if (clave == "utn750"){
            console.log("Clave correcta");
            cont = false;
        }else{
            console.log("Wrong password");
            cont = true;
            clave = prompt("ingrese el número clave.");
        }
    }
}//FIN DE LA FUNCIÓN
