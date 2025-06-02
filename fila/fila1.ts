/*Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string,
 para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu 
 que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
*/

import { Queue } from './queue';
const fila = new Queue<string>();
import leia from 'readline-sync';
let opcao: number;

do{

    console.log(`\nMenu:`);//
    console.log(`1: Adicionar um novo Cliente na fila`);
    console.log(`2: Listar todos os Clientes na fila`);
    console.log(`3: Chamar (retirar) uma pessoa da fila`);
    console.log(`0: Sair`);
    
    opcao = leia.questionInt(`Escolha uma opção: `);//
    
    switch (opcao) {
        case 1:
            const nomeCliente = leia.question(`Digite o nome do Cliente: `); // Solicita o nome do cliente
            fila.enqueue(nomeCliente);// Adiciona o cliente à fila
            // Exibe uma mensagem confirmando que o cliente foi adicionado
            console.log(`Cliente ${nomeCliente} adicionado à fila.`);
            break;
        case 2:
            if (fila.isEmpty()) {// Verifica se a fila está vazia
                console.log(`A fila está vazia.`); //
            } else {
                console.log(`Clientes na fila:`);
                fila.printQueue();// Lista todos os clientes na fila
            }
            break;
        case 3:
            const clienteChamado = fila.dequeue();// Chama (retira) um cliente da fila
            // Exibe uma mensagem informando qual cliente foi chamado ou se a fila está vazia
            if (clienteChamado) {
                console.log(`Cliente ${clienteChamado} foi chamado da fila.`);
            } else {
                console.log(`A fila está vazia. Nenhum cliente para chamar.`);
            }
            break;
        case 0:
            console.log(`Programa finalizado.`);
            break;
        default:
            console.log(`Opção inválida. Tente novamente.`);
    }
}while (opcao !== 0); // Continua o loop até que o usuário escolha a opção 0 para sair
// Fim do programa