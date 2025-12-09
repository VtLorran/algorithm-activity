var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let h0 = parseInt(lines[0]);
let hf = parseInt(lines[1]);
let m0 = parseInt(lines[2]);
let mf = parseInt(lines[3]);

//Transformar tudo em minutos

let inicio = h0 * 60 + m0;
let final = hf * 60 + mf;

//Se o jogo passou da meia noite 
if(fim <= inicio) {
    final += 24*60
}

let duracao = final - inicio;
//converter para horas
let horas = Math.floor(duracao/60);
let minutos = duracao % 60;

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
module.exports = {};