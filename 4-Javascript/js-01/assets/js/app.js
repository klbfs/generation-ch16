//Js de forma estricta
'use strict';

/* -------------------Tipos de variables */
let a; //variable local
const B = 0; //variable fija y local
const PI = 3.141516;
var c; //variable global


/*scope - contexto
espacio en el que vive la variable 
*/

/*--------------------Tipos de datos*/
let number = 2; //number
let yes = true; //boolean
let nombre = 'Karen'; //string
let varund; //undefined
/*console.log(varund + 5); NaN */ 
let nulo = null; //null

/* --------------------Plantillas literales o Template strings o Literal strings
3 formas de crear strings:
a) "Hola"
b) 'Hola'
c) `Hola` -> permite interpolaciones con $. 
Permite introducir código dentro de la misma cadena de texto
Ejemplos:
console.log(`Esta es una cadena de ${5+4}`);
console.log("Esta es una cadena de ${5+4}");
//let presentación
console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);
console.log(`${<h1>Hola</h1>}`);*/



/* --------------------Arrays  o matriz o arreglo*/
let arr1 = [1, "A", null, undefined, [true, false]]; //arreglo
let arr2 = new Array(5);
//notación de corchetes
console.log(arr1[4][0]);

let valor = arr1.pop();
console.log(valor);


/* -------------------Objetos */
let obj = {nombre: "Karen", 
           edad: 24,
           hobbies: ["leer","ver toy story 1", "cycling"],
           auto: {
                  marca: "Volkswagen", modelo: "UWX", año: "2000"
           },
           saludar: 
                  function(){
                    return "Saludar";
                               
                  }

        
        };
obj.nombre = "Woody";
console.log(`Mi nombre es ${obj.nombre}`);
console.log(`Mi hobbie favorito es ${obj.hobbies[1]}`);
console.log(obj.auto.marca);
console.log(`La acción que realizo es: ${obj.saludar()}`);

let ar3 = [{nombre2: "Hola arreglo"}];
console.log(ar3[0].nombre2);




