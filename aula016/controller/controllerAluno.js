/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos alunos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 06/10/2022
    Versão:       1.0
*/

// Import das funções
// const { insertStudent, selectAllStudents } = require('../model/DAO/aluno.js')

// Função que gera novo aluno no BD
const newStudent = async (aluno) => {

    // Validação dos campos obrigatórios
    if(aluno.nome == '' || aluno.foto == '' || aluno.rg == '' || aluno.cpf == ''|| aluno.email == '' || aluno.data_nascimento == '') {
        return false
    } else if(!aluno.email.includes('@')) { // Validação se o email digitado possui o '@'
        return false
    } else {

        // Import da model de aluno
        const newStudent = require('../model/DAO/aluno.js')

        // Chama a função para inserir um novo aluno
        const result = newStudent.insertStudent()

        if(result) {
            return true
        } else {
            return false
        }
    }
}

// Função que atualiza um registro de aluno no BD
const updateStudent = async (aluno) => {

}

// Função que delete aluno do BD
const deleteStudent = async (id) => {

}

// Função que lista os alunos registrados no BD
const listAllStudents = async () => {
    let studentsJson = {}

    const { selectAllStudents } = require('../model/DAO/aluno.js')

    const studentsData = await selectAllStudents()
    
    if(studentsData) {
        
        // Conversão do tipo de dados BigInt para Int (DE FORMA PROVISÓRIA!)
        studentsData.forEach(element => {
            element.id = Number(element.id)
        })

        studentsJson.students = studentsData

        return studentsJson
    } else {
        return false
    }

}

module.exports = {
    newStudent,
    listAllStudents
}