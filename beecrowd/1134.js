var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number); //Saída de dados com quebra de linha; transforma em número.


//Contadores começando em zero para cada tipo de combustível.
let alcool = 0;
let gasolina = 0;
let diesel = 0;

//Laço que percorre todas as posições do array lines.
//lines.length é a quantidade de números lidos.
//i é o índice: 0, 1, 2, …

for ( let i = 0; i < lines.length; i++) {
    
    //Pega o número atual (da posição i) e guarda em codigo.
    let codigo = lines[i];


    //Se o código for 4, para tudo: break sai do laço imediatamente.
    //=== é comparação estrita (mesmo valor e mesmo tipo).
    if(i === 4) {
        break;
    }   


/*
        Se for 1, soma 1 em alcool.
        Se for 2, soma 1 em gasolina.
        Se for 3, soma 1 em diesel.
        Qualquer outro valor (inválido) é ignorado (não entra em nenhum if).
*/
    if(i===1) {
        alcool++;
    } else if(i === 2) {
        gasolina++;
    } else if(i === 3) {
        diesel++;
    }
}

console.log(`MUITO OBRIGADO`);
console.log(`Alcool: $(alcool)`);
console.log(`Gasolina: $(gasolina)`);
console.log(`Diesel: $(diesel)`);
