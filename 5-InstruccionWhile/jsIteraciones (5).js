function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();



	while (!(sexo =="f" || sexo == "m") )
	{
		
		sexo = prompt("No es el dato pedido, intente nuevamente").toLowerCase();
		
	}
    
	document.getElementById("Sexo").value = sexo 

}//FIN DE LA FUNCIÓN

