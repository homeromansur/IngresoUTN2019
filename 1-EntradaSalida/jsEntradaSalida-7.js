/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var x;
    var y;
    var suma;

    x = parseInt(document.getElementById("numeroUno").value);
    y = parseInt(document.getElementById("numeroDos").value);
   
    suma = x + y ;
   
    alert("su suma es  " + suma);
}

function restar()
{
    var x;
    var y;
    var resta;

    x = parseInt(document.getElementById("numeroUno").value);
    y = parseInt(document.getElementById("numeroDos").value);
   
    resta = x - y ;
   
    alert("su resta es  " + resta);
	
}

function multiplicar()
{ 
	var x;
    var y;
    var multiplicacion;

    x = parseInt(document.getElementById("numeroUno").value);
    y = parseInt(document.getElementById("numeroDos").value);
   
    multiplicacion = x * y ;
   
    alert("su multiplicacion es  " + multiplicacion);
}

function dividir()
{
    var x;
    var y;
    var division;

    x = parseInt(document.getElementById("numeroUno").value);
    y = parseInt(document.getElementById("numeroDos").value);
   
   division = x / y ;
   
    alert("su division es  " + division);
	
}

