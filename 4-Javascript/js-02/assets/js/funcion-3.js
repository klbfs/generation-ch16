/*----------------------Funciones como objetos----------------- */

function miFuncion(a,b){
    let res = 0; //atributo de la función
    res = a * b; //acción
    return (res);
};
//a y b como son parámetros, también son atributos
//en total son 3 atributos en la función

console.log(typeof miFuncion);

//¿Cómo vemos a la función como objeto?
let miFuncionTexto = (miFuncion(1,2)).toString();
console.log(miFuncionTexto); //por tanto es obj