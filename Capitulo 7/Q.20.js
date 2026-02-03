const pessoas = [
    {nome: 'Vítor', idade: 17},
    {nome: 'Lorran', idade: 19},
    {nome: 'Luís', idade: 30},
    {nome: 'Carlos', idade: 16},
    {nome: 'Kauan', idade: 12},
]

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 18)
console.log(pessoaEncontrada.nome);
module.exports = {};