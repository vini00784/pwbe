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

app.get('/books/:palavraChave', cors(), async function(request, response, next){
    let keyword = request.params.palavraChave

    let books = getBooks(keyword)

    if(books) {
        response.status(200)
        response.json(books)
    } else {
        response.status(404)
    }
})

app.listen(3030, function(){
    console.log('Server waiting for requests...')
})