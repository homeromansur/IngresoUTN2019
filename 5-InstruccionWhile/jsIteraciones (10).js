function Mostrar()
{

	var contador = 0;
	var acumuladorneg = 0;
	var acumuladorpos = 0;
	var contadorpos = 0;
	var contadorneg = 0;
	var contadorcero = 0;
	var contadorpares = 0;
	var promediopos;
	var promedioneg;
	var diferencias;
	var respuesta = "si";
	var numero;
	do
	{
		numero = parseInt(prompt("Ingrese el nombre"));
		if(numero >0)
		{
			acumuladorneg += numero;
			contadorpos++;
		}
		else if(numero < 0) 
		{
			acumuladorneg+= numero;
			contadorneg++;
		}
		else {
			contadorcero == o;
			contadorcero++;
		}
		if (numero % 2 == 0)
		{
			contadorpares++;

		}
		respuesta=prompt("Desea continuar?");
	
	}while(respuesta = "si");

promedioneg = acumuladorneg / contadorneg;
promediopos = acumuladorpos / contadorpos;
diferencias = promedioneg - promediopos;

document.write("1-Suma de los negativos. " + 
document.write("2-Suma de los positivos. "
document.write("3-Cantidad de positivos. " 
document.write("4-Cantidad de negativos. "
document.write("5-Cantidad de ceros. "
document.write("6-Cantidad de números pares. " 
document.write("7-Promedio de positivos. "
document.write(" 8-Promedios de negativos. " 
document.write("9-Diferencia entre positivos y negativos, (positvos-negativos) "

}//FIN DE LA FUNCIÓN