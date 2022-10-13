/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos alunos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 06/10/2022
    Versão:       1.0
*/

// Import da classe PrismaClient, que é responsável pelas interações com o Banco de Dados
const { PrismaClient } = require('@prisma/client')

// Instância da classe PrismaClient
const prisma = new PrismaClient()

// Função para inserir um novo registro de aluno no banco de dados
const insertStudent = async (student) => {
    let sql
}

// Função para atualizar um registro de aluno no banco de dados
const updateStudent = async (student) => {

}

// Função para deletar (ou excluir) um registro de aluno no banco de dados
const deleteStudent = async (id) => {

}

// Função para retornar todos os registros de aluno no banco de dados
const selectAllStudents = async () => {
    // Criamos um objeto do tipo Record Set para receber os dados do Banco de Dados através do script SQL select
    const rsStudents = await prisma.$queryRaw `select * from tbl_aluno`
    // rs --> Record Set
        // Um select retorna um Record Set (conjunto) de dados

    if(rsStudents.length > 0) {
        return rsStudents
    } else {
        return false
    }

}

module.exports = {
    selectAllStudents
}