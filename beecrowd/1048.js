var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let S = parseFloat(lines.shift());
let NS;
let P;

if(S > 0 && S <= 400) {
    NS = S * 1.15;
    P = 15;
} else if(S > 400 && S <= 800) {
    NS = S * 1.12;
    P = 12;
} else if(S > 800 && S <= 1200) {
    NS = S * 1.10;
    P = 10;
} else if(S > 1200 && S <= 2000) {
    NS = S * 1.07;
    P = 7;
} else {
    NS = S * 1.04;
    P = 4;
}

let RS = NS - S;

console.log(`Novo salario: ${NS.toFixed(2)}`); 
console.log(`Reajuste ganho: ${RS.toFixed(2)}`); 
console.log(`Em percentual: ${P} %`);
module.exports = {};