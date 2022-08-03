
/*Caso 1: output en función*/
function miSuma(a,b){
    let resultado = (a + b);    //tiene ámbito/scope local
                                //su acción es sumar '+'
                                //encapsulamos con ()
    console.log(resultado);
}

miSuma(4,1);


/*Caso 2: no se declara variable ni dentro o fuera de función */
function miSuma2(a,b){

    console.log(`La suma es ${(a+b)}`);
}

miSuma2(4,1);


/*Caso 3: variable declarada en función y retornada*/
function funcionProducto(a,b){
    let producto = (a*b);

    return producto;
}
console.log(`El producto fue de: ${funcionProducto(9,2)}`);



/*Caso 4: variable declarada fuera de función*/
function miResta(a,b){
    return (a - b);
}
let res = miResta(10,6);
console.log(`La resta es: ${res}`);


/*arroje función nombre completo con 3 variables */
function nombre(){
    primero = String(prompt("Nombre: "));
    paterno = String(prompt("Paterno: "));
    materno = String(prompt("Materno: "));

    return (`Mi nombre es: ` + primero + paterno + materno);
}

//console.log(nombre());


/*división*/

function division(a,b){
    
    return (a/b);
}

console.log(division(10,5));