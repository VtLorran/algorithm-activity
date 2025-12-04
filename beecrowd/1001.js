let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

 A = parseInt(lines.shift());
 B = parseInt(lines.shift());
var X = A + B;
 // Recebam entradas no usuário dessa forma
 console.log(`X = ${X}`);