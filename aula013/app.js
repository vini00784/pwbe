/*
    Biblioteca necessárias para criação de API:
        * Express --> npm install express --save
            O Express é uma biblioteca para criar aplicações em Node em formato de API

        * Cors --> npm install cors --save
            O Cors é uma biblioteca para manipular as permissões do protocolo HTTP

        * Body-parser --> npm install body-parser --save
            O Body-parser é uma biblioteca que permite manipular o corpo do protocolo HTTP
*/

// Import da biblioteca do express para criar a API
const express = require('express')

// Import da biblioteca do cors para manipular as permissões do protocolo HTTP
const cors = require('cors')

// Import da biblioteca do body-parser que irá manipular corpo das requisições do protocolo HTTP
const bodyParser = require('body-parser')

// Import dos arrays/jsons de estados
const { getStateAbbreviation, getStateData } = require('./module/states.js')
const { getCidades } = require('./module/cidades.js')


// Cria um objeto chamado 'app' que será especialista nas funções do express
const app = express()

// Request - Para receber dados
// Response - Para devolver dados
app.use((request, response, next) => {
    // Permite especificar quais IP's que terão acesso à API (o símbolo '*' significa todos). 
    response.header('Access-Control-Allow-Origin', '*')

    // Permite especificar quais serão os métodos (verbos) que a API irá reconhecer
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Estabelece que as permissões acima serão representadas pelo cors
    app.use(cors())

    // Passa para o próximo elemento após ler os que estão prescritos aqui
    next()
})


// A partir de agora as funções serão feitas de maneira diferente, antes de criar de fato a function, terá a palavra 'async'
// O async diz para a minha função que ela é assíncrona, ou seja, a função não deve ser executada e em seguida encerrada, porque no caso de uma requisição a um banco de dados, a pesquisa ao banco pode demorar um certo tempo, e sem o async, algumas informações poderiam ser perdidas, já que as informações ainda estariam sendo processadas mas a função já estaria encerrada


// EndPoint: Listagem de estados
app.get('/estados', cors(), async function(request, response, next){

    // Recebe o array de estados
    let states = getStateAbbreviation()

    // Cria uma variável do tipo JSON
    let statesJSON = {}

    if(states) {
        // Criamos uma chave chamada 'abbreviation' para receber o array com as siglas do estados
        statesJSON.abbreviation = states
        response.status(200)
        response.json(statesJSON)
    } else{
        response.status(404)
        response.json('{message: "Nenhum item encontrado"}')
    }


})

// EndPoint: Busca informações de um estado pela sigla
app.get('/estado/:sigla', cors(), async function(request, response, next){
    // Recebe a sigla enviada por parâmetro no EndPoint
    let abbreviation = request.params.sigla

    // Chama a função que vai localizar o estado solicitado com base na sigla
    let state = getStateData(abbreviation)

    if(state) {
        response.status(200)
        response.json(state)
    } else {
        response.status(404)
    }
})

// EndPoint: Listagem de cidades
app.get('/cidades/:sigla', cors(), async function(request, response, next) {
    let abbreviation = request.params.sigla

    let cities = getCidades(abbreviation)

    if(cities) {
        response.status(200)
        response.json(cities)
    } else {
        response.status(404)
    }
})

// Para que os endPoints possam estar funcionando, precisamos obrigatoriamente finalizar a API com essa function, que representa o start da API
// É como o main do JAVA, mas no caso ele "starta" a API para iniciar a busca por requisições
app.listen(3030, function(){
    console.log('Servidor aguardando requisições...')
})
