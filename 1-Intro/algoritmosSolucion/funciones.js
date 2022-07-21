//alert("Hola");
/*-----------------Sintaxis
function + nombreFuncion (parametro a, parametro x){
    acciones
}
*/
/*
//Ejercicio 1
function suma(){
    const a = parseFloat(prompt("Introduce número 1: "));
    const b = parseFloat(prompt("Introduce número 2: "))
    console.log("Suma: ", a+b);

}
suma();

*/

//Ejemplo 2
/*
function calculadoraSueldo(sueldoIngresado, diasTrabajados){
    let nombre = prompt("Escribe tu nombre:");
    console.log(nombre);

    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados;
    const semanasMes = 4;

    console.log("Sueldo semanal: ", sueldo *diasSemana);
    console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));

}


calculadoraSueldo(100,5);
calculadoraSueldo(1000, 2);
calculadoraSueldo(30000, 7);
*/

//Ejercicio 3
/*
function calculadoraSueldo(sueldoIngresado, diasTrabajados){
    let nombre = prompt("Escribe tu nombre:");
    console.log(nombre);

    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados;
    const semanasMes = 4;

    console.log("Sueldo semanal: ", sueldo *diasSemana);
    console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));
    return semanasMes;
}


console.log(calculadoraSueldo(100,5)); 
let calculo2 = calculadoraSueldo(1000, 2);
calculadoraSueldo(30000, 7);
*/

/*
//Calculadora de porcentaje
function calculadoraPorcentaje(numero, porcentaje){
    
    let resultado = numero*porcentaje/100;
    
    return {resultado, numero}

}
let resultadoFuncion = calculadoraPorcentaje(100,40);
console.log(resultadoFuncion.numero);
console.log(resultadoFuncion.resultado);
*/




function divisible (){

    const numero = parseInt(prompt("Introduce número: "));
    let division = false;
    if (numero % 8 == 0 && numero % 7 == 0){

        division = true;

    }/*else{
        division = false;
    }*/
    return division
}


let resultado = divisible();
console.log(resultado);

