/*------------------------------Arreglos */
/*
¿Qué son?
Colección de elementos
Cada elemento ocupa una posición
Esa posición se conoce como índice y comienza a partir de 0

Los arreglos son objetos porqoue tiene propiedades y métodos
+Las propiedades son lo que describen el objeto
+Los métodos son las acciones que puede realizar un objeto
*/

let arr = [1,2,3,4];
console.log(arr);

//para acceder a posiciones - índice
console.log(arr[3]);

//para agregar elementos
arr[4] = 190;
arr[5] = "Hola";
console.log("Agregando elementos.. ", arr);


//*************************************Métodos

//Para agregar elementos:
//a. push ---agregando valor al final

const arreglo = ["adiós"];
arreglo.push("tschuss", "bis bald", 1, 2);
console.log("Método Push", arreglo);
//console.log(arreglo[2]);

let num = 500;
arreglo.push(num);
console.log("Agregando variable con push ", arreglo);

//b. unshift() --agregar valor al inicio y desplaza los demás

arreglo.unshift("A");
console.log("Método unshift ", arreglo);

//Para quitar elementos:
//c. pop() --quitar elemento de final

arreglo.pop();
console.log("Método pop ", arreglo);

//d. shift()

let vShift = arreglo.shift();
console.log("Método shift ", arreglo);

//e. splice() 
//permite quitar elemento de cualquier posición de nuestro arreglo. 
//permite reemplazar un elemento
//permite insertar un elemento en una posicion en especifico
//Tiene 3 posiciones:
//primera posición: posición a partir de donde se hacen los cambios
//segunda posición: cantidad de elementos a quitar.0 para no afectar ni quitar. Otro número para indicar # de elementos a modificar
//tercera posición: valor 

    //--------->>FUNCIÓN 1: REMOVER ELEMENTOS
arreglo.splice(1,1) //quitando '1' elemento a partir de la posición 1
//arreglo.splice(1,2) //se quitan 2 elementos a partir de la posición 1 
console.log("Método splice 1: ", arreglo);

    //---------->>FUNCIÓN 2: REEMPLAZA
arreglo.splice(1, 1, "paranga"); //a partir de pos 1, quito un elemento y pongo paranga

/*arreglo.splice(1, 2, "paranga"); a partir de pos 1, quito dos elementos y reemplazo con paranga*/

console.log("Función reemplaza: ",arreglo);

    //---------->>FUNCIÓN 3: AGREGAR ELEMENTO EN UNA POSICION sin eleiminar nada
arreglo.splice(1, 0, "holis", "crayolis"); //en posición 1, se agrega holis y crayolis. con '0' se indica que no quiero que quite nada
console.log("Funcion agregar", arreglo);




//***********************Métodos que no modifican el arreglo original.
/*
Métodos que no modifican el arreglo original 
Hacen una copia, y modifican esa copia

*/

//1. slice()
//Permite cortar una parte del arreglo
//primera posición: pos a partir de la cual se hace el corte - 1 -->intervalo abierto
//segunda posición: posición hasta la cual vamos a terminar 
let dato3 = arreglo.slice(1,3);
console.log("slice: ", arreglo); //el arreglo se mantiene
console.log("slice-parte quitada ", dato3);


//filer
//map 
//sort
//for each