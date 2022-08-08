/*
    Objetivo:     Criar um sistema que gerencia cálculo de tabuada
    Autor:        Vinícius Santos Oliveira
    Data Criação: 08/08/2022
    Versão: 1.0
*/
console.log('\nCalculadora - TABUADA\n')

const { calcularTabuada } = require('./modules/tabuada.js')

const { read } = require('fs')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o primeiro valor a ser calculado: ', function(valor1) {
    let numero1 = parseFloat(valor1)

    entradaDados.question('Digite o segundo número a ser calculado: ', function(valor2) {
        let numero2 = parseFloat(valor2)

        entradaDados.question('Insira o contador inicial: ', function(valor3) {
            let contador1 = parseFloat(valor3)

            entradaDados.question('Insira o contador final: ', function(valor4) {
                let contador2 = parseFloat(valor4)

                calcularTabuada(numero1, numero2, contador1, contador2)
            })
        })
    })
})