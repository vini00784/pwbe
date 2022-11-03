/*
    Objetivo:     Arquivo responsável pela manipulação dos dados dos alunos com o Banco de Dados (insert, update, delete e select)
    Autor:        Vinícius Santos Oliveira
    Data Criação: 31/10/2022
    Versão:       1.0
*/

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

module.exports = {
    insertStudentCourse
}