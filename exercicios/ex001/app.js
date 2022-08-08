/*
    Objetivo:     Criar um sistema que gerencia médias escolares
    Autor:        Vinícius Santos Oliveira
    Data Criação: 04/08/2022
    Versão:       1.0
*/

const { exit } = require('process')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do(a) aluno(a): ', function(nome1) {
    let nomeAluno = nome1

    entradaDados.question('Digite o nome do(a) professor(a): ', function(nome2) {
        let nomeProfessor = nome2

        entradaDados.question('Digite o sexo do(a) aluno(a): ', function(sexo1) {
            let sexoAluno = sexo1.toUpperCase()

            entradaDados.question('Digite o sexo do(a) professor(a): ', function(sexo2) {
                let sexoProfessor = sexo2.toUpperCase()

                entradaDados.question('Insira o nome do curso: ', function(nomeCurso) {
                    let curso = nomeCurso

                    entradaDados.question('Insira o nome da disciplina: ', function(nomeDisciplina) {
                        let disciplina = nomeDisciplina

                        entradaDados.question('Entre com a primeira nota: ', function(valor1) {
                            let nota1 = valor1

                            entradaDados.question('Entre com a segunda nota: ', function(valor2) {
                                let nota2 = valor2
                                
                                entradaDados.question('Entre com a terceira nota: ', function(valor3) {
                                    let nota3 = valor3
                                    
                                    entradaDados.question('Entre com a quarta nota: ', function(valor4) {
                                        let nota4 = valor4
                                        let media
                                        let statusAluno
                                        let mediaExame
                                        let notaExame
                                        let generoProfessor
                                        let generoAluno

                                        if (nomeAluno == '' || nomeProfessor == ''|| sexoAluno == '' || sexoProfessor == '' || curso == '' || disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                            console.log('\nATENÇÃO!! Todos os campos precisam estar corretamente preenchidos')
                                            entradaDados.close()
                                        } else {
                                            media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
                                            
                                            if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
                                                console.log('\nERRO! As notas só podem ser valores entre 0 e 100')
                                                entradaDados.close()
                                            } else {
                                                if(media >= 70) {
                                                    statusAluno = 'APROVADO'
                                                } else if(media < 50) {
                                                    statusAluno = 'REPROVADO'
                                                } else if (media >= 50 && media <= 69) {
                                                    statusAluno = 'EXAME'
                                                    // entradaDados.question('Insira a sua nota do exame: ', function(valor5) {
                                                    //     notaExame = parseFloat(valor5)
                                                    // })
                                                    // notaExame = (notaExame + media) / 2
                                                    
                                                }
    
                                                if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                                    console.log('\nERRO! As notas só podem ser números!')
                                                    entradaDados.close()
                                                } else {
                                                    // if(statusAluno == 'EXAME') {
                                                    //     entradaDados.question('Insira a sua nota do exame: ', function(valor5) {
                                                    //         notaExame = parseFloat(valor5)
                                                    //         notaExame = (notaExame + media) / 2
                                                    //     })
                                                    // }

                                                    if(sexoAluno == 'MASCULINO') {
                                                        generoAluno = 'O aluno'
                                                    } else if(sexoAluno == 'FEMININO') {
                                                        generoAluno = 'A aluna'
                                                    } else if(sexoProfessor == 'MASCULINO') {
                                                        generoProfessor = 'Professor'
                                                    } else if(sexoProfessor == 'FEMININO') {
                                                        generoProfessor = 'Professora'
                                                    }
                                                }
                                                console.log(`\n${generoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${disciplina}.`)
                                                console.log(`Curso: ${curso}`)
                                                console.log(`${generoProfessor} ${nomeProfessor}`)
                                                console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)
                                                console.log(`Média final: ${media}`)
                                                // console.log(`Média final do Exame: ${notaExame}`)
                                            }


                                        }
                                    })
                                })
                                
                            })
                        })
                    })
                })
            })
        })
    })
})