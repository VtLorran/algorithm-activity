var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines[0]); 

for (let i = 1; i <= T; i++) {
    let [PA, PB, G1, G2] = lines[i].split(" ").map(Number);

    let anos = 0;

    while (PA <= PB && anos <= 100) {
        PA += Math.floor(PA * (G1 / 100));
        PB += Math.floor(PB * (G2 / 100));
        anos++;
    }

    if (anos > 100) {
        console.log("Mais de 1 seculo.");
    } else {
        console.log(`${anos} anos.`);
    }
}
