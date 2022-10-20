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

    try {
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
                                            '${student.nome}',
                                            '${student.foto}',
                                            '${student.sexo}',
                                            '${student.rg}',
                                            '${student.cpf}',
                                            '${student.email}',
                                            '${student.data_nascimento}',
                                            '${student.telefone}',
                                            '${student.celular}'
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
    } catch (error) {
        return false
    }

}

// Função para atualizar um registro de aluno no banco de dados
const updateStudent = async (student) => {
    try {
        let sql = `update tbl_aluno set
                   nome = '${student.nome}',
                   foto = '${student.foto}',
                   sexo = '${student.sexo}',
                   rg = '${student.rg}',
                   cpf = '${student.cpf}',
                   email = '${student.email}',
                   data_nascimento = '${student.data_nascimento}',
                   telefone = '${student.telefone}',
                   celular = '${student.celular}'
                   where id = '${student.id}'`
    
                                          
        // Executa o script SQL no BD
        // $executeRawUnsafe --> permite encaminhar uma variável contendo o script
        const result = await prisma.$executeRawUnsafe(sql)
    
        // Verifica se o script foi executado com sucesso no Banco de Dados
        if(result) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

// Função para deletar (ou excluir) um registro de aluno no banco de dados
const deleteStudent = async (id) => {

}

// Função para retornar todos os registros de aluno no banco de dados
const selectAllStudents = async () => {
    // Criamos um objeto do tipo Record Set para receber os dados do Banco de Dados através do script SQL select
    const rsStudents = await prisma.$queryRaw `select cast(id as float) as id, nome, foto, sexo, rg, cpf, email, data_nascimento, telefone, celular from tbl_aluno order by id desc`
    // rs --> Record Set
        // Um select retorna um Record Set (conjunto) de dados

    if(rsStudents.length > 0) {
        return rsStudents
    } else {
        return false
    }

}

module.exports = {
    insertStudent,
    updateStudent,
    selectAllStudents
}