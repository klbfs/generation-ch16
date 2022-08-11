




//---------------------Tipo cadena
/*Declaración de tipo primitivo*/
let cadena = "Esto es una cadena";

/* Declaración de un objeto */

//Operador new: Llama a la clase a la cual le voy a asignar. Permite definir de manera clásica a los objetos
//La clase string define el tipo, y contiene propiedades y atributos que pueden ser instanciados para definir el objeto
//El constructor String define un objeto
//Toda clase se escribirá con una letra mayúscula al principio
let cadena_obj = new String("Esta es otra cadena");

console.log(cadena);
console.log(cadena_obj);


/* --------------------Tipo numérico */
let numero = 13; //tipo primitivo
let numero_obj = new Number(13); //tipo objeto, clase que define a numero es Number
console.log(numero);
console.log(numero_obj);


let lista_primos = ["2", "3", "5","7"];
let lista_primos_obj = new Array ("1", "4", "6","8", "9");

console.log(lista_primos); //ya es objeto
console.log(lista_primos_obj); //objeto


/*--------------------Tipo predefinido */
let tiempo = new Date(); //clase no estática
console.log(tiempo); 
console.log(Math); //clase estática

//Forma #1 de crear objetos: clásica
let obj_literal = {
    nombre: "Juan",
    edad: 50
}

//Forma #2 de crear objetos con paradigma POO
let obj_constructor = new Object();
obj_constructor.nombre = "Fiona"; //redefinimos otro objeto pero tiene los mismos atributos
console.log(obj_literal);
console.log(obj_constructor); //llamamos al objeto pero ahora con constructor


//Seguridad
obj_literal["nombre"];
let llave = "nombre"; //si ponemos en llave != de "nombre"no nos da el valor
console.log("con llave " + obj_literal[llave]);
