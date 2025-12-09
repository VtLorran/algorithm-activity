var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var [A, B, C, D] = input.split(/\s+/).map(Number);

if (B > C &&
    D > A &&
    C + D > A + B &&
    C > 0 &&
    D > 0 &&
    A % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}
module.exports = {};