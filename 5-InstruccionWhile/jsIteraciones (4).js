function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));



	
	while(numero < 0 || numero > 9 || isNaN(numero) )
	{
		
		numero = parseInt(prompt("No es el dato pedido"));
		
	}

	document.getElementById("Numero").value = (numero + ", su numero es correcto")


}//FIN DE LA FUNCIÓN