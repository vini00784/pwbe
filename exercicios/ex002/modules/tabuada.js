/*
    Objetivo:     Criação de funções para cálculo de tabuada
    Autor:        Vinícius Santos Oliveira
    Data Criação: 08/08/2022
    Versão:       1.0
*/

const calcularTabuada = function(valorInicial, valorFinal, contador1, contador2) {
    let numero1 = valorInicial
    let numero2 = valorFinal
    let contadorInicial = contador1
    let contadorFinal = contador2
    let resultado

    if(isNaN(numero1) || isNaN(numero2) || isNaN(contador1) || isNaN(contador2)) {
        console.log('\nERRO! Preencha todos os campos!\n')
    } else if(numero1 < 2 || numero1  > 100 || numero2 < 2 || numero2  > 100) {
        console.log('\nERRO! Serão válidos apenas números entre 2 e 100\n')
    } else if(contador1 < 1 || contador1 > 50 || contador2 < 1 || contador2 > 50) {
        console.log('\nERRO! O contador deve estar entre 1 e 50!\n')
    } else {
        for (let numero = numero1 ; numero <= numero2 ; numero++) {
            for (let contador = contadorInicial ; contador <= contadorFinal ; contador++) {
                console.log(`${numero} X ${contador} = ${(numero * contador)}`)
            }
            console.log('\n')
        }
        process.exit(1)
    }

    // for(numero1; numero1 <= numero2; numero1++) {
    //     for(contadorInicial; contadorInicial <= contadorFinal; contadorInicial++) {
    //         resultado = numero1 * contadorInicial
    //         console.log(numero1);
    //         console.log(`${numero1} X ${contadorInicial} = ${resultado}`)
    //     }
    //     numero1++
    // }
}

module.exports = {
    calcularTabuada
}