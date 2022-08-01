/*
    Objetivo:     arquivo que contém todas as funções para cálculos matemáticos
    Autor:        Vinícius Santos Oliveira
    Data Criação: 01/08/2022
    Versão: 1.0
*/

//Método tradicional de se criar uma função
function calcular(valor1, valor2, opcaoCalculo) {
    // Criando variáveis locais para receber o conteúdo dos argumentos que foram encaminhandos na function
    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();
    let resultado;
    let erro = false;

    // isNaN() --> função para validar se o conteúdo de uma variável é número ou não
    if(isNaN(numero1) || isNaN(numero2)) {
        console.log('ERRO: A informação inserida não é um número!');
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

        switch (operacao) {
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
                    console.log('ERRO: Não é possível realizar a divisão por zero!')
                    erro = true;
                } else{
                    resultado = numero1 / numero2;
                }
                break;
            default:
                console.log('ERRO: Não foi escolhida uma operação válida!');
                erro = true;
        }
    }
    
    if(erro) {
        return false;
    } else {
        return resultado;
    }
}

// As funções que serão importadas em outros projetos, precisam obrigatoriamente serem incluídas no module.exports
// As funções que não forem incluídas no module.exports irá funcionar apenas localmente neste arquivo
module.exports = {
    calcular
}