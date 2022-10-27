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

const updateCourse = async (course) => {
    if(course.id == '' || course.id == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    } else if(course.nome == '' || course.nome == undefined || course.carga_horaria == '' || course.carga_horaria == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    } else {
        const updatedCourse = require('../model/DAO/curso.js')

        const result = await updatedCourse.updateCourse(course)

        if(result) {
            return {status: 200, message: MESSAGE_SUCCESS.UPDATE_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

const deleteCourse = async (id) => {
    
    if(id != '' && id != undefined) {
        const deletedCourse = require('../model/DAO/curso.js')

        const searchCourse = await searchCourseById(id)

        if(searchCourse) {

            const result = await deletedCourse.deleteCourse(id)

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

const listAllCourses = async () => {
    let coursesJson = {}

    const { selectAllCourses } = require('../model/DAO/curso.js')

    const coursesData = await selectAllCourses()

    if(coursesData) {
        coursesJson.courses = coursesData
        return coursesJson
    } else {
        return false
    }
}

const searchCourseById = async (id) => {
    let courseJson = {}

    const { selectCourseById } = require('../model/DAO/curso.js')

    const courseData = await selectCourseById(id)

    if(id != '' && id != undefined) {

        if(courseData) {
            courseJson.course = courseData
            return courseJson
        } else {
            return false
        }

    } else {
        return {status: 400, message: MESSAGE_ERROR.NOT_FOUND_DB}
    }
}

module.exports = {
    newCourse,
    updateCourse,
    deleteCourse,
    listAllCourses,
    searchCourseById
}