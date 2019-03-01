function Mostrar()
{
    var contadorpares = 0;
    var numero;

    numero = parseInt(prompt("Ingrese el numero"));

while(numero <=0 || isNaN(numero)){

    numero = parseInt(prompt("error, Ingese un numero"));
}
for ( var i = 1; i <= numero; i++)
{ 
    if (i % 2 == 0)
    {
    console.log(i);

    contadorpares++
    }
}

console.log("cantidad de pares " + contadorpares);


}//FIN DE LA FUNCIÓN