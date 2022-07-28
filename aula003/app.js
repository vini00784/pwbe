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

        entradaDados.question('\nEscolha a operação a ser calculada: \n Somar[+] \n Subtrair[-] \n Multiplicar[*] \n Dividir[/] \n\n', function(opcao){

            // Declarando a variável que vai receber o tipo de operação matemática e convertendo o texto digitado em maiúsculo
                // toUpperCase() --> converte em MAIÚSCULO
                // toLowerCase() --> converte em minúsculo
            
            let operacao = opcao.toUpperCase();
            let resultado;

            if(operacao == 'SOMAR' || operacao == '+') {
                resultado = numero1 + numero2;    
            } else if(operacao == 'SUBTRAIR' || operacao == '-') {
                resultado = numero1 - numero2;
            } else if(operacao == 'MULTIPLICAR' || operacao == '*' || operacao == 'X') {
                resultado = numero1 * numero2;
            } else if(operacao == 'DIVIDIR' || operacao == '/') {
                resultado = numero1 / numero2;
            }

            console.log('\nO resultado da conta é igual a: ' + resultado);
            entradaDados.close();
        })
    });

})