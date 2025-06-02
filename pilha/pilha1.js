"use strict";
/*Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, p
ara organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as
 opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha
0: O programa deve ser finalizado.
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha,
o programa deverá informar que a pilha está vazia.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var leia = require("readline-sync");
var pilha = new stack_1.Stack();
var opcao;
do {
    console.log("\nMenu:"); //
    console.log("1: Adicionar livro na pilha");
    console.log("2: Listar todos os livros da pilha");
    console.log("3: retirar um livro da pilha");
    console.log("0: Sair");
    opcao = leia.questionInt("Escolha uma opcao: "); //
    switch (opcao) {
        case 1:
            var nomeLivro = leia.question("Digite o nome do livro: "); // Solicita o nome do livro
            pilha.push(nomeLivro); // Adiciona o livro à pilha
            // Exibe uma mensagem confirmando que o livro foi adicionado
            console.log("Livro ".concat(nomeLivro, " adicionado \u00E0 pilha."));
            break;
        case 2:
            if (pilha.isEmpty()) { // Verifica se a pilha está vazia
                console.log("A pilha est\u00E1 vazia."); //
            }
            else {
                console.log("Livros na pilha:"); // Exibe a lista de livros na pilha
                pilha.printStack(); // Lista todos os livros da pilha
                2;
            }
            break;
        case 3:
            var livroRetirado = pilha.pop(); // retira um livro da pilha
            // Exibe uma mensagem informando qual livro foi retirado ou se a pilha está vazia
            if (livroRetirado) {
                console.log("Livro ".concat(livroRetirado, " foi retirado da pilha."));
            }
            else {
                // Se a pilha estiver vazia, exibe uma mensagem informando que não há livros para retirar
                console.log("A pilha est\u00E1 vazia. Nenhum livro para retirar.");
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
