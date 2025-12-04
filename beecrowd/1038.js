var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let C = parseInt(lines.shift());
let Q = parseInt(lines.shift());

let T;

if(C == 1) {
    T = 4 * Q;
} else if(C == 2) {
    T = 4.50 * Q;
} else if (C == 3) {
    T = 5 * Q;
} else if (C == 4) {
    T = 2 * Q;
} else if (C == 5) {
    T = 1.5 * Q;
}

console.log(`Total: R$ ${T.toFixed(2)}`);
