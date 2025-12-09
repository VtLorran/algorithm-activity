// 1. Soma de 25 com 17
let soma = 25 + 17;
console.log(soma);
// Soma os valores 25 e 17, resultando em 42

// 2. Diferença entre 250 e 100
let subtracao = 250 - 100;
console.log(subtracao);
// Subtrai 100 de 250, resultando em 150

// 3. Produto de 9 por 6
let multiplicacao = 9 * 6;
console.log(multiplicacao);
// Multiplica 9 vezes 6, o resultado é 54

// 4. Divisão de 144 por 12
let divisao = 144 / 12;
console.log(divisao);
// Divide 144 por 12, o quociente é 12

// 5. Módulo da divisão de 55 por 6
let resto = 55 % 6;
console.log(resto);
// Mostra o resto da divisão entre 55 e 6, que é 1

// 6. Valor inicial 10 e incremento em 1
let x = 10;
x++;
console.log(x);
// O valor 10 é incrementado para 11

// 7. Valor inicial 5 com dois decrementos
let y = 5;
y--;
y--;
console.log(y);
// O valor 5 é reduzido duas vezes, ficando em 3

// 8. Operações entre parênteses e multiplicação final
let resultado8 = (10 + 5 - 3) * 2;
console.log(resultado8);
// Primeiro soma e subtrai: (10 + 5 - 3) = 12, depois multiplica por 2: 24

// 9. Cálculo da média de 8, 7.5 e 10
let media = (8 + 7.5 + 10) / 3;
console.log(media);
// Soma os três valores e divide por 3 para obter a média: 8.5

// 10. Soma de b a a, depois multiplicação por 2
let a = 20;
let b = 5;
a += b;
a *= 2;
console.log(a);
// Soma 5 a 20, ficando 25, depois multiplica por 2, resultando em 50

// 11. Verificando se 10 é maior que 7
console.log(10 > 7);
// Retorna true, pois 10 realmente é maior que 7

// 12. Verificando se 5 é menor ou igual a 3
console.log(5 <= 3);
// Retorna false, pois 5 não é menor nem igual a 3

// 13. Comparação com igualdade fraca e estrita
console.log(7 == "7");
// true porque os valores são iguais (mesmo sendo de tipos diferentes)
console.log(7 === "7");
// false porque os tipos são diferentes (número e string)

// 14. Diferença entre !== e != com tipos diferentes
console.log(10 !== "10");
// true porque os tipos são diferentes
console.log(10 != "10");
// false porque o valor é o mesmo, mesmo com tipos diferentes

// 15. Verificação de duas condições verdadeiras com &&
console.log(5 > 3 && 8 < 10);
// Ambas as condições são verdadeiras, retorna true

// 16. Uma das condições é verdadeira com ||
console.log(5 < 3 || 8 === 8);
// A primeira é falsa, mas a segunda é verdadeira → retorna true

// 17. Negação da comparação 7 > 2
console.log(!(7 > 2));
// 7 > 2 é true, mas o ! inverte → resultado: false

// 18. Diferença de resultado com e sem parênteses
console.log((4 + 3) * 2);
// Parênteses fazem somar antes: 7 * 2 = 14
console.log(4 + 3 * 2);
// Multiplicação vem primeiro: 3 * 2 = 6 → 4 + 6 = 10

// 19. Potência de 2 elevado a 4
console.log(2 ** 4);
// 2 elevado à 4ª potência = 16

// 20. Operações encadeadas com parênteses e potência
console.log(((10 + 2) / 2) ** 2);
// Soma 10 + 2 = 12 → divide por 2 = 6 → eleva ao quadrado = 36

// 21. Verifica se as duas expressões são equivalentes
console.log(4 + 4 == 2 * 4);
// Ambas resultam em 8, então retorna true

// 22. Expressão com resultado falso usando negação
console.log(5 == 5 && !(3 == 3));
// 5 == 5 é true, 3 == 3 também, mas é negado → false final

// 23. Expressão lógica que retorna verdadeiro
console.log(1 !== 2 || 5 !== 5 || 3 == 3 || 0 !== 0);
// Uma das expressões é verdadeira (3 == 3), logo retorna true

// 24. Soma com multiplicação e exponenciação
let resultado24 = 5 + 3 * 2 ** 2;
console.log(resultado24);
// 2² = 4 → 3 * 4 = 12 → 5 + 12 = 17

// 25. Atualização de variável com += e depois divisão
let r = 3;
r += 2 * 4; // r = 11
r /= 2; // r = 5.5
console.log(r);
// Primeiro soma 8 ao r (ficando 11), depois divide por 2

// 26. Concatenando nome e sobrenome
let nome = "Ana";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);
// Junta as duas strings com espaço: Ana Silva

// 27. Comparação de string com número concatenado
console.log("5" + 5 == 55);
// "5" + 5 vira "55", e compara com número 55 → true (coerção implícita)

// 28. Avaliação de expressão lógica com && e ||
console.log((true && false) || true);
// true && false = false → false || true = true

// 29. Verifica se a expressão composta é verdadeira
console.log(3 + 2 == 5 && 10 > 2);
// 3 + 2 é 5 e 10 > 2 → true && true = true

// 30. Expressão lógica com precedência e negação
let resultado30 = 10 + 5 * 2 > 30 / 2 && !false;
// 5 * 2 = 10 → 10 + 10 = 20 → 30 / 2 = 15 → 20 > 15 = true → true && true = true
console.log(resultado30);
// Resultado final: true
module.exports = {};