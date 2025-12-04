var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let X = parseInt(lines.shift());

let contador = 0;

if(X % 2 === 0) {
    X++
}
while(contador < 6) {
    console.log(X);
    X+=2;
    contador++
}