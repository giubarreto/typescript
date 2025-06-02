"use strict";
/*Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string,
 para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu
 que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila
0: O programa deve ser finalizado.
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = require("./queue");
var fila = new queue_1.Queue();
var leia = require("readline-sync");
var opcao;
do {
    console.log("\nMenu:"); //
    console.log("1: Adicionar um novo Cliente na fila");
    console.log("2: Listar todos os Clientes na fila");
    console.log("3: Chamar (retirar) uma pessoa da fila");
    console.log("0: Sair");
    opcao = leia.questionInt("Escolha uma op\u00E7\u00E3o: "); //
    switch (opcao) {
        case 1:
            var nomeCliente = leia.question("Digite o nome do Cliente: "); // Solicita o nome do cliente
            fila.enqueue(nomeCliente); // Adiciona o cliente à fila
            // Exibe uma mensagem confirmando que o cliente foi adicionado
            console.log("Cliente ".concat(nomeCliente, " adicionado \u00E0 fila."));
            break;
        case 2:
            if (fila.isEmpty()) { // Verifica se a fila está vazia
                console.log("A fila est\u00E1 vazia."); //
            }
            else {
                console.log("Clientes na fila:");
                fila.printQueue(); // Lista todos os clientes na fila
            }
            break;
        case 3:
            var clienteChamado = fila.dequeue(); // Chama (retira) um cliente da fila
            // Exibe uma mensagem informando qual cliente foi chamado ou se a fila está vazia
            if (clienteChamado) {
                console.log("Cliente ".concat(clienteChamado, " foi chamado da fila."));
            }
            else {
                console.log("A fila est\u00E1 vazia. Nenhum cliente para chamar.");
            }
            break;
        case 0:
            console.log("Programa finalizado.");
            break;
        default:
            console.log("Op\u00E7\u00E3o inv\u00E1lida. Tente novamente.");
    }
} while (opcao !== 0); // Continua o loop até que o usuário escolha a opção 0 para sair
// Fim do programa
