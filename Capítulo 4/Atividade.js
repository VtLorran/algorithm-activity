/* 1. O que é uma variável na programação? Por que são necessárias?

Variável é um identificador (apelido) atribuído pelo programador a um espaço
de memória do computador que armazena um valor. Suas características são:
Nome; tipo e valor. */


/* 2. O que é tipagem dinâmica em JavaScript? Como ela difere da
tipagem estática?

A tipagem dinâmica em JavaScript significa que o tipo das variáveis
é definido em tempo de execução, permitindo que uma mesma
variável receba valores de diferentes tipos ao longo do código. Isso
difere da tipagem estática, em que o tipo é definido no momento da
declaração e não pode mudar, como ocorre em linguagens como
Java ou C. */


/* 3. Por que é importante escolher nomes descritivos para variáveis
em JavaScript? Qual é o impacto de escolher nomes inadequados?

Escolher nomes descritivos para variáveis em JavaScript é
importante porque torna o código mais claro, legível e fácil de
entender, tanto para quem escreve quanto para quem for ler ou
manter o código depois. Nomes inadequados ou genéricos podem
causar confusão, dificultar a identificação da função da variável e
aumentar as chances de erros durante o desenvolvimento. */


/* 4. Escreva um programa que utilize a instrução `console.log()` para
exibir uma mensagem de boas-vindas ao usuário. */

console.log('Bem vindo');

/* 5. Qual é a diferença entre as palavras-chave `var`, `let` e `const`
em JavaScript? 

Var é a a palavra-chave mais antiga, com escopo de função, já o let
é a palavra-chave moderna recomendada, com escopo de bloco. E
o const é utilizado para declarar variáveis constantes (que não
podem ser reatribuídas). */

/* 6. Escreva um programa que declare uma variável para armazenar
um número inteiro e outra variável para armazenar um número
decimal. Em seguida, imprima o tipo de dado de cada variável. */

let numeroInteiro = 20;
const numerodecimal = 2.14;
console.log(numeroInteiro);
console.log(numerodecimal);

/* 7. Utilize comentários de linha única e comentários de várias linhas
em um programa simples que você escrever. */
//Toda a atividade está em comentários

/* 8. Escreva um programa que solicite ao usuário seu nome e exiba-o
no console. */

let nome1 = prompt('digite seu nome: ');
console.log(nome);

/* 9. Escreva um programa que peça ao usuário para digitar sua idade
e exiba-a no console. */

let idade2 = prompt('Digite sua idade: ');
console.log(idade)


/* 10. Escreva um programa que solicite ao usuário o seu nome e sua
idade e em seguida imprima essas informações juntas em uma
única linha. */ 

let nome = prompt('digite seu nome: ')
let idade3 = prompt('digite sua idade: ');
console.log('olá', + nome + idade)

/* 11. Escreva um programa que solicite ao usuário um número e
converta-o para número usando `parseInt()`. Em seguida, exiba o
número convertido no console. */

let numero = prompt();
let conversao = parseInt(numero);
console.log(conversao);

/* 12. Escreva um programa que peça ao usuário para digitar sua
altura em metros e converta-a para número de ponto flutuante
usando `parseFloat()`. Em seguida, exiba a altura convertida no
console. */

let alturaTexto = prompt();
let altura = parseFloat(alturaTexto);

/* 13. Escreva um programa que solicite ao usuário sua idade e
converta-a para número usando `Number()`. Em seguida, exiba a
idade no console. */

let idadeTexto = prompt();
let idade = Number(idadeTexto);
console.log(idade);