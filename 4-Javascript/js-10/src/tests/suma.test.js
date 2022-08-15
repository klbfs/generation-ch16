const suma = require('../js/suma');


//pedir un valor esperado
//comparar el resultado con el valor esperado

test('sumar 1 + 2 debe ser 3', () => {
    expect(suma(1,4)).toBe(5); 
    //expect para traer el resultado
    //método toBe de jest: hace la comparación/comprobación de lo de la izq con 
    //lo de la derecha

});



//operador 'not'
test('1 + 4 no debe ser 0', () =>{
    expect(suma(1,4)).not.toBe(0);
});
