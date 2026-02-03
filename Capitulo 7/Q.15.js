//Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados usando um for..of.

let lista = [];
let filmes;
for(let i = 0; i < 5; i++) {
    filmes = prompt("Digite o nome dos seus 5 filmes favoritos: ");
    lista.push(filmes)
}

for(let listas of lista) {
    console.log(listas)
}
module.exports = {};