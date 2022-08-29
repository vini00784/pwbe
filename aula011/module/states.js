/*
    Objetivo:     Obter uma lista de Estados
    Autor:        Vinícius Santos Oliveira
    Data Criação: 29/08/2022
    Versão:       1.0
*/

// Array que simula o resultado de uma API
var states = [
    {
        abbreviation: 'SP',
        name: 'São Paulo',
    },
    {
        abbreviation: 'RJ',
        name: 'Rio de Janeiro',
    }, 
    {
        abbreviation: 'AC',
        name: 'Acre',
    },
    {
        abbreviation: 'BA',
        name: 'Bahia'
    },
    {
        abbreviation: 'CE',
        name: 'Ceará',
    },
    {
        abbreviation: 'MG',
        name: 'Minas Gerais',
    },
    {
        abbreviation: 'GO',
        name: 'Goiás',
    },
    {
        abbreviation: 'SC',
        name: 'Santa Catarina',
    }
]

// Função que retorna todos os estados pela sigla
const getAbbreviation = function() {
    let abbreviationsList = []
    let error = true

    states.forEach(item => {
        abbreviationsList.push(item.abbreviation)
        error = false
    })

    if (error) {
        return false
    } else {
        return abbreviationsList
    }
}

// Função que retorna os dados de um estado com base na sigla
const getStateData = function(stateAbbreviation) {
    // Converte a chegada da String em maiúsculo
    let abbreviation = stateAbbreviation
    // Cria um objeto do tipo JSON
    let state = {}
    let error = true

    if(abbreviation != undefined) {
        // Tratamento para validação de entrada vazia e diferença de número de caracteres
        if(abbreviation != '' && abbreviation.length == 2) {
            states.forEach(item => {
                // Localiza um item no Array
                if(item.abbreviation.indexOf(abbreviation.toUpperCase()) == 0) {
                    // Criamos as chaves uf e description para enviar pelo JSON
                        // FU (Federative Unit) guarda a sigla do Estado
                        // Description guarda o nome do Estado
                    state.fu = item.abbreviation,
                    state.description = item.name
                    error = false
                }
            })
        }
    }

    if(error) {
        return false 
    } else {
        return state
    }
}

// console.table(getAbbreviation())
console.log(getStateData('sp'))