/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos cursos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 27/10/2022
    Versão:       1.0
*/

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const insertCourse = async (course) => {
    
}

const updateCourse = async () => {

}

const deleteCourse = async () => {

}

const selectAllCourses = async () => {
    let sql = 'select cast(id as float) as id, nome, carga_horaria, icone, sigla from tbl_curso order by id desc'

    const rsCourses = await prisma.$queryRawUnsafe(sql)

    if(rsCourses.length > 0) {
        return rsCourses
    } else {
        return false
    }
}

const selectCourseById = async () => {

}

module.exports = {
    insertCourse
}