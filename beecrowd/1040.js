var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split("\n");

let notas = lines[0].split(" ").map(Number);
let N1 = notas[0];
let N2 = notas[1];
let N3 = notas[2];
let N4 = notas[3];

// pesos: 2, 3, 4, 1
let media = (N1*2 + N2*3 + N3*4 + N4*1) / 10;

console.log("Media: " + media.toFixed(1));

if (media >= 7.0) {
    console.log("Aluno aprovado.");
} else if (media < 5.0) {
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno em exame.");
    
    let exame = parseFloat(lines[1]);
    console.log("Nota do exame: " + exame.toFixed(1));
    
    let mediaFinal = (media + exame) / 2;
    
    if (mediaFinal >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    
    console.log("Media final: " + mediaFinal.toFixed(1));
}
module.exports = {};