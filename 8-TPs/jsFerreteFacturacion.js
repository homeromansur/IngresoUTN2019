/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var x;
    var y;
    var z;
    var resultado;
    
x = parseFloat(document.getElementById("PrecioUno").value);
y = parseFloat(document.getElementById("PrecioDos").value);    
z = parseFloat(document.getElementById("PrecioTres").value);
 
resultado = x + y + z;

alert("la suma de los productos es " + resultado);        
}
function Promedio () 
{
    	var x;
    var y;
    var z;
    var resultado;
    
x = parseFloat(document.getElementById("PrecioUno").value);
y = parseFloat(document.getElementById("PrecioDos").value);    
z = parseFloat(document.getElementById("PrecioTres").value);
 
resultado = (x + y + z) / 3;

alert("El promedio es " + resultado);
	
}
function PrecioFinal () 
{
    var x;
    var y;
    var z;
    var resultado;
    
x = parseFloat(document.getElementById("PrecioUno").value);
y = parseFloat(document.getElementById("PrecioDos").value);    
z = parseFloat(document.getElementById("PrecioTres").value);

resultado = (x + y + z) * 21 /100;

alert("el precio final es " + resultado);
 
	
}