/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos alunos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 06/10/2022
    Versão:       1.0
*/

// Import da classe PrismaClient, que é responsável pelas interações com o Banco de Dados
const { PrismaClient } = require('@prisma/client')
const { transformDocument } = require('@prisma/client/runtime')

// Instância da classe PrismaClient
const prisma = new PrismaClient()

// Função para inserir um novo registro de aluno no banco de dados
const insertStudent = async (student) => {
    let sql = `insert into tbl_aluno (nome, 
                                      foto, 
                                      sexo, 
                                      rg, 
                                      cpf, 
                                      email, 
                                      data_nascimento, 
                                      telefone, 
                                      celular)
                                      values (
                                        ${student.nome},
                                        ${student.foto},
                                        ${student.sexo},
                                        ${student.rg},
                                        ${student.cpf},
                                        ${student.email},
                                        ${student.data_nascimento},
                                        ${student.telefone},
                                        ${student.celular}
                                      )`

                                      
    // Executa o script SQL no BD
    // $executeRawUnsafe --> permite encaminhar uma variável contendo o script
    const result = await prisma.$executeRawUnsafe(sql)

    // Verifica se o script foi executado com sucesso no Banco de Dados
    if(result) {
        return true
    } else {
        return false
    }
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