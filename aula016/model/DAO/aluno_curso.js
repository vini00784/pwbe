/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos alunos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 31/10/2022
    Versão:       1.0
*/

// Import da classe PrismaClient, que é responsável pelas interações com o Banco de Dados
const { PrismaClient } = require('@prisma/client')

// Instância da classe PrismaClient
const prisma = new PrismaClient()

// Função para inserir um novo registro no banco de dados
const insertStudentCourse = async (studentCourse) => {

    try {
        let sql = `insert into tbl_aluno_curso (id_aluno, 
                                                id_curso,
                                                matricula,
                                                status_aluno)
                                          values (
                                            '${studentCourse.id_aluno}',
                                            '${studentCourse.id_curso}',
                                            '${studentCourse.matricula}',
                                            '${studentCourse.status_aluno}'
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


// Função para selecionar os dados do curso e do aluno em conjunto
const selectStudentCourse = async (studentId) => {
    try {
        let sql = `select cast(tbl_curso.id as float) as id_curso, tbl_curso.nome as nome_curso, tbl_curso.sigla as sigla_curso, 
                          tbl_curso.carga_horaria, 
                          tbl_aluno_curso.matricula, tbl_aluno_curso.status_aluno
                    from tbl_aluno 
                        inner join tbl_aluno_curso
                            on tbl_aluno.id = tbl_aluno_curso.id_aluno
                        inner join tbl_curso
                            on tbl_curso.id = tbl_aluno_curso.id_curso
                        where tbl_aluno.id = ${studentId}`

        const rsStudentCourse = await prisma.$queryRawUnsafe(sql)

        if(rsStudentCourse.length > 0) {
            return rsStudentCourse
        } else {
            return false
        }
    } catch(error) {
        return false
    }
} 

module.exports = {
    insertStudentCourse,
    selectStudentCourse
}