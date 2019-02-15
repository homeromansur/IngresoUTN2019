function Mostrar()
{
var edad;

edad = parseInt(document.getElementById("edad").value);

if ( edad >= 18 ) {
 alert("Usted es un adulto");
    } 
else  { 
  
  if  (edad < 13) {
  
alert("Usted es un niño"); 
}
else {
    alert("usted es un adolescente");
}
}



}//FIN DE LA FUNCIÓN
