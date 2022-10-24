/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos alunos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 06/10/2022
    Versão:       1.0
*/

// Import das funções

// Arquivo de mensagens padronizadas
const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require('../module/config.js')

// const { insertStudent, selectAllStudents } = require('../model/DAO/aluno.js')

// Função que gera novo aluno no BD
const newStudent = async (student) => {

    // Validação dos campos obrigatórios
    if(student.nome == '' || student.nome == undefined || student.foto == '' || student.foto == undefined || student.rg == '' || student.rg == undefined || student.cpf == '' || student.cpf == undefined|| student.email == '' || student.email == undefined || student.data_nascimento == '' || student.data_nascimento == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    } else if(!student.email.includes('@')) { // Validação se o email digitado possui o '@'
        return {status: 400, message: MESSAGE_ERROR.INVALID_EMAIL}
    } else {

        // Import da model de aluno
        const newStudent = require('../model/DAO/aluno.js')

        // Chama a função para inserir um novo aluno
        const result = await newStudent.insertStudent(student)

        if(result) {
            return {status:201, message: MESSAGE_SUCCESS.INSERT_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

// Função que atualiza um registro de aluno no BD
const updateStudent = async (student) => {

    if(student.id == '' || student.id == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }
    // Validação dos campos obrigatórios
    else if(student.nome == '' || student.nome == undefined || student.foto == '' || student.foto == undefined || student.rg == '' || student.rg == undefined || student.cpf == '' || student.cpf == undefined|| student.email == '' || student.email == undefined || student.data_nascimento == '' || student.data_nascimento == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    } else if(!student.email.includes('@')) { // Validação se o email digitado possui o '@'
        return {status: 400, message: MESSAGE_ERROR.INVALID_EMAIL}
    } else {

        // Import da model de aluno
        const updatedStudent = require('../model/DAO/aluno.js')

        // Chama a função para atualizar um aluno
        const result = await updatedStudent.updateStudent(student)

        if(result) {
            return {status:200, message: MESSAGE_SUCCESS.UPDATE_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

// Função que deleta aluno do BD
const deleteStudent = async (id) => {
    // Validação do ID
    if(id != '' && id != undefined) {
        // Import da model do aluno
        const deletedStudent = require('../model/DAO/aluno.js')

        // Chama a função para excluir um aluno
        const result = await deletedStudent.deleteStudent(id)

        if(result) {
            return {status: 200, message: MESSAGE_SUCCESS.DELETE_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    } else {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }
}

// Função que lista os alunos registrados no BD
const listAllStudents = async () => {
    let studentsJson = {}

    const { selectAllStudents } = require('../model/DAO/aluno.js')

    const studentsData = await selectAllStudents()
    
    if(studentsData) {
        
        // Conversão do tipo de dados BigInt para Int (DE FORMA PROVISÓRIA!)
        // studentsData.forEach(element => {
        //     element.id = Number(element.id)
        // })

        studentsJson.students = studentsData
        // Para trazer os dados "ao contrário", ou seja, na exiibição o último elemento inserido é o primeiro a ser mostrado, pode-se usar o comando abaixo, mas o ideal é fazer direto no banco, usando a Model
        // studentsJson.students = studentsData.reverse()

        return studentsJson
    } else {
        return false
    }
}

const searchStudentById = async (id) => {
    let studentJson = {}

    const { selectStudentById } = require('../model/DAO/aluno.js')

    const studentData = await selectStudentById(id)

    if(id != '' && id != undefined) {

        if(studentData) {
            studentJson.student = studentData
            return studentJson
        }

    } else {
        return MESSAGE_ERROR.NOT_FOUND_DB
    }
}

module.exports = {
    newStudent,
    updateStudent,
    deleteStudent,
    listAllStudents,
    searchStudentById
}