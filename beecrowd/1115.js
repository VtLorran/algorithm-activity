// x>0 e y>0 => primeiro quadrante 
// x>0 e y<0 => quarto quadrante
// x<0 e y>0 => segundo quadrante
// x e y, ambos < 0 => terceiro quadrante


var input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
var lines = input.split('\n'); 

while (true) { 
    let [X, Y] = lines.shift().split(" ").map(Number);
    
    
    if (X === 0 || Y === 0) break; 
    
    
    if (X > 0 && Y > 0) { 
        console.log("primeiro"); 
    } else if (X < 0 && Y > 0) { 
        console.log("segundo"); 
    } else if (X < 0 && Y < 0) { 
        console.log("terceiro"); 
    } else if (X > 0 && Y < 0) { 
        console.log("quarto"); 
    } 
}
module.exports = {};