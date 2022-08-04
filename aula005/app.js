/*
    Objetivo:     Aplicar estruturas de repetição (While e For)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 04/08/2022
    Versão:       1.0
*/

console.log("Calcular uma Tabuada Simples\n")

const { tabuada, calcularTabuada } = require('./modulos/tabuada.js')

// Import da biblioteca da entrada de dados
var readline = require('readline')
const { exit, exitCode } = require('process')

// Instância do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite a tabuada a ser calculada: ', function(numero) {
    let tabuada = numero
    calcularTabuada(tabuada)
    entradaDados.close()
})