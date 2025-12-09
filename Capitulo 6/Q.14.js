// obter os dados de altura e peso
function entradadedados() {
    let altura = parseFloat(prompt("Digite sua altura (em metros): "));
    let peso = parseFloat(prompt("Digite seu peso (em kg): "));
    return { altura, peso }; // retorna objeto
}

// realizar o cálculo
function calculo() {
    let { altura, peso } = entradadedados(); // pega os dois valores do objeto
    let imc = peso / (altura * altura); // fórmula correta
    return imc;
}

// exibir o resultado
function exibirResultado() {
    let imc = calculo(); // chama a função para pegar o valor

    if (imc > 24 && imc < 30) {
        console.log(`${imc.toFixed(2)} - Sobrepeso`);
    } else if (imc >= 30) {
        console.log(`${imc.toFixed(2)} - Obesidade`);
    } else if (imc >= 19 && imc <= 24) {
        console.log(`${imc.toFixed(2)} - Normal`);
    } else if (imc < 19) {
        console.log(`${imc.toFixed(2)} - Abaixo do peso`);
    }
}

exibirResultado();
module.exports = {};