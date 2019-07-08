// Você pode utilizar este arquivo para testar no console o retorno da função.
// Basta executar "node console/troco.js" passando como argumento um numero
// Ex: node console/troco.js 188.86

const Troco = require('../src/Troco');

quantidadeReais = process.argv[2] || 0;
console.log(Troco.getQtdeNotas(quantidadeReais));