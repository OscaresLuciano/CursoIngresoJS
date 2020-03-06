function mostrar()
{
  var nombre;
  var localidad;

  var nombre = prompt("Ingrese su nombre");
  var localidad = prompt("Ingrese su localidad");

  document.getElementById("elNombre").value = nombre;
  document.getElementById("laLocalidad").value = localidad;

  alert("Su nombre es " + nombre + " y su localidad es " + localidad);
}
