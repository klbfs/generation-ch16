'use strict';

function miFuncion(a,b){
    return (a+b)
};

let resultado = miFuncion(1,2); //una variable puede ser obj
//un obj tiene acciones (funciones)
//console.log("El resultado es " + resultado);


/*-------------------Función expresión o anónima---------------- */
/*variable = función sin nombre
*/
let suma = function (a,b){
    return (a+b)
};
let res = suma(1,2);
//console.log("Resultado es: " + res);



//resta
let fResta = function (a,b){
    return (a-b)
};
let resResta = fResta(10,2);
console.log("La resta es: ", resResta);


//producto
let fProducto = function (a,b){
    return (a*b)
}
let resProducto = fProducto(1,2);
console.log("El producto es: " + resProducto);


//cociente
let fCociente = function (a,b){
    return (a/b)
}
let resCociente = fCociente(10,2);
console.log("El cociente es: " + resCociente);



/*------------------------------Función autollamda o Self Invoking------------ */
/*Es una función única, no es reutilizable 
*/

(function(a,b){
    console.log("Resultado suma autollamada: " + (a+b));
}
)(3,4)//invocación


