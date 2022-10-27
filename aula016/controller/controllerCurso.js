/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos cursos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 27/10/2022
    Versão:       1.0
*/

const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require('../module/config.js')

const newCourse = async (course) => {
    if(course.nome == '' || course.nome == undefined || course.carga_horaria == '' || course.carga_horaria == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    } else {
        const newCourse = require('../model/DAO/curso.js')

        const result = await newCourse.insertCourse(course)

        if(result) {
            return {status: 201, message: MESSAGE_SUCCESS.INSERT_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

const updateCourse = async () => {

}

const deleteCourse = async () => {

}

const listAllCourses = async () => {

}

const searchCourseById = async () => {

}

module.exports = {
    newCourse
}