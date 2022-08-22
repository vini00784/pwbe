console.log('\nEXERCICIO PARA CALCULAR A MEDIA \n');

// Import da biblioteca readline (permite interagir com o usuário)
var readline = require('readline');

// Instancia o objeto para criar a interação com o usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
    Variáveis:
        var - permite criar uma variável de escopo global no projeto;
            A variável criada com var, terá existência em todas as partes do projeto, ou seja, todas as funções terão acesso a esta variável.

        let - permite criar uma variável de escopo local;
            A variável criada com let, terá existência somente na função que está sendo utilizada.
*/

// Entrada do nome do aluno
entradaDados.question('Digite o nome do aluno: ', function (nome) {
    // Declaração de variável local (let) e atribuição de valor
    let nomeAluno = nome;
    // console.log('Nome do aluno: ' + nomeAluno);
    
    // Entrada da Nota 1
    entradaDados.question('Entrar com valor da nota 1: ', function (valor1){
        let nota1 = valor1;

        // Entrada da Nota 2
        entradaDados.question('Entrar com o valor da nota 2: ', function(valor2){
            let nota2 = valor2;

            // Entrada da Nota 3
            entradaDados.question('Entrar com o valor da nota 3: ', function(valor3){
                let nota3 = valor3;

                // Entrada da Nota 4
                entradaDados.question('Entrar com o valor da nota 4: ', function(valor4){
                    let nota4 = valor4;
                    let media;
                    let statusAluno;

                    /*
                    Operadores de Comparação:
                        == --> Comparação de teste lógico
                        != --> Diferença de teste lógico
                        < --> Menor
                        > --> Maior
                        <= --> Menor ou igual
                        >= --> Maior ou igual

                    Operadores Lógicos:
                        || --> ou
                        && --> e
                        ! --> Negação
                    */

                    // Validação para o nome do aluno
                    if(nomeAluno == '') {
                        console.log('Nome do aluno deve ser informado!')
                        entradaDados.close();
                    //Validação para as notas
                    } else if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                        console.log('É necessário informar todas as notas para o cálculo!');
                        entradaDados.close();
                    } else {
                        // Para converter as variáveis que estão em String para um número de fato, podemos utilizar o parseInt (converte para número inteiro) ou parseFloat (converte para números decimais, ou reais)
                        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
                        console.log('O aluno ['+ nomeAluno +'], teve média igual a ' + media.toFixed(2));
                    }
                    // O "toFixed()" permite limitar a quantidade de casas decimais

                    // Validação de aprovação do aluno
                    if(media >= 7) {
                        console.log('Portanto, o aluno ['+ nomeAluno +'] está aprovado');
                    } else if(media >= 4 && media <= 6.9) {
                        console.log('Portanto, o aluno ['+ nomeAluno +'] está de exame');
                    } else {
                        console.log('Portanto, o aluno ['+ nomeAluno +'] está reprovado');
                    }

                    // Outra forma de fazer é:
                    /*
                    if (media >=7) {
                        statusAluno = 'APROVADO';
                    } else if (media >= 4 && media <= 6.9) {
                        statusAluno = 'EXAME';
                    } else {
                        statusAluno = 'REPROVADO';
                    }

                    console.log('O aluno ['+ nomeAluno +'], teve media ' + media + \n Você está: ` + statusAluno);
                    */

                    // Fecha o objeto entradaDados
                    entradaDados.close();
                });
            });
        });
    });
});