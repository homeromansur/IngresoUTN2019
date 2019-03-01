//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeproducto;
    var iva;
    var importefinal;

    importeproducto = parseInt(prompt("Ingrese el importe del producto"));

iva = importeproducto * 21 /100;

importefinal = importeproducto + iva;

document.getElementById("importe").value = importefinal;


}

