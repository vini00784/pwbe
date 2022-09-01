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

        nome: "José",
        idade: 20,

        nome: "Maria",
        idade: 30,
    }

OBS.: Os elementos devem ser separados pela `,`, ou seja, tem o mesmo papel do `;` no Java.

No caso de pegar algum valor, ele seria puxado pela chave. Um JSON costuma ser guardado em alguma variável, então ficaria dessa forma:

Supunhamos que o JSON esteja guardado em X, para chamar o José, se usaria:

    X[0].nome

Isso vai puxar o primeiro elemento (índice 0) da chave "nome"

Já para chamar a idade da Maria, por exemplo, seria:

    X[1].idade

Para criar mais de um elemento dentro de um JSON, usa-se:

    const listaContatos = [
        {
            nome: 'José da Silva',
            telefone: '11  9945646455',
            email: 'jose@gmail.com'
        },
        {
            nome: 'Maria Bahia Santos',
            telefone: '11 938456198',
            email: 'maria@gmail.com'
        }
    ]

No caso de tratar mais de um elemento "nome", por exemplo, deve-se misturar JSON e Array, como está exemplificado acima.

É possível ainda colocar um Array de JSON dentro uma chave do JSON, como no exemplo abaixo:

    const listaContatos = [
        {
            nome: 'José da Silva',
            telefone: '11  9945646455',
            email: 'jose@gmail.com',
            carros: [
                {
                    placa: 'ABC-1234',
                    modelo: 'Corsa',
                    cor: 'Prata'
                },

                {
                    placa: 'DEF-5678',
                    modelo: 'Fusca',
                    cor: 'Azul'
                }
            ]
        },

        {
            nome: 'Maria Bahia Santos',
            telefone: '11 938456198',
            email: 'maria@gmail.com'
        }
    ]

No caso, José possui dois carros e é preciso guardar informações dos dois carros.

O exemplo acima é basicamente um Array de JSON, com outros Arrays de JSON dentro dele.

Para extrar SOMENTE a placa do primeiro carro do José, usa-se:

    listaContatos[0].carros[0].placa

Assim, a placa solicitada será extraída

---

# PostMan (API)
Verbos que usaremos:

Get --> Pegar (listar) o conteúdo do Back-End

Post --> Quando se tem o contéudo no Back-End e é preciso enviá-lo

Put --> Quando o Back-End já tem conteúdo mas é preciso modificar

Delete --> Quando preciso deletar