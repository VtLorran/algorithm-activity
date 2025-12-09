function quadrado(n1) {
    return n1*n1;
}

function ExibirResultado(numero, resultado) {
    console.log(`O quadrado de ${numero} é: ${resultado}`);
}

let numero = parseInt(prompt("Digite seu número: "));
let resultado = quadrado(numero);
ExibirResultado(numero, resultado);
module.exports = {};