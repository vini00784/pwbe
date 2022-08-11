/*
    Objetivo:     Criação de sistema para cálculo de números pares ou ímpares
    Autor:        Vinícius Santos Oliveira
    Data Criação: 11/08/2022
    Versão:       1.0
*/

console.log('Calculadora de Par e Ímpar\n')

const { parImpar } = require('./modules/parimpar.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite um número inicial: ', function(valor1) {
    let numeroInicial = valor1

    entradaDados.question('Digite um número final: ', function(valor2) {
        let numeroFinal = valor2

        parImpar(numeroInicial, numeroFinal)
    })
})