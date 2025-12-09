var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Número de casos de teste
const T = parseInt(lines[0]);

// Regras: para cada escolha, as opções que ela derrota
const vence = {
    'tesoura': ['papel', 'lagarto'],
    'papel': ['pedra', 'Spock'],
    'pedra': ['lagarto', 'tesoura'],
    'lagarto': ['Spock', 'papel'],
    'Spock': ['tesoura', 'pedra']
};

// Processar cada caso
for (let i = 1; i <= T; i++) {
    const [sheldon, raj] = lines[i].split(' ');
    
    if (sheldon === raj) {
        console.log(`Caso #${i}: De novo!`);
    } else if (vence[sheldon].includes(raj)) {
        console.log(`Caso #${i}: Bazinga!`);
    } else {
        console.log(`Caso #${i}: Raj trapaceou!`);
    }
}
module.exports = {};