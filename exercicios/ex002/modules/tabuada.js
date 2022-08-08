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
    let erro = false

    if(numero1 == '' || numero2  == ''|| contador1 == '' || contador2  == '') {
        console.log('\nERRO! Preencha todos os campos!\n')
        erro = true
    } else if(numero1 < 2 || numero1  > 100 || numero2 < 2 || numero2  > 100) {
        console.log('\nERRO! Serão válidos apenas números entre 2 e 100\n')
        erro = true
    } else if(contador1 < 1 || contador1 > 50 || contador2 < 1 || contador2 > 50) {
        console.log('\nERRO! O contador deve estar entre 1 e 50!\n')
        erro = true
    } else {
        while(true) {
            while(numero1 <= numero2) {
                for(contadorInicial; contadorInicial <= contadorFinal; contadorInicial++) {
                    resultado = numero1 * contadorInicial
                    console.log(`\n${numero1} X ${contadorInicial} = ${resultado}`)
                }

            }
        }
    }




    if(erro) {
        return false
    } else {
        return resultado.toFixed(1)
    }
}




module.exports = {
    calcularTabuada
}