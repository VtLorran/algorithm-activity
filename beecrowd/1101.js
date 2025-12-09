var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    let [m, n] = lines[i].split(' ').map(Number);

    if (m <= 0 || n <= 0) break; 

    let menor = Math.min(m, n);
    let maior = Math.max(m, n);
    let soma = 0;
    let sequencia = "";

    for (let j = menor; j <= maior; j++) {
        sequencia += j + " ";
        soma += j;
    }

    console.log(sequencia + "Sum=" + soma);
}
module.exports = {};