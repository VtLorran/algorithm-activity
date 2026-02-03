var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(" ")

let E = parseInt(lines.shift());
let S = parseInt(lines.shift());

let R;

if (S > E) {
    R = S - E;
} else {
    R = 24 - E + S;
}

console.log(`O JOGO DUROU ${R} HORA(S)`);
module.exports = {};