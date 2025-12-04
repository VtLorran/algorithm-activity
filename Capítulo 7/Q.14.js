//Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados usando um for tradicional.
let lista = [];
let filmes;
for(let i = 0; i < 5; i++) {
    filmes = prompt("Digite o nome dos seus 5 filmes favoritos: ");
    lista.push(filmes)
    console.log(lista.join(', '));
}
