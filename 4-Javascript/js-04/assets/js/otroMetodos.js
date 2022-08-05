//-------------------------------sort()
//permite ordenar los elementos de un arreglo- pref. 
//en caracteres no en números
//toma en cuenta la lista de caracteres unicode


const arr = ["X", "A", "H", "a", "W", "b"];
arr.sort();
console.log(arr);
console.log("Sort: "+ arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
arr2.sort();
console.log("Ej II Sort: "+arr2);

const arr3 = [5, 1231, 567, 1, 80]; //sólo acomoda según inicio de número
arr3.sort();
console.log(arr3);
//ordanamiento menor a mayor
arr3.sort((a,b) => a - b);
console.log("función bubble sort + sort: "+ arr3);
//ordenamiento mayor a menor
arr3.sort((a,b) => b - a);
console.log("función bubble sort + sort: "+ arr3);

//---------------------------------for each()
//ciclo que recorre en automático todo nuestro arreglo

const arrNumeros = [1, 4 ,6, 8, 10];
for (let i=0; i<arrNumeros.length-1; i++){
    arrNumeros[i]= arrNumeros[i]*2;
}
console.log(arrNumeros);

//'elemento' es cada valor dentro del arreglo
arrNumeros.forEach((elemento, index, arr) => arr[index]=arr[index]*3);
console.log(arrNumeros);






/*funciones
//función declarada - funciona el hoisting
sumar(2,2);

function sumar(a,b){
    return a+b;
}


//función expresada - no funciona el hoisting
const multiplicar = function(a,b){
    return a*b;
}
multiplicar(3,7);
//función flecha - como una función anónima (en python son funciones lamda)
const dividir = (a, b) => {
    return a/b;

}

console.log(dividir(4,9));

const dividir2 = (a, b) => a/b;

dividir2(4,9);
*/