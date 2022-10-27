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

// Import do arquivo da Controller de aluno
const controllerAluno = require('./controller/controllerAluno.js')
const controllerCurso = require('./controller/controllerCurso.js')
const { json } = require('body-parser')

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

/* ENDPOINTS PARA OS ALUNOS */ 

// EndPoint para listagem de todos os alunos
app.get('/v1/alunos', cors(), async (request, response) => {

    let statusCode
    let message

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
app.post('/v1/aluno', cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    headerContentType = request.headers['content-type'] // Nos traz o formato de dados da requisição

    // Validar se o ContentType é do tipo application/json
    if(headerContentType == 'application/json') {
        let bodyData = request.body

        // Realiza processo de conversão de dados para conseguir identificar um JSON vazio
        if(JSON.stringify(bodyData) != '{}') {

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

// Endpoint para atualizar um aluno
app.put('/v1/aluno/:studentId', cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    headerContentType = request.headers['content-type'] // Nos traz o formato de dados da requisição

    // Validar se o ContentType é do tipo application/json
    if(headerContentType == 'application/json') {
        // Recebe o corpo da mensagem e seus conteúdo
        let bodyData = request.body

        // Realiza processo de conversão de dados para conseguir identificar um JSON vazio
        if(JSON.stringify(bodyData) != '{}') {
            // Recebe o ID enviado através da URL
            let id = request.params.studentId

            // Validação do ID
            if(id != '' && id != undefined) {
                // Add o ID que chegou no corpo da requisição
                bodyData.id = id
    
                // Chama a função updateStudent da controller e encaminha os dados do body
                const updatedStudent = await controllerAluno.updateStudent(bodyData)
    
                statusCode = updatedStudent.status
                message = updatedStudent.message
            } else {
                statusCode = '400'
                message = MESSAGE_ERROR.REQUIRED_ID
            }

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

//Endpoint para deletar um aluno
app.delete('/v1/aluno/:studentId', cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
        
    // Recebe o ID enviado através da URL
    let id = request.params.studentId

    // Validação do ID
    if(id != '' && id != undefined) {
    
        // Chama a função deleteStudent da controller e exclui o dado informado pelo ID
        const deletedStudent = await controllerAluno.deleteStudent(id)
    
        statusCode = deletedStudent.status
        message = deletedStudent.message
    } else {
        statusCode = '400'
        message = MESSAGE_ERROR.REQUIRED_ID
    }

    response.status(statusCode)
    response.json(message)
})

// Endpoint para buscar um aluno pelo ID
app.get('/v1/aluno/:studentId', cors(), async (request, response) => {
    let statusCode
    let message
    let id = request.params.studentId

    if(id != '' && id != undefined) {
        const studentData = await controllerAluno.searchStudentById(id)
    
        if(studentData) {
            statusCode = 200
            message = studentData
        } else {
            statusCode = 404
            message = MESSAGE_ERROR.NOT_FOUND_DB
        }
    } else {
        statusCode = 400
        message = MESSAGE_ERROR.REQUIRED_ID
    }

    response.status(statusCode)
    response.json(message)

})

/* ENDPOINTS PARA OS ALUNOS */ 

/***************************************************************************/

/* ENDPOINTS PARA OS CURSOS */

app.get('/v1/cursos', cors(), async (request, response) => {
    let statusCode
    let message

    const coursesData = await controllerCurso.listAllCourses()

    if(coursesData) {
        statusCode = 200
        message = coursesData
    } else {
        statusCode = 404
        message = MESSAGE_ERROR.NOT_FOUND_DB
    }

    response.status(statusCode)
    response.json(message)
})

app.post('v1/curso', cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    headerContentType = request.headers['content-type']

    if(headerContentType == 'application/json') {
        let bodyData = request.body

        if(JSON.stringify(bodyData) != '{}') {
            const newCourse = await controllerCurso.newCourse(bodyData)

            statusCode = newCourse.status
            message = newCourse.message
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

/* ENDPOINTS PARA OS CURSOS */

// Ativa o servidor para receber requisições http
app.listen(3030, () => {
    console.log('Server waiting for requests...');
})