/*Escreva um programa para criar uma Collection Array do tipo number, 
inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, 
que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array,
 exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, 
 o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

import leia from 'readline-sync'
const numeros:number[] = [2,5,1,3,4,9,7,8,10,6];  
const usuario = leia.questionInt('Digite um numero inteiro: ');
const indice = numeros.indexOf(usuario);// busca o índice do número digitado pelo usuário
// Se o número for encontrado, o índice será >= 0, caso contrário será -1

if (indice !== -1) {
    console.log(`O numero ${usuario} foi encontrado na posição ${indice}.`);
}
else {
    console.log(`O numero ${usuario} não foi encontrado!`);
}