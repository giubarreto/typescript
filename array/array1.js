"use strict";
/*Escreva um programa para criar uma Collection Array do tipo number,
inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário,
que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array,
 exiba na tela a posição deste número na Collection. Caso o número não seja encontrado,
 o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
var usuario = readlineSync.questionInt('Digite um número inteiro: ');
var indice = numeros.indexOf(usuario); // busca o índice do número digitado pelo usuário
// Se o número for encontrado, o índice será >= 0, caso contrário será -1
if (indice !== -1) {
    console.log("O n\u00FAmero ".concat(usuario, " foi encontrado na posi\u00E7\u00E3o ").concat(indice, "."));
}
else {
    console.log("O n\u00FAmero ".concat(usuario, " n\u00E3o foi encontrado!"));
}
