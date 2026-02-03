var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// Lê os valores da primeira linha
var [p, j1, j2, r, a] = lines[0].split(' ').map(Number);

if (r === 1 && a === 1) {
    console.log("Jogador 2 ganha!");
} else if (r === 1 && a === 0) {
    console.log("Jogador 1 ganha!");
} else if (r === 0 && a === 1) {
    console.log("Jogador 1 ganha!");
} else {
    var soma = j1 + j2;
    var paridade = soma % 2 === 0 ? 1 : 0; // 1 = par, 0 = ímpar

    if (p === paridade) {
        console.log("Jogador 1 ganha!");
    } else {
        console.log("Jogador 2 ganha!");
    }
}
module.exports = {};