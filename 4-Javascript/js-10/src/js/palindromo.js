const palindromo = (palabra) => {
    
    if (typeof palabra === 'number'){
        return "No es una palabra";
    }

    let palabraInvertida = palabra.split("").reverse().join("");
 
    //Operador ternario
    //(condición) ? verdadero : falso
    //(condicion) ? if : else
    return palabra === palabraInvertida ? 'Es un palindromo' : 'No es un palindromo';
}

//console.log(palindromo(1));
//console.log(palindromo("ojo"));


//.split("") --> cada letra pasa a un elementro de array
//.join("") --> de arreglo a una palabra


module.exports = palindromo;