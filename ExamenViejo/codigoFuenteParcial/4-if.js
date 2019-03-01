//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
    var numero2;
    var resultado;
    var mensaje
    numero1 = parseInt(prompt("ingrese el numero 1"));
    numero2 = parseInt(prompt("ingrese el numero 2"));

    if(numero1 == numero2 )
    {
       resultado = numero1 * numero2;
       mensaje = ("El producto es " + resultado )
    }
    else if (numero1 > numero2)
    {
       resultado = numero1 - numero2;
        mensaje = ("El resta es " + resultado )

    }
    else { 
       resultado= numero1 + numero2
    mensaje = ("El suma es " + resultado )
 }

    document.write(mensaje);

}

