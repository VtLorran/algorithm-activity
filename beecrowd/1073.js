var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let N = parseInt(lines.shift());

let conta;

if (5 < N < 2000) {
    for( let i = 1; i<=N; i++) {
        i +=1;
        conta = i*i;
        console.log(`${i}^2 = ${conta}`);
    }
}
