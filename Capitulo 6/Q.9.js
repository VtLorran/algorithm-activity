//Calcular a média de 3 números

const CalcularMedia = (n1, n2, n3) => (n1 + n2 + n3)/3;


const ExibirResultado = (nome, media) => console.log(`Aluno: ${nome}; Média: ${media.toFixed(1)}`); 
    

for (let i = 1; i <= 3; i++) {
    let nome = prompt(`Digite o nome aluno ${i}:`).trim();
    let nota1 = parseFloat(prompt(`Digite a 1° nota do aluno ${i}:`));
    let nota2 = parseFloat(prompt(`Digite a 2° nota do aluno ${i}:`));
    let nota3 = parseFloat(prompt(`Digite a 3° nota do aluno ${i}:`));

let media = CalcularMedia(nota1, nota2, nota3);
ExibirResultado(nome, media);
}
