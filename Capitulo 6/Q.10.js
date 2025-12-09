const calcularMedia = (n1, n2) => (n1 + n2)/2;
const ExibirResultado = media => console.log(`Sua média foi: ${media}`);

let nota1 = parseInt(prompt("1°nota?"));
let nota2 = parseInt(prompt("2°nota?"));

let media = ExibirResultado(calcularMedia(nota1,nota2));
module.exports = {};