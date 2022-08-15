const palindromo = require('../js/palindromo');

//describe para abarcar más tests
describe('Pruebas de la función palindromo', () => {

    test('ojo debe ser palindromo',() => {
        let mensaje = "Es un palindromo";
        let palabra = "111";

        expect(palindromo(palabra)).toBe(mensaje);
    })

    test('no debe regresar "Es un palindromo al ingresar generation', () =>{
        let mensaje = "Es un palindromo";
        let palabra = "generation";

        expect(palindromo(palabra)).not.toBe(mensaje);
    })

    test('al ingresar un número debe regresar el mensaje', () =>{
        let mensaje = "No es una palabra";
        let valor = 3;

        expect(palindromo(valor)).toBe(mensaje);
    })


});
