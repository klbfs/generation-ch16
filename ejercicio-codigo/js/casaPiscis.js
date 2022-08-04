/*Crea un programa que emule las funciones de
un cajero automático.
Considera lo siguiente:
● El cajero solo cuenta con $10,000 de saldo.
● Cada transacción se descontará del saldo
del cajero.
● Se debe tener una función para consultar
el saldo del cajero */


//casa piscis
let saldo = 10000;
function consulta(){
    
    let retirar = prompt("Cuánto desea retirar?: ");
    saldo = saldo - retirar;
    return saldo
}
console.log("Saldo restante: "+ consulta()); 
console.log("Saldo restante: "+consulta()); 
