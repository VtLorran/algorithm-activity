var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valor = parseFloat(input); //Lê o valor digitado (float com duas casas) 

let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

//Multplica por 100 e arredonda; Math.round => arredonda números decimais acima de 4, e abaixo de 5, mantém o mesmo número. Ex: 1,2 = 1 , 1,7 = 2; 
let centavos = Math.round(valor * 100);

console.log("NOTAS:");

//for...of => Ele serve para percorrer diretamente os valores de um array.
//“A cada volta do laço, pega um valor dentro do array notas e coloca dentro da variável nota”. 
for (let nota of notas) {

    // Definição da variável 'qtd' => Pega o valor convertido em centavos e divide pela nota obtida no laço e multiplica por 1000
    //Assim, irá se obter, a quantidade de notas que tem da minha variável 'nota'.
    /* 
        Valor inicial = 573 reais
        ('centavos' irá multipicar esse valor por 100 transformando-o em centavos)
        centavos = 57300
        (meu laço for...of, irá pegar um valor da variável 'notas' no primeiro laço e atribuir à 'nota'. ex: nota = 100)
        qtd = 57300 / 100*100
        qtd = 57300 / 10000
        qtd = 5.73
        (Math.floor irá pegar o valor apenas da parte inteira, nesse caso, o 5)
        qtd = 5
        então, são 5 notas de 100.
    */
    let qtd = Math.floor(centavos / (nota * 100));
    console.log(`${qtd} nota(s) de R$ ${nota.toFixed(2)}`); //seguindo nosso exemplo: saída: 5 nota(s) de R$ 100.00

    //% => pega o resto da divisão e vai atribuir um novo valor à variável 'centavos', para continuar executando o código até que não reste mais nada.
    centavos %= (nota * 100);
}

console.log("MOEDAS:");
for (let moeda of moedas) {
    let qtd = Math.floor(centavos / Math.round(moeda * 100));
    console.log(`${qtd} moeda(s) de R$ ${moeda.toFixed(2)}`);
    centavos %= Math.round(moeda * 100);
}
