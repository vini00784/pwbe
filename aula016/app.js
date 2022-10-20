/*
    Objetivo:     API responsável pela manipulação dos dados do Back-End
                  (GET, POST, PUT, DELETE)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 03/10/2022
    Versão:       1.0
    
    Anotações:

    Comandos a serem rodados (nessa sequência) além do express, cors e body-parser:
        O prisma é necessário para a manipulação do acesso ao Banco de Dados
            npm install prisma --save
            npx prisma
            npx prisma init
            npx install @prisma/client
                Eles preparam o ambiente de utilização do Prisma
                npx prisma migrate dev --> comando que faz uma ligação do prisma com o banco, é feito para testar se o prisma realmente consegue acessar o banco
                    É importante rodar esse comando no início do projeto para ver se está dando tudo certo
                    O sucesso da criação de uma tabela de teste mostra que a interação com o banco está acontecendo.
                        OBS.: Esse comando de teste limpa tudo o que tem no banco, por isso ele deve ser rodada NO INÍCIO DO PROJETO!!!
*/

// Import das bibliotecas
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Arquivo de mensagens padronizadas
const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require('./module/config.js')

// Import das Funções

const app = express()

// Configuração do cors para liberar o acesso à API
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methos', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    next()
})

// Criando um objeto que permite receber um JSONno body das requisições
const jsonParser = bodyParser.json()

/* 
    Rotas para CRUD de alunos
    Data: 10/10/2022
*/

// EndPoint para listagem de todos os alunos
app.get('/alunos', cors(), async (request, response) => {

    let statusCode
    let message

    // Import do arquivo controllerAluno
    const controllerAluno = require('./controller/controllerAluno.js')

    // Retorna todos os alunos existentes no banco de dados
    const studentsData = await controllerAluno.listAllStudents()

    // Validade se existe retorno de dados
    if(studentsData) {
        statusCode = 200
        message = studentsData
    } else {
        statusCode = 404
        message = MESSAGE_ERROR.NOT_FOUND_DB
    }

    // Retorna os dados da API

    // console.log(message)

    response.status(statusCode)
    response.json(message)

})

// EndPoint para inserir um novo aluno
app.post('/aluno', cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    headerContentType = request.headers['content-type'] // Nos traz o formato de dados da requisição

    // Validar se o ContentType é do tipo application/json
    if(headerContentType == 'application/json') {
        let bodyData = request.body

        // Realiza processo de conversão de dados para conseguir identificar um JSON vazio
        if(JSON.stringify(bodyData) != '{}') {
            // Import do arquivo da Controller de aluno
            const controllerAluno = require('./controller/controllerAluno.js')

            // Chama a função newStudent da controller e encaminha os dados do body
            const newStudent = await controllerAluno.newStudent(bodyData)

            statusCode = newStudent.status
            message = newStudent.message

        } else {
            statusCode = 400
            message = MESSAGE_ERROR.EMPTY_BODY
        }

    } else {
        statusCode = 415
        message = MESSAGE_ERROR.INCORRECT_CONTENT_TYPE
    }

    response.status(statusCode)
    response.json(message)
})

app.put('/updatealuno', cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    headerContentType = request.headers['content-type'] // Nos traz o formato de dados da requisição

    // Validar se o ContentType é do tipo application/json
    if(headerContentType == 'application/json') {
        let bodyData = request.body

        // Realiza processo de conversão de dados para conseguir identificar um JSON vazio
        if(JSON.stringify(bodyData) != '{}') {
            // Import do arquivo da Controller de aluno
            const controllerAluno = require('./controller/controllerAluno.js')

            // Chama a função newStudent da controller e encaminha os dados do body
            const updatedStudent = await controllerAluno.updateStudent(bodyData)

            statusCode = updatedStudent.status
            message = updatedStudent.message

        } else {
            statusCode = 400
            message = MESSAGE_ERROR.EMPTY_BODY
        }

    } else {
        statusCode = 415
        message = MESSAGE_ERROR.INCORRECT_CONTENT_TYPE
    }

    response.status(statusCode)
    response.json(message)
})

// Ativa o servidor para receber requisições http
app.listen(3030, () => {
    console.log('Server waiting for requests...');
})