//IMPLEMENTACIÓN #2

//Clase persona:parte abstracta
//Definir objeto: con un constructor

/*
class Persona0{
    let nombre;
    let apellido;
    //pasamos los atributos
    constructor (parametro, apellido){
        this.nombre = parametro;
    }
}*/



//--1) Hacemos la plantilla/parte abstracta:
class Persona{


    //definimos sus atributos encapsulados privados en constructor
    constructor (nombre, apellido){
        this.nombre = nombre;
        //this.nombre: es atributo de clase-este atributo nombre no está declarado en clase pero de forma abstracta sí
        //          = nombre es el parámetro de constructor que trae el valor
        this.apellido = apellido;
    }

    //métodos para acceder a atributos privados
    get nombreG(){
        return this.nombre; //con _  se vuelve público el atributo

    }
    set nombreS(nombre){
        this.nombre = nombre;
    }



}

/*
por fuera de la clase, cuando se llama al constructor, se va a ingresar el valor que va a llegar hasta el atributo this.nombre
 
*/

//----2) concretizamos la instancia

//definimos primer objeto 'persona1'
let persona1 = new Persona("Andre", "Zuckerman");
console.log(persona1);//dice parte abstracta + definida

persona1.nombreS = "Hugo Sanchez";
console.log(persona1.nombreG);



//definimos primer objeto 'persona1' siendo instancias de Persona
let persona2 = new Persona("Buzz", "Wu");
console.log(persona2);
