"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leia = require("readline-sync");
var setInteiros = new Set([2, 5, 4, 3, 7, 8, 9, 10, 1, 6]); //Cria um Set inicializado com 10 valores inteiros
for (var i = 0; i < 3; i++) {
    var numero = leia.questionInt("Digite um numero inteiro para buscar ( ".concat(i + 1, ")/3 : ")); //Solicita ao usuário que digite um número inteiro
    if (setInteiros.has(numero)) { // Verifica se o número já está no Set
        // Se o número já estiver no Set, exibe uma mensagem e continua o loop
        console.log("O numero ".concat(numero, " foi encontrado!."));
    }
    else {
        console.log("numero ".concat(numero, " nao foi encontrado!")); // Adiciona o número ao Set
    }
}
