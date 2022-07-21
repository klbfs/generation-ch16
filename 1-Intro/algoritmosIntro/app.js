//alert("Hola Mundo <3"); -- Comentario de 1
/*--Comentario de bloque 
  
*/
//_________________________VARIABLES________________________
let miVariable = "Karen";

//miVariable = 25; 'let' permite cambiar valor

const apellido = "Benitez";

console.log("Hola", miVariable, apellido);

//----Tipos de datos primitivos que maneja Javascript

//1.- String para cadena de texto
//"texto"   'texto'  `texto`

let variableCadena = "texto más texto 35";
console.log(variableCadena);

//2.- Number para numero
// 12345

let number = 499999;
number = number + 1;
console.log(number);

//concatenación
//definición: unir dos cadenas de texto
//o unir texto y número
//sólo ocurre con signo de +

let a = 1;
let b = "1";
console.log(a + b);

//3.- Boolean
//True o False

let verdadero = true;
let falso = false;
console.log(verdadero, falso);

//4.- Null - nulo, un valor vacío

let nulo = null;
console.log(nulo);
console.log(nulo + 1);
//5.- Undefined - indefinido - ausencia completa
//de valor. Es un estado
//variable declarada pero sin asignación
//de valor, esa varieable es undefined
let variable;
console.log(variable);
//aparta el espacio en memoria, pero no tiene
//dirección asignada
console.log(variable + 1); //da NaN

//________________________Operador typeof 
//sintaxis: typeof(num)
//o typeof num

let num1 = 456;
console.log(typeof num1);
let booll = false;
console.log(typeof booll);
console.log(typeof "Hola");
console.log(typeof(123));
console.log(typeof null);
console.log(typeof {});

let nombre = "Al";
console.log("Hola", nombre);
console.log("Mi nombre es " + nombre);


//2 maneras para concatenar:
//"Hola", variable
//"Hola"+variable


let miNombre = "Karen";
const numeroFavorito = 3;
let mascota = "Si";

console.log("Hola, mi nombre es", miNombre);
console.log("Mi número favorito es:", numeroFavorito);
console.log("¿Tengo mascotas?", mascota);

console.log("Hola, mi nombre es", miNombre,"\nMi número favorito es:", numeroFavorito,"\n¿Mascotas?", mascota);
