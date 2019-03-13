function mostrar()
{
    var pais;
    var canthabitantes;
    var contcanthabit=0 ;
    var temperatura;
    var temppar= 0;
    var promedio;
    var min;
    var tempmin;
    var paistempmin;
    var flag = 0;
    var paismin;
    var tempmay = 0;
   var acucanthabit=0;
    do {
        pais = prompt("Ingrese su pais");
        while (!(isNaN(pais))) {
            pais = prompt("Error. Reingrere una pais valido");
        }
        canthabitantes = parseInt(prompt("ingrese la cantidad de habitantes"))
        while (canthabitantes <= 1 || canthabitantes >= 7000 || isNaN(canthabitantes)) {
            canthabitantes = parseInt(prompt("Error. Reingrese una cantidad de habitantes valida"));
        }
        temperatura = prompt("Ingrese la temperatura");
        while(temperatura <= -50 || temperatura >= 50 || isNaN(temperatura)) {
            temperatura = prompt("Error. Reingrese una temperatura valida");
        }
        
        

        if (temperatura % 2 == 0) {
            temppar++;
        } 
        
        if (temperatura > 40) {
            tempmay++;
        } 
        
         if (flag == 0 || canthabitantes < min) {
            min = canthabitantes;
            paismin = pais;
            flag = 1;
            if (flag == 0 || temperatura < tempmin) {
                tempmin = temperatura;
                paistempmin = pais;
                
            }
        }
        acucanthabit+=canthabitantes
        contcanthabit++
    }
    while (confirm("Quiere repetir el proceso?"));
   promedio=acucanthabit/contcanthabit;

    document.write("Las cantidades de temperatura pares son: " + temppar + "<br> La cantidad de temperaturas que superan los 40 grados son: " + tempmay   + "<br> El promedio de todos los habitantes ingresados: " + promedio +  "<br> la menor cantidad de habitantes y el pais es " + min +" " + paismin+"<br> la temperatura mas baja y el pais es " + tempmin +" " + paistempmin);
}

