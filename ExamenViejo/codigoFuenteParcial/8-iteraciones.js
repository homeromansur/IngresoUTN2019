//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var pares = 0;
    var promedio;
    var cont = 0;
    var suma = 0;
    var max;
    var min;
    var flag = 0;
      
    do {
          var numero = parseInt(prompt("Ingrese un numero positivo: "));
          while (isNaN(numero) || numero < 0)
          {
              numero = parseInt(prompt("Error. Ingrese un numero positivo: "));
          }
  
          if (numero % 2 == 0) 
          {
              pares++;
          }
          if (numero > max || flag == 0) 
          {
              max = numero;
          }
          if (numero < min || flag == 0) 
          {
              min = numero;
              flag = 1;
          }
          suma += numero;
          cont++;
         } while (confirm("¿Desea seguir ingresando numeros?"));
      
         promedio = suma / cont;
      
         document.write("a) Cantidad de numeros pares: " + pares + "<br>b) Promedio de todos los numeros: " + promedio.toFixed(2) + "<br>c) Suma de todos los numeros: " + suma + "<br>d) Numero maximo y minimo: " + max + " y " + min + " respetivamente.");
  }
  
  

	



