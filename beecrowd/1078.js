var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let N = parseInt(lines.shift());

let R;

if ( 2 < N < 1000) {
    for(let i= 1; i < 11; i++) {
        R = i*N;
        console.log(`${i} x ${N} = ${R}`);
    }
}
module.exports = {};