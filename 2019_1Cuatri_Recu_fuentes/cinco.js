function mostrar() {
    var continente;
    var tipopago;
    var cantdias;
    var desc;
   

    cantdias = parseInt(prompt("ingrese la cantidad de dias que se va a quedar"));
    continente = document.getElementById("selecContinente").value;
    tipopago = document.getElementById("selecPago").value;

    switch (continente) {
        case "America":

            desc = 15;

            switch (tipopago) {

                case "Débito":
                    desc = 15 + 10;
                 break;
            }
            preciofinal = ((cantdias * 100) * desc / 100)- desc;
            alert("el precio final de su viaje a America es " + preciofinal);
            break;


        case "África":
        case "Oceania":

            desc = 30;

            switch (tipopago) {

                case "MercadoPago":
                case "Efectivo":
                    desc = 30 + 15;


                    break;
            }

            preciofinal = (((cantdias * 100) * desc / 100) - desc)
            alert("El precio final de su viaje a Africa u Oceania es " + preciofinal)

            break;

        case "Europa":


            desc = 20;

            switch (tipopago) {

                case "Débito":
                    desc = 20 + 15;
                    break;

                case "MercadoPago":
                    desc = 20 + 10;
                    break;
                default:
                    desc = 20 + 5;
            }
            preciofinal = (((cantdias * 100) * desc / 100) - desc)
            alert("El precio final de su viaje a europa es " + preciofinal)
            break;
        default:
            preciofinal = (((cantdias * 100) * 20 / 100) + 20);
            alert("El precio final de su viaje es " + preciofinal)
            break;
            
    }
}
