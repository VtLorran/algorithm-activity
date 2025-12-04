var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// Ler os três valores
let A1 = parseInt(lines[0]);
let A2 = parseInt(lines[1]);
let A3 = parseInt(lines[2]);

// Calcular tempo total para cada posição da máquina
let tempoAndar1 = A1 * 0 + A2 * 2 + A3 * 4;
let tempoAndar2 = A1 * 2 + A2 * 0 + A3 * 2;
let tempoAndar3 = A1 * 4 + A2 * 2 + A3 * 0;

// Encontrar o mínimo
let minTempo = Math.min(tempoAndar1, tempoAndar2, tempoAndar3);

console.log(minTempo);