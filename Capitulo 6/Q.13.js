//Conversor de moedas. Real para Dolar (obs: 1 real = 0,18 dólares)
function entradadedados() {
   let Valor = parseFloat(prompt("Digite o valor para conversão:"));
   return Valor
}

function conversao() {
    let R = entradadedados() * 0.18;
    return R
}

function exibirResultado(){
    console.log(`${conversao()} dólares`);
}

exibirResultado();
module.exports = {};