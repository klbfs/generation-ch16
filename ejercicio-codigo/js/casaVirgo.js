//casa virgo
let payaso =112;
let muneca = 75;

let numero_payaso = 10;
let numbero_muneca = 20;

function peso(payaso, muneca, numero_payaso, numbero_muneca){


    let pesoTotal = payaso*numero_payaso + numbero_muneca;
    let paquetes = pesoTotal/1000;
    let paqueteT = Math.ceil(paquetes);
    console.log("Paquetes", paqueteT);
}
peso(payaso, muneca, numero_payaso, numbero_muneca);