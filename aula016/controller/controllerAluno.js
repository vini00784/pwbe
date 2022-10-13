/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos alunos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 06/10/2022
    Versão:       1.0
*/

// Import das funções
// const { insertStudent, selectAllStudents } = require('../model/DAO/aluno.js')

// Função que gera novo aluno no BD
const newStudent = async (student) => {

    // Validação dos campos obrigatórios
    if(student.nome == '' || student.nome == undefined || student.foto == '' || student.foto == undefined || student.rg == '' || student.rg == undefined || student.cpf == '' || student.cpf == undefined|| student.email == '' || student.email == undefined || student.data_nascimento == '' || student.data_nascimento == undefined) {
        return false
    } else if(!student.email.includes('@')) { // Validação se o email digitado possui o '@'
        return false
    } else {

        // Import da model de aluno
        const newStudent = require('../model/DAO/aluno.js')

        // Chama a função para inserir um novo aluno
        const result = newStudent.insertStudent(student)

        if(result) {
            return true
        } else {
            return false
        }
    }
}

// Função que atualiza um registro de aluno no BD
const updateStudent = async (student) => {

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
        // Para trazer os dados "ao contrário", ou seja, na exiibição o último elemento inserido é o primeiro a ser mostrado, pode-se usar o comando abaixo, mas o ideal é fazer direto no banco, usando a Model
        // studentsJson.students = studentsData.reverse()

        return studentsJson
    } else {
        return false
    }

}

module.exports = {
    newStudent,
    listAllStudents
}