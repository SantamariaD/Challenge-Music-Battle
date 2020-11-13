/*
Este código es un test unitario para la función enlistar. Para realizar el test se
instalo Jest 6.14.8.
La función enlistar retorna true si no existe problema en la lógica del código, de otra manera
retorna false. El test corrobora que la función devuelva true
*/

//INICIO TEST
const enlistar = require('./main');

describe('enlistar', () => {
    it('La función debe retornar TRUE', () => {
        expect(enlistar()).toBe(true);
    });
});
//FIN TEST