/*
    Objetivo:     Criação de funções para cálculo de números pares e ímpares
    Autor:        Vinícius Santos Oliveira
    Data Criação: 11/08/2022
    Versão:       1.0
*/

const parImpar = function(numero1, numero2) {
    let numeroInicial = numero1
    let numeroFinal = numero2

    if(numeroInicial == '' || numeroFinal == '') {
        console.log('\nERRO! Os campos devem ser corretamente preenchidos!')
    } else if(numeroInicial < 0 || numeroInicial > 500) {
        console.log('\nERRO! O número inicial deve estar entre 0 e 500!')
    } else if(numeroFinal < 100 || numeroFinal > 1000) {
        console.log('\nERRO! O número final deve estar entre 100 e 1000!')
    } else if(numeroInicial > numeroFinal) {
        console.log('\nERRO! O número inicial deve ser MENOR do que o final!')
    } else if(numeroInicial == numeroFinal) {
        console.log('\nERRO! Os números não podem ser iguais!')
    }
}

module.exports = {
    parImpar
}