/*Escreva um programa para criar uma Collection Set do tipo number.
O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros
 não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set
*/
import leia from 'readline-sync';
const setInteiros = new Set; // Cria um Set vazio para armazenar números inteiros
while (setInteiros.size < 10) { // Continua solicitando números até que o Set tenha 10 elementos
    let numero = leia.questionInt(`Digite um numero inteiro nao repetido (${setInteiros.size + 1}/10): `); // Solicita ao usuário que digite um número inteiro
    if (setInteiros.has(numero)) { // Verifica se o número já está no Set
        // Se o número já estiver no Set, exibe uma mensagem e continua o loop
        console.log(`O numero ${numero} já foi adicionado. Por favor, digite um numero diferente.`);
    }
    else {
        setInteiros.add(numero); // Adiciona o número ao Set
    }
}
console.log(`lista de numeros:`); // Exibe a lista atualizada
for (let numero of setInteiros) {
    console.log(numero); // Exibe cada elemento do Set
}
