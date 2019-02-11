/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var x;
    var resultado;
    
x = parseFloat(document.getElementById("Temperatura").value);
 
resultado = (((x - 32) * 5) /9);

alert("su conversion " + resultado + " grados centigrados"); 

   

  

}

function CentigradosFahrenheit () 
{
    var x;
    var resultado;
    
x = parseFloat(document.getElementById("Temperatura").value);
 
resultado = (((x *9) / 5) +32);

alert("su conversion " + resultado + " grados Fahrenheit"); 
	
}
