function mostrar()
{
    var sabor;
    var peso;
    var min;
    var sabormin;
    var contcarne= 0;
    var acumcarne= 0;
    var flag=0;
    var contkg = 0;
    var promedio;
    var promediocarne;

    for(var i = 1; i <=10; i++){

        sabor=prompt("ingrese el sabor de bolsa "+ i);

        while(!(sabor=="pollo"|| sabor=="carne" || sabor=="vegetales")){
           
            sabor=prompt("error. reingrese sabor");
        }
    peso = prompt(" ingrese el peso de la bolsa " + i);

    while(bolsa<=0 || bolsa <500)
    {
        peso = prompt(" error. reingrese el peso de la bolsa " + i);
    }
      if(peso<min||flag==0){
         
           min=peso;
          sabormin= sabor;
          flag== 1;
      }
      if(sabor == "carne"){
          contcarne++;
          acumcarne+=peso;
      }
    

    }
 promedio = contkg / 10;
 promediocarne= acumcarne/contcarne;
 document.write("el promedio total es " + promedio + "<br> el promedio de carne es" + promediocarne + "<br> la bolsa mas liviana es de sabor " + sabormin + " y pesa " + min );

}
