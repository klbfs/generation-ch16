'use strict';
//Conversión de tipo de datos o Casteo o Parseo o casting o par
let num = "5";
let num2 = "10";

console.log(num + num2); //concatenación
//Concatenación:
//resultado de unir dos cadenas de texto
//unimos un número con una cadena de texto


//Conversión automática de datos
console.log(num2 - num);


/* ---------------------Método Number
Convierte cadenas o booleanos a números
*/
let num3s = "56"; //cadena de texto
let num3 = Number(num3s); //número
//console.log(num3);
let boolaNumber = Number(true);
//console.log(boolaNumber); //1


/* ---------------------Método String 
Convierte números o booleanos a cadenas
*/
let num4 = String(4.3);
//console.log(num4);
//console.log(typeof(num4));

let num5 = String(true);
//console.log(typeof(num5));

let num6 = String(0);
//console.log(typeof num5);


/* --------------------Método Boolean 
Convierte números y cadenas a booleanos
0, "", null, undefined, NaN - dan false - faulty values (valores que tienden a dar falso)
Todos los demás números los convierte a true
*/
let num7 = Boolean(0);
console.log("0 ",num7);
let num8 = Boolean (-1);
console.log(num8);
let cadena = Boolean ("");
console.log(cadena);
let num9 = Boolean(NaN);
console.log(num9);
let num10 = Boolean(null);
console.log(num10);


