//casa virgo
let payaso =112;
let muneca = 75;

let numero_payaso = 10;
let numbero_muneca = 20;

function peso(payaso, muneca, numero_payaso, numbero_muneca){


    let pesoP = payaso*numero_payaso;
    let pesoM = muneca*numbero_muneca;
    alert("peso payaso: "+ pesoP);
    alert("peso muñeca: "+ pesoM);
    let pesoTotal = pesoP + pesoM;
    let paquetes = pesoTotal/1000;
    let paqueteT = Math.ceil(paquetes);
    alert("Paquetes: " + paqueteT);
}
peso(payaso, muneca, numero_payaso, numbero_muneca);