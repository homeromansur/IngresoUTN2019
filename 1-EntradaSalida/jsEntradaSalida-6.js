/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var x;
    var y;
    var resultado;

    x = parseInt(document.getElementById("numeroUno").value);
    y = parseInt(document.getElementById("numeroDos").value);
   
    resultado = x + y ;
   
    alert("su resultado es  " + resultado);
}

