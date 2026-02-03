var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let DDD = parseInt(lines.shift());

let C;

if(DDD ==  61) {
    C = "Brasilia"
} else if(DDD == 71 ) {
    C = "Salvador"
} else if(DDD == 11) {
    C = "Sao Paulo" 
} else if(DDD == 21 ) {
    C = "Rio de Janeiro"
} else if(DDD == 32 ) {
    C = "Juiz de Fora"
} else if(DDD == 19) {
    C = "Campinas"
} else if(DDD == 27 ) {
    C = "Vitoria"
} else if(DDD == 31 ) {
    C = "Belo Horizonte"
} else {
    C = "DDD nao cadastrado"
}

console.log(C);
module.exports = {};