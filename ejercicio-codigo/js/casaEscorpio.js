
var max = 50;
var min = 0;

let Nmagico = Math.random()*(max-min) + min;
let magico = parseInt(Nmagico);

console.log("Numero aleatorio: ", magico);
let numbero = Number(prompt("Ingresa número: "));

if (numbero===magico){
    console.log("Felicidades");
}
while (numbero!=magico){
    let opcion;
    let salir;
    if (numbero>magico){
        console.log("Mayor");
        console.log("Desea continuar? Si-1 No-0");
        opcion = Number(prompt("Opción: "));
        if (opcion===1){
            numbero = Number(prompt("Ingresa número: "));
        }else if (opcion ===0){
            salir = 1;
            
        }
    }
    if (numbero<magico){
        console.log("Menor");
        console.log("Desea continuar? Si-1 No-0");
        opcion = Number(prompt("Opción: "));
        if (opcion===1){
            numbero = Number(prompt("Ingresa número: "));
        }else if (opcion ===0){
            salir = 1;
            
        }
    }

    if (salir ===1 ){
        break;
    }
}