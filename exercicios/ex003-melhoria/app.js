/*
    Objetivo:     Criação de sistema para cálculo de números pares ou ímpares
    Autor:        Vinícius Santos Oliveira
    Data Criação: 11/08/2022
    Versão:       1.0
*/

console.log('Calculadora de Par e Ímpar aprimorada\n')

const { parImpar } = require('./modules/parImpar.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite um número inicial: (0 a 500)', function(valor1) {
    let numeroInicial = valor1
    
    entradaDados.question('Digite um número final: (100 até 1000)', function(valor2) {
        let numeroFinal = valor2
        
        entradaDados.question('Escolha uma opão de exibição: \nPares \nÍmpares \nAmbos\n', function(escolha) {
            let opcao = escolha

            parImpar(numeroInicial, numeroFinal, opcao)
        })
    })
})