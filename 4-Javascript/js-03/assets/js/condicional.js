/*Control de flujo*/
/*------------Condicionales---------------*/
/*
if (conditionA) {
    //si se cumple A hace algo
}else if (condicionB){
    //si se cumple B hace algo
}else{

}
*/
let condicion = "C";
if (condicion === "A") {
    
} else if(condicion === "B"){
    
} else if(condicion === "C"){
    console.log("Entro en condición C");
    
}else{

}

/*----------------------------Switch----------- */
let condicionSwitch = "Hola";
switch (condicionSwitch) {
    case "Hola":
        console.log("Buenos días");
        break;
    case "Adiós":
        console.log("Nos vemos");
        break;
    default:
        console.log("default");
        break; //opcional
}



let edad = 30;

switch(edad >= 18){ //da true
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
}



let opcion = Number(prompt("Opción: "));
let numero1 = Number(prompt("Número 1: "));
let numero2 = Number(prompt("Número 2: "));
let ro = null;
switch (opcion) {
    case 1:
        ro = numero1+numero2;
        
        break;
    case 2:
        ro = numero1*numero2;
        break;
    case 3:
        if (numero2!=0){
            ro = numero1/numero2;
        }else{
            ro = "error de division";
        }
        break;
    case 4:
            ro = numero1*numero2;
        break;

    default:
        break;

    
}
console.log(ro);


let opcionIf = 1;
if (opcionIf === 1 ){

    console.log("sumar");
}else if (opcionIf === 2){
    console.log("restar");
}else if (opcionIf === 3){
    console.log("multiplicar");
}else if (opcionIf === 4){
    console.log("dividir");
}else{
    console.log("opcion no valida");
}







/*
let fDivision = function(a,b){
    let division = 0;
    while (b!=0){
        division = a/b;
        break;
    }
    if (b === 0) {
        division = "error";
    }
    
    return division;
}

console.log(fDivision(10,0));
*/