//Comprobar que una variable NO es un objeto
let x = 10;
console.log(x.length); //undefined ->por tanto no es objeto

//Ejercicio con forma clásico: objeto persona con nombre, apellido, correo electrónico y edad
/*Definimos objeto forma #1 "Clásica"*/
let datos_literal = {
    nombre: "Karen",
    apellido: "Fuentes",
    correo: "dkfa@gmail.com",
    edad:50,
    nombreCompleto: function (){ //metodo
        return (this.nombre + ' ' + this.apellido) 
    },
    idioma:"es",

    get leng(){
        return this.idioma.toUpperCase();
    },
    set lang(parametro){
        this.idioma = parametro.toLowerCase();
        //no regresa nada :(, sólo modifica :)
    }

}
//this hace referencia al atributo del objeto

console.log(datos_literal.nombre);
console.log(datos_literal.nombreCompleto());
//--->agregando otro atributo
datos_literal.telefono = 49393049;
console.log(datos_literal);
//--->Recorrido de objeto
//a) 1# forma recorrer valores en atributos de objeto
console.log("recorrido #1");
for(propiedad in datos_literal){
    console.log(datos_literal[propiedad]);

}
//b) 2# de recorrer objeto con json: se transforma de obj a string
let personaString = JSON.stringify(datos_literal);
console.log("recorrdio #2", personaString);



//--->Métodos accesores
//a) Método GET: sólo retorna
console.log("Método GET: ",datos_literal.leng);

//b) Método SET: asignar valor-accedemos a atributos privados
datos_literal.lang = "EN";
console.log("Método SET: ",datos_literal.idioma); //ya se cambió a minúsculas




/*creando objeto forma #2 "Prototipos"..pero copiamos los mismos atributos*/

let personas_constructor = new Object();
personas_constructor.nombre = "Fiona"; 
//console.log(personas_constructor); 
//->Agregando nuevo atributo al objeto personas_constructor
personas_constructor.telefono = 555938485;
console.log(personas_constructor);



/* Métodos accesores */

//1. GET
