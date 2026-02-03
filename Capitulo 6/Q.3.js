//Calcular a média de 3 números

//1) Função para calcular a média
function CalcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3)/3;
}

//2) Função para exibir resultado 
function ExibirResultado(nome, media) {
    console.log(`Aluno: ${nome}; Média: ${media.toFixed(1)}`);
}

//entrada de dados, do nome e da média, utilizando laço "for" para obter dados de 3 alunos.
for (let i = 1; i <= 3; i++) {
    let nome = prompt(`Digite o nome aluno ${i}:`).trim();
    let nota1 = parseFloat(prompt(`Digite a 1° nota do aluno ${i}:`));
    let nota2 = parseFloat(prompt(`Digite a 2° nota do aluno ${i}:`));
    let nota3 = parseFloat(prompt(`Digite a 3° nota do aluno ${i}:`));

let media = CalcularMedia(nota1, nota2, nota3);
ExibirResultado(nome, media);
}
module.exports = {};