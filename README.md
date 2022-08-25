# PWBE (Programação Web Back-End)

## Tipos de variável
Existem três tipos de variáveis a serem criadas no JS:
* var --> Ocupa mais memória na máquina, pois torna a variável de escopo `` global ``.
* let --> Variável de escopo ``local ``, só existe dentro daquela função.
* const --> Dá a ideia de constante, ou seja, cria elementos que não poderão ser alterados ou modificados durante o programa.

---

## JSON
Diferentemente de um Array, um JSON é inicializado usando as chaves.

    {
        chave: valor

        nome: "José"
        idade: 20,

        nome: "Maria"
        idade: 30,
    }

No caso de pegar algum valor, ele seria puxado pela chave. Um JSON costuma ser guardado em alguma variável, então ficaria dessa forma:

Supunhamos que o JSON esteja guardado em X, para chamar o José, se usaria:

    X[0].nome

Isso vai puxar o primeiro elemento (índice 0) da chave "nome"

Já para chamar a idade da Maria, por exemplo, seria:

    X[1].idade