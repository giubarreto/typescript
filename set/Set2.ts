
/*Escreva um programa para criar uma Collection Set do tipo number, 
inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, 
que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Coction Set,
 exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, 
 o programa deverá exibir na tela a mensagem: 
O número NN não foi encontrado!
*/

import * as leia from 'readline-sync'
const setInteiros: Set<number> = new Set([ 2,5,4,3,7,8,9,10,1,6]);//Cria um Set inicializado com 10 valores inteiros
 for (let i=0; i<3;i++) {
    let numero = leia.questionInt(`Digite um numero inteiro para buscar ( ${i+1})/3 : `); //Solicita ao usuário que digite um número inteiro
    if (setInteiros.has(numero)) {// Verifica se o número já está no Set
        // Se o número já estiver no Set, exibe uma mensagem e continua o loop
        console.log(`O numero ${numero} foi encontrado!.`);
    } else {
    console.log(`numero ${numero} nao foi encontrado!`); // Adiciona o número ao Set
    }
 }