console.log('Calculadora Simples\n');

const { type } = require('os');
const { exit } = require('process');
// Import da biblioteca da entrada de dados
var readline = require('readline');

// Instância do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada do valor1
entradaDados.question('Digite o número1: ', function(valor1){
    // Declarando a variável e convertendo o valor digitado pelo usuário em float
    let numero1 = parseFloat(valor1);

    // O comando typeof verifica qual o tipo do dado de uma variável ou um objeto:
    // console.log(typeof(numero1));

    entradaDados.question('Digite o número2: ', function(valor2){
        let numero2 = parseFloat(valor2);

        entradaDados.question('\nEscolha a operação a ser calculada: \n Somar[+] \n Subtrair[-] \n Multiplicar[*] \n Dividir[/] \n\n', function(opcao){

            // Declarando a variável que vai receber o tipo de operação matemática e convertendo o texto digitado em maiúsculo
                // toUpperCase() --> converte em MAIÚSCULO
                // toLowerCase() --> converte em minúsculo
            
            let operacao = opcao.toUpperCase();
            let resultado;
            let erro = false;

            if(isNaN(numero1) || isNaN(numero2)) {
                resultado = 'ERRO: A informação inserida não é um número!';
                erro = true;
            } else {

            /*
            if(operacao == 'SOMAR' || operacao == '+') {
                resultado = numero1 + numero2;    
            } else if(operacao == 'SUBTRAIR' || operacao == '-') {
                resultado = numero1 - numero2;
            } else if(operacao == 'MULTIPLICAR' || operacao == '*') {
                resultado = numero1 * numero2;
            } else if(operacao == 'DIVIDIR' || operacao == '/') {
                resultado = numero1 / numero2;
            } else {
                resultado = 'ERRO: Não foi escolhida uma operação válida!';
                erro = true;
            }
            */

            switch(operacao) {
                case 'SOMAR': case '+':
                    // if(isNaN(numero1) || isNaN(numero2)) {
                    //     resultado = 'ERRO: O valor inserido não é um número'
                    //     erro = true;
                    // } else {
                    //     resultado = numero1 + numero2;
                    // }
                    resultado = numero1 + numero2;
                    break;
                case 'SUBTRAIR': case '-':
                    resultado = numero1 - numero2;
                    break;
                case 'MULTIPLICAR': case '*':
                    resultado = numero1 * numero2;
                    break;
                case 'DIVIDIR': case '/':
                    if(numero2 == 0) {
                        resultado = 'ERRO: Não é possível realizar a divisão por zero!'
                        erro = true;
                    } else{
                        resultado = numero1 / numero2;
                    }
                    break;
                default:
                    resultado = 'ERRO: Não foi escolhida uma operação válida!';
                    erro = true;
            }
        }

            
            if(erro) {
                console.log(resultado);

                // Permite sair do NodeJS
                exit();
            } else {
                console.log('\nO resultado é igual a: ' + resultado);
            }

            entradaDados.close();
        });
    });

})