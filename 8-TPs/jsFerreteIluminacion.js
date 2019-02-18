/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. document.getElementById("precioDescuento").value = preciodescuento;
*/
function CalcularPrecio () 
{
        var cantidadlamparas;
        var marca;
        var preciofinal; 
        var descuento;
        var preciodescuento;
       

        cantidadlamparas = parseInt(document.getElementById("Cantidad").value);
        marca = document.getElementById("Marca").value;
        
       
     if (cantidadlamparas >= 6) 
    {
            descuento = 35 * 50 / 100;

            preciodescuento = ((cantidadlamparas * 35) - descuento * cantidadlamparas);

            document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);
            
    } 
    else  if  ( cantidadlamparas <=2) 
    {
        
        preciodescuento = cantidadlamparas * 35;
        document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);
        
    }
            else  if  ( cantidadlamparas == 5 && marca == "ArgentinaLuz") 
	    {
            descuento = 35 * 40 / 100;
            preciodescuento = ((5 * 35) - descuento * 5);
            document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);
	        
	    }
       
            else if ( cantidadlamparas == 5 && marca != "ArgentinaLuz")
            {
                descuento = 35 * 30 / 100;
                preciodescuento = ((5 * 35) - descuento * 5);
                document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);
                
            }
       
        
	        else if ( cantidadlamparas == 3 && marca == "ArgentinaLuz")
        {
                descuento = 35 * 15 / 100;

                preciodescuento = ((3 * 35) - descuento * 3);
                document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);
                
    }
     
            else if ( cantidadlamparas == 3 && marca == "FelipeLamparas")
    {
                descuento = 35 * 10 / 100;
                preciodescuento = ((3 * 35) - descuento * 3);
                document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);
                
         
    }
            else if ( cantidadlamparas == 3 && marca != "ArgentinaLuz" ) 
    {
                descuento = 35 * 5 / 100;
                preciodescuento = ((3 * 35) - descuento * 3);
                document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);
                
         
    }
        else if ( cantidadlamparas == 3 && marca != "FelipeLamparas" ) 
    {
                descuento = 35 * 5 / 100;
                preciodescuento = ((3 * 35) - descuento * 3);
                document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);
                
         
    }
     
        else if ( cantidadlamparas == 4 && marca == "FelipeLamparas")
    {
               
        descuento = 35 * 25 / 100;
        preciodescuento = ((4 * 35) - descuento * 4);
        document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);            
         
    }
        else if ( cantidadlamparas == 4 && marca == "ArgentinaLuz")
    {
               
        descuento = 35 * 25 / 100;
        preciodescuento = ((4 * 35) - descuento * 4);
        document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);            
         
    }
        else if ( cantidadlamparas == 4 && marca != "ArgentinaLuz" )
    {
               
        descuento = 35 * 20 / 100;
        preciodescuento = ((4 * 35) - descuento * 4);
        document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);            
         
    }
        else if ( cantidadlamparas != 4 && marca != "FelipeLamparas" )
    {
               
        descuento = 35 * 20 / 100;
        preciodescuento = ((4 * 35) - descuento * 4);
        document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);            
         
    }
        if (preciodescuento >=120)
    {
       descuento = preciodescuento *10 / 100;
       preciofinal = preciodescuento + descuento;
       alert("Usted pago $" + preciofinal.toFixed(2) +  " de IIBB. " + ", siendo $" + descuento.toFixed(2) + " el impuesto que se pagó");
    }
    
    
} 


