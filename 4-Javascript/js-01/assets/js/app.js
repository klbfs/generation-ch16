//Js de forma estricta
'use strict';

/* Tipos de variables */
let a; //variable local
const B = 0; //variable fija y local
const PI = 3.141516;
var c; //variable global


/*scope - contexto
espacio en el que vive la variable 
*/

/*Tipos de datos*/
let number = 2; //number
let yes = true; //boolean
let name = "Karen"; //string
let varund; //undefined
/*console.log(varund + 5); NaN */ 
let nulo = null; //null

/* Plantillas literales o Template strings o Literal strings
3 formas de crear strings:
a) "Hola"
b) 'Hola'
c) `Hola` -> permite interpolaciones con $. 
Permite introducir código dentro de la misma cadena de texto

*/
console.log(`Esta es una cadena de ${5+4}`);
console.log("Esta es una cadena de ${5+4}");


const arr1 = [1,2]; //arreglo
