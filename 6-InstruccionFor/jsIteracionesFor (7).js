function Mostrar() {

    var contadordiv = 0;
    var numero;

    numero = parseInt(prompt("Ingrese el numero"));

    while (numero <= 0 || isNaN(numero)) 
    {

        numero = parseInt(prompt("error, Ingese un numero"));
    }

    for (var i = 1; i <= numero; i++)
    {
        if (numero % i == 0)
         {

            console.log(i);
            contadordiv++;
        }
    }

    console.log("cantidad de divisores " + contadordiv);


}//FIN DE LA FUNCIÓN


