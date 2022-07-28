console.log('Calculadora Simples\n');

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

        entradaDados.question('\nEscolha a operação a ser calculada: \n Somar[+] \n Subtrair[-] \n Multiplicar[*] \n Dividir[/] \n', function(opcao){
            let operacao = opcao;
        })
    });

})