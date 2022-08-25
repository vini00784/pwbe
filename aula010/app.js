/*
    Objetivo:     V
    Autor:        Vinícius Santos Oliveira
    Data Criação: 22/08/2022
    Versão:       1.0
*/

// Define uma variável do tipo array
const listaTimes = ['Vasco', 'Corinthians', 'Guarani', 'XV de Piracicaba']
const listaProdutos = ['Teclado', 'Branco', 50.80, true]
const listaAlunos = ['Carol', 'Milena', 'Ana', 'Heitor', 'Japa', 'Larissa']
const listaDisciplinas = ['Programação Back-End', 'Programação Front-End', 'Banco de Dados', 'Desenvolvimento Mobile']

// Exibindo os dados armazenados no Array
console.log(listaTimes)
console.log('\n')
console.log(listaProdutos)
console.log('\n')

// Verificando tipo de dados do Array
console.log(typeof(listaProdutos))
console.log('\n')

// Verificando o tipo de dados de um elemento específico do Array
console.log(typeof(listaProdutos[0]))
console.log('\n')

// Exibindo separadamente os valores do Array, de acordo com a necessidade
console.log(`O produto é: ${listaProdutos[0]}`)
console.log(`Sua cor é: ${listaProdutos[1]}`)

console.log('\n')

// Exibe a quantidade de elementos presentes dentro do Array
console.log(`A quantidade de times nessa lista é: ${listaTimes.length}`)

console.log('\n')

// Extraindo os valores do Array utilizando estruturas de repetição
let qtde = listaAlunos.length
let cont = 0

// Exemplo utilizando o While
console.log('Exemplo com While: ')
while(cont < qtde) {
    console.log(`O aluno da turma DS2M é: ${listaAlunos[cont]}`)
    cont++
}

console.log('\n')

// Exemplo utilizando o For
console.log('Exemplo com For: ')
for(let cont = 0; cont < qtde; cont++) {
    console.log(`O aluno da turma DS2M é: ${listaAlunos[cont]}`)
}

console.log('\n')

//Exemplo utilizando o ForEach
console.log('Exemplo com ForEach: ')
listaAlunos.forEach(function(item) {
    console.log(`O aluno da turma DS2M é: ${item}`)
})

// Adicionando novos elementos *NO FINAL* do Array
listaAlunos.push('Arthur', 'Vinícius')
listaAlunos.push('Leonardo')
console.log('\n')

// Remove o último elemento do Array
listaAlunos.pop()

// Adicionando novos elementos *NO INÍCIO* do Array
listaAlunos.unshift('Enzo')

// Removendo elememento *DO INÍCIO* do Array
listaAlunos.shift()

console.log(listaAlunos)

console.log('\n')

// Pesquisando valores em um Array e retornando seu índice
    // Se retornar -1, quer dizer que o item não foi encontrado      
let indice = listaAlunos.indexOf('Japa')
console.log(indice)

// Cria uma cópia do Array em uma nova variável 
const listaNovosAlunos = listaAlunos.slice()
console.log(listaNovosAlunos)

// Removendo elementos a partir de um Índice
    // Remove apenas o item escolhido
listaAlunos.splice(indice, 1)
    // Remove todos os itens a partir do escolhido
listaAlunos.splice(indice)
    // Remove todos os itens a partir do primeiro até o item escolhido
listaAlunos.splice(0, indice+1)

console.log(listaAlunos)

// Adicionando um Array de itens dentro de outro Array
listaNovosAlunos.push(listaDisciplinas)

//Lista o Array principal e todos os sub arrays existentes
// console/log(listaNovosAlunos)

// O primeiro colchete dessa linha se refere ao Array de disciplinas que foi inserido dentro do outro Array (ou seja, o índice 8 da Array "principal" foi reservado a outra Array que foi inserida dentro), já o segundo serve para selecionar itens dentro do "sub-Array".
console.log(listaNovosAlunos[8][0])

// Seguindo o mesmo raciocínio, a linha seguinte busca o índice de um elemento que está dentro da sub Array
console.log(listaNovosAlunos[8].indexOf('Banco de Dados'))











console.log('----------------------------------------------------------')

// Trabalhando com JSON

const listaContatos = [
    {
        nome: 'José da Silva',
        telefone: '11  9945646455',
        email: 'jose@gmail.com',
        carros: [
            {
                placa: 'ABC-1234',
                modelo: 'Corsa',
                cor: 'Prata'
            }, 
            {
                placa: 'DEF-5678',
                modelo: 'Fusca',
                cor: 'Azul'
            }
        ]
    },
    {
        nome: 'Maria Bahia Santos',
        telefone: '11 938456198',
        email: 'maria@gmail.com'
    }
]

console.log(listaContatos)

console.log(`Nome: ${listaContatos.nome}`)
console.log(`O email cadastrado foi: ${listaContatos.email}`)

// Adiciona um novo elemento no JSON em execução
listaContatos.celular = '944400997'

console.log(listaContatos)

// Remove um elemento do JSON em execução
delete(listaContatos.telefone)

console.log(listaContatos[1].telefone)

console.log(listaContatos[0].carros[0].placa)

