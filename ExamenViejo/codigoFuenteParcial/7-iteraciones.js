//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	{
	var nota;
    var sexo;
    var ntoaBaja;
    var contadorvarones= 0;
    var acumuladornotas= 0;
    var promedio;
    var flag =0;


    for( var i = 1 ; i <= 6; i++)
    {

    nota = parseInt(prompt("ingrese su nota  "));
   
    while((nota >= 0 || nota >= 10) || isNaN(nota))
    {
        nota = parseInt(prompt("error reingrese nota  " + i));
         
    }

    sexo = prompt("ingrese su sexo");

    while(sexo != "m" || sexo != "f" );
    {
        sexo = prompt("sexo incorrecto reingrese el dato")
    }

   

}

