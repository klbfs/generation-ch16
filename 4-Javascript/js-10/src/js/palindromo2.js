const palindromo2 = (palabra) => {
    let palabraSE = palabra.split(" ").join("").split("");
    let palabraSEInvertida = palabraSE.reverse().join("");

    //Operador ternario
    //(condición) ? verdadero : falso
    //(condicion) ? if : else
    return palabra.split(" ").join("") === palabraSEInvertida ? 'Es un palindromo' : 'No es un palindromo';
}

console.log(palindromo2("anita lava la tina"));