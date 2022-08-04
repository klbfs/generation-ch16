/*----------------------Bucles */

/*                    1.- For Sintaxis
for (variable de control; conidción (mientras que cumpla entra), modificador de v. control) 
lee si se cumple la condición o no, para seguir
siempre poner modificador, sino es infinito
*/

//Ejemplo 1 i global para acceder fuera de for

for (var i=0; i<5;i++){
    console.log("Entró ", i);
}

for (let i=0; i<5;i=i+2){
    console.log("Entró ", i);
}

for (let i=5; i>0;i--){
    console.log("Entró ", i);
}

//console.log("ultimo valor de i-no entró", i); //6


//Ejemplo 2
/*no funcionará porque en 'i==5', sólo
Preguntará si i es igual a 5 pero i se inicializó
en 1*/
for (let j =1; j==5;j++){
    console.log("j",j);
}


//Ejemplo 3
let k;
let suma=0;

for (k=0; k<5; k++){
    suma = suma + k;
}

//console.log(suma);



//                          2.- while
//Ejemplo uno. Igual a for
let control = 0; //variable de control
while(control<5){ //condición
    console.log("while", control);
    control++; //modificador
    

}

//do ... while

let numero = 0;
do {
    console.log("Do while ",numero);
    numero++;
} while (numero<5);


let numero1 = 0;
do {
    console.log("Do while 2: ",numero1);
    numero++;
} while (numero1!=0);


