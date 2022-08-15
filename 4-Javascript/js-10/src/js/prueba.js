/* Para importar siempre al inicio del documento*/
const suma = require('./suma'); //indicamos ruta y lo asignamos a una variable con mismo nombre que función importada
const resta = require('./resta');
/*Forma 2 de importar: import resta from './resta.js */

console.log("Prueba de función suma: ",suma(3,3));
console.log("Prueba de función resta: ",resta(800,3));
