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

        // Import da model do aluno_curso (tabela de relação entre aluno e curso)
        const newStudentCourse = require('../model/DAO/aluno_curso.js')

        // Chama a função para inserir um novo aluno
        const resultNewStudent = await newStudent.insertStudent(student)

        // Verifica se os dados do novo aluno foram inseridos no banco de dados
        if(resultNewStudent) {

            // Chama a função que verifica qual o ID gerado para o novo aluno
            let newStudentId = await newStudent.selectLastId()

            if(newStudentId > 0) {
                let studentCourse = {} // Objeto JSON para aluno_curso

                let rmYear = new Date().getFullYear() // Retorna o ano corrente

                let rmNumber = `${newStudentId}${student.curso[0].id_curso}${rmYear}` // Gera a matrícula do aluno (id_aluno + id_curso + ano corrente)

                // Inserindo as chaves e os valores no objeto JSON
                studentCourse.id_aluno = newStudentId
                studentCourse.id_curso = student.curso[0].id_curso
                studentCourse.matricula = rmNumber
                studentCourse.status_aluno = 'Cursando'

                // Chama a função para inserir na tbl_aluno_curso
                const resultNewStudentCourse = await newStudentCourse.insertStudentCourse(studentCourse)

                if(resultNewStudentCourse) {
                    return {status:201, message: MESSAGE_SUCCESS.INSERT_ITEM}
                } else {
                    // Caso aconteça um erro neste processo, obrigatoriamente deverá ser excluído do BD esse registro, já que, no caso de um erro, ele seria inserido em uma tabela mas em outra não, sendo um processamento feito pela metade
                    await deleteStudent(newStudentId)
                    return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
                }

            } else {
                await deleteStudent(newStudentId)
                return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
            }
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

        // Validação do ID no Banco de Dados
        const searchStudent = await searchStudentById(id)

        // Valida se o registro é válido
        if(searchStudent) {
            // Chama a função para excluir um aluno
            const result = await deletedStudent.deleteStudent(id)
    
            if(result) {
                return {status: 200, message: MESSAGE_SUCCESS.DELETE_ITEM}
            } else {
                return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
            }
        } else {
            return {status: 404, message: MESSAGE_ERROR.NOT_FOUND_DB}
        }

    } else {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }
}

// Função que lista os alunos registrados no BD
// const listAllStudents = async () => {
//     let studentsJson = {}
//     let studentCourseJson = {}

//     const { selectAllStudents } = require('../model/DAO/aluno.js')
    
//     const studentsData = await selectAllStudents()
    
//     if(studentsData) {
//         const { selectStudentCourse } = require('../model/DAO/aluno_curso.js')
//         const studentCourseData = await selectStudentCourse(studentsData.id)
        
//         // Conversão do tipo de dados BigInt para Int (DE FORMA PROVISÓRIA!)
//         // studentsData.forEach(element => {
//         //     element.id = Number(element.id)
//         // })

//         studentCourseData.forEach(element => {
//             studentCourseJson.courses = element
//             studentsJson.students = studentsData
//             studentsJson.courses = studentCourseJson
//         });

//         // Para trazer os dados "ao contrário", ou seja, na exiibição o último elemento inserido é o primeiro a ser mostrado, pode-se usar o comando abaixo, mas o ideal é fazer direto no banco, usando a Model
//         // studentsJson.students = studentsData.reverse()

//         return studentsJson
//     } else {
//         return false
//     }
// }

const searchStudentById = async (id) => {
    
    if(id != '' && id != undefined) {
        
        // Import das models aluno e aluno_curso
        const { selectStudentById } = require('../model/DAO/aluno.js')
        const { selectStudentCourse } = require('../model/DAO/aluno_curso.js')
        
        const studentData = await selectStudentById(id)
        
        if(studentData) {
            let studentJson = {}

            // Busca os dados referentes ao curso do aluno
            const studentCourseData = await selectStudentCourse(id)
            
            if(studentCourseData) {
                
                // Chave no JSON que retorna o array de aluno
                studentJson.student = studentData

                // Adiciona a chave course dentro do objeto dos dados do aluno e insere os dados do curso referente ao aluno
                studentData[0].course = studentCourseData

                return studentJson
            } else {
                // Chave no JSON que retorna o array de aluno
                studentJson.student = studentData
    
                return studentJson
            }

        }
    } else {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }
}

module.exports = {
    newStudent,
    updateStudent,
    deleteStudent,
    // listAllStudents,
    searchStudentById
}