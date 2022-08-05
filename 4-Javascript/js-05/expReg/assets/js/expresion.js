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


//------2. corchetes /[]/
let texto02 = "Le marqué anoche";
let buscar02 = /[eo]/;
console.log(buscar02.test(texto02));