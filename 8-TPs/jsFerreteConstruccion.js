/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var x;
    var y;
    var perimetro;
    
x = parseFloat(document.getElementById("Largo").value);
y = parseFloat(document.getElementById("Ancho").value);    

perimetro = ((x * 2) + (y * 2)) * 3;

alert("debo usar " + perimetro + " metros");


}

function Circulo () 
{
      var x;
      var resultado;
    
x = parseFloat(document.getElementById("Radio").value);

resultado = (((2 * 3.14) * x) * 3);

alert("Debera usar " + resultado + " metros"); 
  


  

	
}
function Materiales () 
{
    var x;
    var y;
    var cemento;
    var cal;
    var superficie;

x = parseFloat(document.getElementById("Largo").value);
y = parseFloat(document.getElementById("Ancho").value);    

superficie = x * y ;

cemento = superficie * 2;

cal = superficie  * 3;

alert("para una superficie de " + superficie + " m2 " + " debera usar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
	
}