console.log('Calculadora Simples\n');

// Import do arquivo de função para realizar cálculos
const { calcular } = require('./modulos/calculadora.js');

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

            // Chama a função que realizará os cálculos matematicos
            if (resultado = calcular(numero1, numero2, operacao)){
                console.log('\nO resultado é igual a: ' + resultado);
            }

            entradaDados.close();
        });
    });

})