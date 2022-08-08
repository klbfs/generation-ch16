//Expresión regular que encuentre un patrón dentro de una línea de texto
let texto00 = "hoy parece que va a salir el sol";

//***********************Formas de búsqueda**********
//-----1. test normal
let buscar = /sol/;//declaramos expresión regular
//ahora buscar es objeto que tiene métodos
console.log(buscar.test(texto00)); //usamos metodo test


let texto01 = "La espero en el aeropuerto de LA";
let buscar01 = /LA/;
console.log(buscar01.test(texto01));


//------2. corchetes /[]/ ~ funciona como OR
let texto02 = "Le marqué anoche";
let buscar02 = /[eo]/;
console.log(buscar02.test(texto02));

let texto03 = "a = 37"; //true
let buscar03 = /[1-5]/; //para rango de número
console.log(buscar03.test(texto03));


//------usando clases de caracteres
let texto04 = "a123"; //
let buscar04 = /\w/; //contiene caracteres alfanuméricos
console.log(buscar04.test(texto04));


let texto05 = "Los números primos son 235 7 dentro de los 10 primeros números";
let buscar05 = /\d{2}/; //contiene dígitos de tres cifras?
console.log(buscar05.test(texto05));


let texto06 = "Usuario23@servidor22.com";
let buscar06 = /[\w]+@{1}[\w]+\.[a-z]{2,3}/
//contiene caracteres alfanuméricos + @ una vez +
//un punto + de dos a tres ocurrencias de caracteres de la a a z
console.log(buscar06.test(texto06));


