/*Crea una calculadora para convertir un valor
ingresado por el usuario a grados Celsius,
Fahrenheit y Kelvin.
Considera:
● Solicitar el valor por medio de un prompt
● Crear funciones para realizar los cálculos
● Mostrar los resultados mediante alertas*/


let valor = Number(prompt("Ingresa valor: "));
let grados;

function convertidor(){
    console.log("1 para Celsius a Farenheit");
    console.log("2 para Celsius a Kelvin");
    console.log("3 para Farenheit a Celsius");
    console.log("4 para Farenheit a Kelvin");
    console.log("5 para Kelvin a Celsius");
    console.log("6 para Kelvin a Farenheit");
    let opcion = Number(prompt("Ingresa opción:"));
    switch (opcion){
        case 1:
            grados = valor * 1.8 + 32
            console.log(grados + " F");
            break;
        case 2:
            grados = valor + 273.5;
            console.log(grados+ " K");
            break; 
        case 3:
            grados =  5/9 * (valor-32);
            console.log(grados+ " C");
            break;
        case 4:
            grados = 5/9 (valor - 32) + 273.15;
            console.log(grados+ " K");
            break;
        case 5:
            grados = valor - 273.15;
            console.log(grados+ " C");
            break;
        case 6:
            grados = 1.8 *(valor - 273.15) + 32;
            console.log(grados + " F");
            break;
    }

}
convertidor()
