/*
    Objetivo:     Criar um sistema que gerencia cálculo de tabuada
    Autor:        Vinícius Santos Oliveira
    Data Criação: 08/08/2022
    Versão: 1.0
*/
console.log('Calculadora - TABUADA\n')

const { calcularTabuada } = require('./modules/tabuada.js')

const { read } = require('fs')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})