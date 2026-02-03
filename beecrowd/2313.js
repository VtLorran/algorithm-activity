var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// Ler a linha com os três lados
let [A, B, C] = lines[0].split(' ').map(Number);

// Ordenar os lados para facilitar: a <= b <= c
let lados = [A, B, C].sort((x, y) => x - y);
let a = lados[0], b = lados[1], c = lados[2];

// Verificar se é um triângulo válido
if (a + b <= c) {
    console.log('Invalido');
} else {
    // Classificar o tipo de triângulo
    let tipo;
    if (a === b && b === c) {
        tipo = 'Valido-Equilatero';
    } else if (a === b || b === c || a === c) {
        tipo = 'Valido-Isoceles'; // Corrigido: "Isosceles", não "Isocoles"
    } else {
        tipo = 'Valido-Escaleno';
    }

    // Verificar se é retângulo: a² + b² = c² (c é o maior lado)
    let retangulo = (a * a + b * b === c * c) ? 'Retangulo: S' : 'Retangulo: N';

    // Imprimir resultados
    console.log(tipo);
    console.log(retangulo);
}
module.exports = {};