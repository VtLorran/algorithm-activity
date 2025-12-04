var input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
var lines = input.split('\n'); 

while (true) { 
    let S = parseInt(lines.shift()); 
    if (S === 2002) {
        console.log("Acesso Permitido");
        break; 
    } else {
        console.log("Senha Invalida");
    }
}