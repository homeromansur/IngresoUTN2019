//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
    var ancho;
    var perimetro;

 largo = parseInt(document.getElementById("largo").value);
 ancho = parseInt(document.getElementById("ancho").value);

perimetro =((largo * 2 )+ (ancho * 2)) * 6;

alert("usted necesitara " + perimetro + "M. de alambre");
}
