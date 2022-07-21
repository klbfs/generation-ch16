//alert("Hola");


//-------------->Matrices para valores numéricos
function Hola (){

    console.log("Hola Mundo");

}

//Hola();


//Arreglos
//I. Declaración
//Declaración opc 1 ---[ , ,]
let num = [2,3,4];
//console.log(num);

//Declaración opc 2 ---new Array( , , )
let arr1 = new Array(1,2,3);
//console.log(arr1);



//II. Usar un arreglo

const arr = [1,2,3,4,5];
//console.log(arr);


//III. NOTACIÓN DE CORCHETES:
//A). Acceso a una posición: Notación de corchetes []
//console.log(arr[3]);
//B). Agregar valor 
arr[5] = 25;
arr[6] = 17;
//console.log("Agregando valores", arr);

//arr[7] = undefined

arr[8] = 9;
//console.log("Agregando valores no continuos:", arr);


//IV. Propiedades de los arreglos
//1.- Length
//una propiedad es la descripción de nuestro arreglo
//console.log("Length: ", arr.length);

//Métodos.
//acciones que puede realizar un arreglo

//1.- Push(): Agrega valor al final del arreglo
const frutas = ["Manzana", "Plátano"];
console.log(frutas.length);
frutas.push("Peras");
//console.log("Método push:", frutas);

let fruta = "Kiwi";
frutas.push(fruta);
//console.log("Método push:", frutas);

//2.- Pop(): Quita un elemento del final del arreglo
let elementoEliminado = frutas.pop();
//console.log("Método pop:", frutas);
//console.log("Elemento eliminado:", elementoEliminado);

//3.- Unshift(): Agrega uno o más elementos al inicio del array
//y devuelve la nueva longitud del array
let devolverUnshift = frutas.unshift("Uvas");
//console.log("Método unshift:", frutas);
//console.log("Variable devuelta por unshift (length):", devolverUnshift);

//4. Shift(): Elimina un elemento del inicio de un arreglo
let frutaEliminada = frutas.shift()
//console.log("Método shift:", frutas);
//console.log("Variable eliminada shift:", frutaEliminada);



/*Resolución ejercicio1
const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

personas.splice(1,1);
console.log("Remover a Dani con splice:", personas);

personas.splice(2,1);
console.log("Remover a Juan con splice", personas);

//personas.splice(1,1);
//console.log(personas)
//personas.unshift("Luis");
personas.unshift(personas.splice(1,1)[0]); //[0] porque regresa splice la variable eliminada en array
console.log(personas);


personas.push("Karen");
console.log(personas);

personas.push("Maria");
console.log(personas);

console.log(personas.indexOf("Maria"));
//en el caso de que haya dos valores iguales, indexOf te muestra
//la posición del primer elemento
--*/

/*
//Arreglos multidimensionales
const newArr = [1, 45, "Adiós", true, null, undefined, 
[30,31, 32], ["Azul", "Rojo", "Olivo"]];
console.log(newArr);

console.log(newArr[6][1]);
*/



//Objetos -->diccionarios en python
//estructura especial llamada objeto
//permite agregar PARES de elementos/valores
//key - valor
const arrPrueba = [1, 4];
let obj = {
    nombre : "Karen", 
    edad : 24,
    color : "ciruela", 
    hobby : ["badminton", "pintar"],
    arrPrueba : arrPrueba
};
console.log(obj.nombre);
console.log(obj.hobby [0]);


console.log(obj);