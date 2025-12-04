var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
R = parseFloat(lines.shift());
var A = n * (R*R);

console.log(`A=${A.toFixed(4)}`);
