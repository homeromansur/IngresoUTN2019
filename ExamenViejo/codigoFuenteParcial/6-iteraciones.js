//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe ;
    var mayor ;
    var menor;
    var flag =0;


    for( var i = 1 ; i <= 7; i++)
    {

    importe = parseInt(prompt("ingrese importe dia " + i));
   
    while (importe <= 0 || isNaN(importe))
    {
        importe = parseInt(prompt("error reingrese importe dia " + i));
    }
    if(importe > mayor || flag == 0)
    {
        mayor = importe;

    }
    if(importe < menor || flag == 0)

	{
        menor = importe;
        flag = 1;
    }
 }
  document.write("importe maximo $" + mayor + "<br>");
  document.write("importe minimo $" + menor);
}

