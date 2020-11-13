/*
Este programa muestra los números del 1 al 100. Para múltiplos 3 se escribe
la palabra "Música", para múltiplos de cinco la palabra "TI" y para múltiplos
de 3 y 5 la palabra "Musical".
*/

//INICIO FUNCIÓN ENLISTAR
const enlistar = () => {
        for (let i = 1; i <= 100; i++) {
            switch (true) {
                case (i % 3 === 0 && i % 5 != 0):
                    console.log('Música');
                    break;
                case (i % 3 != 0 && i % 5 === 0):
                    console.log('TI');
                    break;
                case (i % 3 === 0 && i % 5 === 0):
                    console.log('Musical');
                    break;
                case (i % 3 != 0 && i % 5 != 0):
                    console.log(i);
                    break;
                default:
                    return false;
                    break;
            }
        }
        return true;
    }
    //INICIO FUNCIÓN ENLISTAR

//Llamada a función
enlistar();

//Exportar módulo
module.exports = enlistar;