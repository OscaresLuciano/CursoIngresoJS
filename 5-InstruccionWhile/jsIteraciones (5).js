var cont = true;
function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(cont){
    if (sexo == "f" || sexo == "m"){
        console.log("Sexo: " + sexo);
        document.getElementById('Sexo').value = sexo;
        cont = false;
    }else{
        console.log("Incorrecto");
        cont = true;
        sexo = prompt("ingrese F ó M .");
    }
}


}//FIN DE LA FUNCIÓN