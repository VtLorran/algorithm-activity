//Calculadora

function soma(n1,n2) {
    return n1+n2;
}

function multiplicacao(n1,n2) {
    return n1*n2;
}

function divisao(n1, n2) {
    return n1/n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function calculadora(){
    let numero1 = parseFloat(prompt("Digite o primeiro número: "));
    let operacoes = prompt("Qual operação? (+, /, *, -) ") 
    let numero2 = parseFloat(prompt("Digite o segundo número: "));

    if (operacoes == "+") {
        console.log(soma(numero1, numero2));
    } else if (operacoes == "-") {
        console.log(subtracao(numero1, numero2));
    } else if(operacoes == "*") {
        console.log(multiplicacao(numero1, numero2));
    } else if(operacoes == "/") {
        console.log(divisao(numero1, numero2));
    } else {
        console.log("Coloque um operador válido.")
    }
}

calculadora();
module.exports = {};