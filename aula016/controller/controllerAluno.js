/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos alunos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 06/10/2022
    Versão:       1.0
*/

// Import das funções
// const { selectAllStudents } = require('../model/DAO/aluno.js')

// Função que gera novo aluno no BD
const newStudent = async (aluno) => {

}

// Função que atualiza um registro de aluno no BD
const updateStudent = async (aluno) => {

}

// Função que delete aluno do BD
const deleteStudent = async (id) => {

}

// Função que lista os alunos registrados no BD
const listStudents = async () => {
    const { selectAllStudents } = require('model/DAO/aluno.js')

    const studentsData = await selectAllStudents()

    if(studentsData) {
        return studentsData
    } else {
        return false
    }

}