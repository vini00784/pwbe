/*
    Objetivo:     Criação de funções para cálculo de números pares ou ímpares
    Autor:        Vinícius Santos Oliveira
    Data Criação: 11/08/2022
    Versão:       1.0
*/

const parImpar = function(valor1, valor2, escolha) {
    let numeroInicial = parseFloat(valor1)
    let numeroFinal = parseFloat(valor2)
    let opcao = escolha.toUpperCase()
    let numerosPares = []
    let numerosImpares = []

    if (numeroInicial == ''|| numeroFinal == ''|| opcao == '') {
        console.log('ERRO! Preencha todos os campos corretamente!')
    } else if(numeroInicial < 0 || numeroInicial > 500) {
        console.log('\nERRO! O número inicial deve estar entre 0 e 500!')
    } else if(numeroFinal < 100 || numeroFinal > 1000) {
        console.log('\nERRO! O número final deve estar entre 100 e 1000!')
    } else if(numeroInicial > numeroFinal) {
        console.log('\nERRO! O número inicial deve ser MENOR do que o final!')
    } else if(numeroInicial == numeroFinal) {
        console.log('\nERRO! Os números não podem ser iguais!')
    } else {
        for(let numero = numeroInicial; numero <= numeroFinal; numero++) {
            if(numero % 2 == 0) {
                numerosPares.push(numero)
            } else {
                numerosImpares.push(numero)
            }
        }

        if(opcao == 'PARES') {
            console.log('\n*** NÚMEROS PARES: ***')
            for(let contador = 0; contador < numerosPares.length; contador++) {
                console.log(`\t${numerosPares[contador]}`)
            }
            console.log(`Quantidade de pares: ${numerosPares.length}\n`)
            process.exit(1)
        } else if(opcao == 'ÍMPARES') {
            console.log('\n*** NÚMEROS ÍMPARES: ***')
            for(let contador = 0; contador < numerosImpares.length; contador++) {
                console.log(`\t${numerosImpares[contador]}`)
            }
            console.log(`Quantidade de pares: ${numerosImpares.length}\n`)
            process.exit(1)
        } else if(opcao == 'AMBOS') {
            console.log('\n*** NÚMEROS PARES: ***')
            for(let contador = 0; contador < numerosPares.length; contador++) {
                console.log(`\t${numerosPares[contador]}`)
            }
            console.log(`Quantidade de pares: ${numerosPares.length}\n`)

            console.log('\n*** NÚMEROS ÍMPARES: ***')
            for(let contador = 0; contador < numerosImpares.length; contador++) {
                console.log(`\t${numerosImpares[contador]}`)
            }
            console.log(`Quantidade de ímpares: ${numerosImpares.length}\n`)
            process.exit(1)
        }
    }
}

module.exports = {
    parImpar
}