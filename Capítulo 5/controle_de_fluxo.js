//1) Implemente um programa que determina se um número fornecido pelo usuário é par ou ímpar.
let numero = parseInt(prompt("Digite um número:"));
if (numero % 2 === 0) {
    console.log("O número é par.");
}
else {
console.log("O número é ímpar.");
}

//2) Escreva um programa que peça ao usuário para inserir três números distintos e, em seguida, imprima o maior deles.
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));
if (num1 > num2 && num1 > num3) {
    console.log("O maior número é: " + num1);
}   else if (num2 > num1 && num2 > num3) {
    console.log("O maior número é: " + num2);
}   else {
    console.log("O maior número é: " + num3);
}

//3) Crie um programa que receba três notas, calcula a média e informe se o aluno foi aprovado (média maior ou igual a 7) ou reprovado (média menor que 7).
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));  
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
if (media >= 7){
    console.log("Aluno aprovado com média: " + media);
} else {
    console.log("Aluno reprovado com média: " + media);
}

//4) Desenvolva um programa que receba o ano de nascimento de uma pessoa e informe se ela já é maior de idade ou não.
let nascimento = parseInt(prompt("Digite seu ano de nascimento:"));
let anoAtual = 2025; // Atualize o ano conforme necessário
let idade = anoAtual - nascimento + " anos";
if (idade >= 18) {
    console.log("Você é maior de idade." + idade);
} else {
    console.log("Você é menor de idade." + idade);
} 

// 5) Faça um programa que converte uma temperatura de Celsius para Fahrenheit ou vice-versa, dependendo da escolha do usuário.
let temperatura = parseFloat(prompt("Digite a temperatura:"));
let escolha = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:").toUpperCase();
if (escolha === 'C') {  
    let fahrenheit = (temperatura * 9/5) + 32;
    console.log("Temperatura em Fahrenheit: " + fahrenheit);
} else if (escolha === 'F') {
    let celsius = (temperatura - 32) * 5/9;
    console.log("Temperatura em Celsius: " + celsius);
}                  

//6) Escreva um programa que solicite dois números ao usuário e verifique se pelo menos um deles é múltiplo do outro. Se pelo menos um for múltiplo, exiba a mensagem "Pelo menos um dos números é múltiplo do outro". Caso contrário, exiba a mensagem "Nenhum dos números é múltiplo do outro".
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));
if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
    console.log("Pelo menos um dos números é múltiplo do outro.");
} else {
    console.log("Nenhum dos números é múltiplo do outro.");
}       

//7) Escreva um programa que peça ao usuário o valor de três lados de um  triângulo e classifique-o como triângulo equilátero, isósceles, escaleno ou inválido.
let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));
if (lado1 = lado2 && lado2 === lado3) {
    console.log("O triângulo é equilátero.");
} else if (lado1 == lado2 && lado1 != lado3 || lado1 == lado 3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado 1) {
    console.log("O triângulo é isósceles.");
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    console.log("O triângulo é escaleno.");
} else {
    console.log("Os lados fornecidos não formam um triângulo válido.");
}

//8) Crie um programa que simula um restaurante. O usuário escolhe um prato do menu (opções: pizza, hambúrguer, salada, macarrão) usando a instrução switch. Para cada prato escolhido, exiba o preço e a descrição do prato.
let prato = prompt("Escolha um prato do menu: pizza, hambúrguer, salada, macarrão: ");
switch (prato) {
    case "pizza":
        console.log("Pizza. Massa de pizza com queijo mussarela. Custa 30,00 reais.");
        break;
    case "hambúrguer":
        console.log("Hambúrguer. Pão com carne, queijo e alface. Custa 25,00 reais.");
        break;
    case "salada":
        console.log("Salada. Mix de folhas verdes com tomate e cenoura. Custa 15,00 reais.");
        break;
    case "macarrão":
        console.log("Macarrão. Espaguete com molho de tomate e queijo. Custa 20,00 reais.");
        break;  
    default:
        console.log("Prato não encontrado no menu.");
        break;     
}

//9) Escreva um programa que peça ao usuário sua altura e peso, calcule o IMC (Índice de Massa Corporal) e classifique conforme a tabela da OMS (abaixo do peso, peso normal, sobrepeso, obesidade). Exiba o valor do IMC e a respectiva classificação.
let altura = parseFloat(prompt("Digite sua altura em metros:"));
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let imc = peso / (altura * altura);
if (imc < 16) {
    console.log("Seu IMC é:  " + imc + "Magreza grave");
} else if (imc >= 16 && imc < 17) {
    console.log("Seu IMC é:  " + imc + "Magreza moderada");
} else if (imc >= 17 && imc < 18.5) {
    console.log("Seu IMC é:  " + imc + "Magreza leve");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Seu IMC é:  " + imc + "Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Seu IMC é:  " + imc + "Sobrepeso");
} else if (imc >= 30 && imc < 35) {
    console.log("Seu IMC é:  " + imc + "Obesidade grau I");
} else if (imc >= 35 && imc < 40) {
    console.log("Seu IMC é:  " + imc + "Obesidade grau II");
}  else if (imc >= 40) {
    console.log("Seu IMC é:  " + imc + "Obesidade grau III");
} 

//10) Escreva um programa que solicite ao usuário um número positivo e exiba todos os números pares de 0 até o número informado (use o laço de repetição while).
let numeroPositivo = parseInt(prompt("Digite um número positivo:"));
let contador = 0;
while (contador <= numeroPositivo) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
    contador++;
}

//11) Escreva um programa que solicite ao usuário um número positivo e exiba todos os números ímpares de 0 até o número informado (use o laço de repetição for).
let numeroPositivo = parseInt(prompt("Digite um número positivo:"));
for (let i = 0; i <= numeroPositivo; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
} 

//12) Crie um programa que calcule o fatorial de um número fornecido pelo usuário.
let fatorialNumero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (fatorialNumero >= 0) {
    let resultado = 1;
    let contador = 1;

    while (contador <= fatorialNumero) {
        resultado *= contador;
        contador++;
    }
    console.log("O fatorial de " + fatorialNumero + " é: " + resultado);
} 

//13) Implemente um jogo de adivinhação onde o computador gera um número aleatório entre 1 e 100 e o usuário tem que adivinhar qual é em até 10 tentativas. Verifique se cada palpite do usuário está correto, menor ou maior que o número secreto. Exiba mensagens informando o resultado de cada tentativa e forneça pistas (menor/maior) para ajudar o usuário. Para gerar um número aleatório entre 0 e 100 em JavaScript podemos usar Math.floor(Math.random() * 101), onde Math.random() retorna um valor entre 0 (inclusive) e 1 (exclusivo), multiplicado por 101 para incluir o 100, e Math.floor() arredonda o resultado para o número inteiro mais próximo.
let numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 10;
let acertou = false;
while (tentativas > 0 && !acertou) {
    let palpite = parseInt(prompt("Adivinhe o número entre 1 e 100. Você tem " + tentativas + " tentativas restantes:"));
    
    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou o número: " + numeroSecreto);
        acertou = true;
    } else if (palpite < numeroSecreto) {
        console.log("Seu palpite é menor que o número secreto.");
    } else {
        console.log("Seu palpite é maior que o número secreto.");
    }
    
    tentativas--;
}
module.exports = {};