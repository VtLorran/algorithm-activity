// Importando função soma do arquivo de operacoes
const { soma } = require('./Capítulo 8/Q3/operacoes');

// Usando a função
console.log('Teste da função soma:');
console.log(`soma(5, 3) = ${soma(5, 3)}`);
console.log(`soma(10, 20) = ${soma(10, 20)}`);

module.exports = { soma };
