/*
    Objetivo:     Criação de sistema para cálculo de números pares ou ímpares
    Autor:        Vinícius Santos Oliveira
    Data Criação: 25/08/2022
    Versão:       1.0
*/

console.log('Cálculo de Par e Ímpar\n')

// Import das funções
const { evenNumbers } = require('./module/parImpar.js')
const { oddNumbers } = require('./module/parImpar.js')
const { evenAndOdd } = require('./module/parImpar.js')
const { validate } = require('./module/parImpar.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite um número inicial (0 a 500): ', function(number1) {
    let startNumber = number1

    entradaDados.question('Digite um número final (100 a 1000): ', function(number2) {
        let finalNumber = number2

        entradaDados.question('Escolha uma opção de exibição: \n\tPares \n\tÍmpares \n\tAmbos\n', function(choice) {
            let option = choice.toUpperCase()

            validate(startNumber, finalNumber, option)

            if(option == 'PARES') {
                let even = evenNumbers(startNumber, finalNumber)
                console.log('\n*** NÚMEROS PARES: ***')
                for(let count = 0; count < even.length; count++) {
                    console.log(`\t${even[count]}`)
                }
                console.log(`Quantidade de pares: ${even.length}\n`)
                process.exit(1)
            }

            if(option == 'ÍMPARES') {
                let odd = oddNumbers(startNumber, finalNumber)
                console.log('\n*** NÚMEROS ÍMPARES: ***')
                for (let count = 0; count < odd.length; count++) {
                    console.log(`\t${odd[count]}`)
                }
                console.log(`Quantidade de ímpares: ${odd.length}`)
                process.exit(1)
            }

            if(option == 'AMBOS') {
                let bothNumbers = evenAndOdd(startNumber, finalNumber)
                console.log('\n*** NÚMEROS (PARES E ÍMPARES): ***')
                console.log(bothNumbers)
            }
        }) 
    })
})