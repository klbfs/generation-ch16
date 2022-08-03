//casa escorpio
let magico = Math.random();
let nIngresado = prompt("Numero: ");

if (nIngresado>magico){
    console.log("“El número que ingresaste es mayor al número mágico");
}else if (nIngresado<magico){
    console.log("El número que ingresaste es menor al número mágico");
}else if(nIngresado === magico){
    console.log("Felicidades, adivinaste el número mágico");
}else{
    console.log("#");
}
