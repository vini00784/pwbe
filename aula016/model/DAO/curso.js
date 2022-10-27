/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos cursos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 27/10/2022
    Versão:       1.0
*/

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const insertCourse = async (course) => {
    try {
        let sql = `insert into tbl_curso (nome,
                                          carga_horaria,
                                          icone,
                                          sigla)
                                          values (
                                            '${course.nome}',
                                            '${course.carga_horaria}',
                                            '${course.icone}',
                                            '${course.sigla}'
                                          )`

        const result = await prisma.$executeRawUnsafe(sql)

        if(result) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

const updateCourse = async (course) => {
    try {
        let sql = `update tbl_curso set
                   nome = '${course.nome}',
                   carga_horaria = '${course.carga_horaria}',
                   icone = '${course.icone}',
                   sigla = '${course.sigla}'
                   where id = '${course.id}'`

        const result = await prisma.$executeRawUnsafe(sql)
        
        if(result) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
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
    insertCourse,
    updateCourse,
    selectAllCourses
}