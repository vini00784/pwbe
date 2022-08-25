/*
    Objetivo:     Criação de funções para cálculo de números pares ou ímpares
    Autor:        Vinícius Santos Oliveira
    Data Criação: 25/08/2022
    Versão:       1.0
*/

const evenNumbers = function(number1, number2) {
    let startNumber = parseFloat(number1)
    let finalNumber = parseFloat(number2)
    let evenNumbers = []

    for (let numero = startNumber; numero <= finalNumber; numero++) {
        if(numero % 2 == 0) {
             evenNumbers.push(numero)
        }
    }

    return evenNumbers
}


const oddNumbers = function(number1, number2) {
    let startNumber = parseFloat(number1)
    let finalNumber = parseFloat(number2)
    let oddNumbers = []

    
    for (let numero = startNumber; numero <= finalNumber; numero++) {
        if(numero % 2 != 0) {
            oddNumbers.push(numero)
        }
    }

    return oddNumbers
}

const evenAndOdd = function(number1, number2) {
    let startNumber = parseFloat(number1)
    let finalNumber = parseFloat(number2)
    let evenAndOdd = []
    
    evenAndOdd.push(evenNumbers(startNumber, finalNumber))
    evenAndOdd.push(oddNumbers(startNumber, finalNumber))

    return evenAndOdd
}

const validate = function(number1, number2, choice) {
    let startNumber = parseFloat(number1)
    let finalNumber = parseFloat(number2)
    let option = choice

    if (startNumber == '' || finalNumber == '' || option == '') {
        console.log('\nERRO! Preencha todos os campos corretamente!')
        process.exit(1)
    } else if(startNumber < 0 || startNumber > 500) {
        console.log('\nERRO! O número inicial deve estar entre 0 e 500!')
        process.exit(1)
    } else if(finalNumber < 100 || finalNumber > 1000) {
        console.log('\nERRO! O número inicial deve estar entre 100 e 1000!')
        process.exit(1)
    } else if(startNumber > finalNumber) {
        console.log('\nERRO! O número inicial deve ser MENOR do que o final!')
        process.exit(1)
    } else if (startNumber == finalNumber) {
        console.log('\nERRO! Os números não podem ser iguais!')
        process.exit(1)
    }
}

module.exports = {
    evenNumbers,
    oddNumbers,
    evenAndOdd,
    validate
}
