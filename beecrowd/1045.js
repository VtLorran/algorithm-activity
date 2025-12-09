var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// Converte os valores para números e ordena em ordem decrescente (A >= B >= C)
let lados = lines[0].split(' ').map(Number).sort((a, b) => b - a);
let A = lados[0];
let B = lados[1];
let C = lados[2];

// Verifica se forma triângulo
if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
} else {
    // Classifica o triângulo pelo ângulo
    if (A * A === B * B + C * C) {
        console.log("TRIANGULO RETANGULO");
    }
    if (A * A > B * B + C * C) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (A * A < B * B + C * C) {
        console.log("TRIANGULO ACUTANGULO");
    }

    // Classifica pelo tipo de lado
    if (A === B && B === C) {
        console.log("TRIANGULO EQUILATERO");
    } else if (A === B || A === C || B === C) {
        // Exatamente dois lados iguais
        console.log("TRIANGULO ISOSCELES");
    }
    // Se nenhum lado for igual, não imprime nada (é escaleno, mas o problema não pede)
}
module.exports = {};