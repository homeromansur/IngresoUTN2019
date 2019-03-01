//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;

   mes = prompt("ingrese un mes del año");

   switch(mes)
   {
       case "enero":
       case "febrero":
       alert("veranito!!!");
       break;
       default:
       alert("Extraño enero y febrero :( ")
    

   }
	
	
}

