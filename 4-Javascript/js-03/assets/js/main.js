/*--------------Bucles------------------
Estructura que nos permite repetir código x veces
*/

//Tipos
/*a- Ciclo for: Es un ciclo controlado
trabaja con i,j,k,l

sintaxis:
for (let i = inicio)
*/
let suma = 0;
let veces = 0;
for (let i=0; i<10; i++ ) {
    console.log("El valor de i es: " + i);
    suma += i;
    veces += 1;
    
};
console.log(suma);
console.log(veces);

/* b- Ciclo while: Es un ciclo no controlado 
hasta que el usuario no haga algo, se sigue ejecutando
forzas a que se cumpla algo y si no no se parará
*/
/*let inp = prompt("numero mayor a cero");
while(inp < 0){
    inp = prompt("por favor numero mayor a cero");
    

}*/

let saludo;
while (saludo!="Hola") {
    saludo = prompt("Saludame");
}