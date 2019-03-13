function mostrar()
{
    var numero1;
    var numero2;
    var resultado;
    var mensaje;

    numero1=parseInt(prompt("ingrese su 1er numero"));
    numero2=parseInt(prompt("Ingrese su 2do numero"));

if(numero1==numero2){

    resultado = numero1*numero2;
    alert("su resultado es " + resultado);
}
else if ((numero1/numero2) % 0)
{
    resultado = numero1 - numero2;
    alert("su resultado es " + resultado);
}



}
