/*
    Objetivo:     C
    Autor:        Vinícius Santos Oliveira
    Data Criação: 08/09/2022
    Versão:       1.0
*/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Import das funções
const { getBooks } = require('./module/books.js')

const app = express()

app.use ((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    next()
})

// EndPoint para buscar os livros
app.get('/books/:palavraChave', cors(), async function(request, response, next){
    // Recebe a variável que será enviada na requisição através de um paramêtro de URL
    let keyword = request.params.palavraChave

    let books = getBooks(keyword)

    if(books) {
        response.status(200)
        response.json(books)
    } else {
        response.status(404)
    }
})

// EndPoint para filtrar os livros
app.get('/books/', cors(), async function(request, response, next){
    // Recebe a variável keyword por QueryString(indicada quando precisamos criar filtros)
    // OBS IMPORTANTE:
        // No Postman, o nome da chave deve ser igual ao nome que vem após o query.
    let keyword = request.query.name

    let books = getBooks(keyword)

    if(books) {
        response.status(200)
        response.json(books)
    } else {
        response.status(404)
    }
})

app.listen(8080, function(){
    console.log('Server waiting for requests...')
})