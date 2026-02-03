//Escreva um programa que solicita ao usuário o nome de 5 filmes e armazene em um array. Em seguida, exiba no console os filmes informados.
let lista = [];
let filmes;
for(let i = 0; i < 5; i++) {
    filmes = prompt("Digite o nome dos seus 5 filmes favoritos: ");
    lista.push(filmes)
}

console.log(lista.join(', '));
module.exports = {};