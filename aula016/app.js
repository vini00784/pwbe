/*
    Objetivo:     C
    Autor:        Vinícius Santos Oliveira
    Data Criação: 03/10/2022
    Versão:       1.0
*/

// Comandos a serem rodados (nessa sequência) além do express, cors e body-parser:
    // npm install prisma --save
    // npx prisma
    // npx prisma init
    // npm install @prisma/client
        // Eles preparam o ambiente de utilização do Prisma

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Import das Funções

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methos', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    next()
})