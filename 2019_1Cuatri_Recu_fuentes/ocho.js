function mostrar()
{
    var color;
    var valor;
    var contcol=0;
    var rojmay=0;
    var valmen=0;
    var cont = 0;
    var acu= 0;
do{
    color = prompt("ingrese un color");
    while(!(color=="verde" || color== "rojo"|| color == "amarillo")){
        color = prompt("error. reigrese un color");
    }
valor=parseInt(prompt("Ingrese un valor"));

while(valor>=0 || valor<10000){
    valor=parseInt(prompt("error. reingrese un valor"));
}
if(color=="rojo")
{
    contcol++;
}
else if(color=="rojo" && valor <5000){
    rojmay++;
}
else if(valor>5000){
    valmen++;

}
acu+=valor;
cont++;
}while(confirm("¿quiere seguir ingresando datos?"))
promedio = acu/cont;
document.write("la cantidad de autos rojo es" + contcol + "<br> cantidad de rojos mayores a 5000 es " + rojomay + "<br> cantidad de vehiculos con precio inferior a 5000 es " + valmen);
}
