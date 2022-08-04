/*
    Objetivo:     Criação de funções para cálculo de tabuada
    Autor:        Vinícius Santos Oliveira
    Data Criação: 04/08/2022
    Versão:       1.0
*/


const calcularTabuada = function(numero1) {
    let tabuada = numero1
    let resultado
    let cont = 0
    
    /* While */
    console.log('\nLaço While:')
    while(cont <= 10) {
        resultado = tabuada * cont
        console.log(tabuada + ' X ' + cont + ' = ' + resultado)
        // cont = cont + 1
        // cont += 1
        cont ++
    }

    console.log('\n----------------------------------------------------')

    /* For */
    console.log('\nLaço For')
    for(cont = 0; cont <= 10; cont ++) {
        resultado = tabuada * cont
        console.log(tabuada + ' X ' + cont + ' = ' + resultado)
    }
    
}

module.exports = {
    calcularTabuada
}