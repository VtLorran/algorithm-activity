const produto = {
    nome: 'samsung book 2',
    preco: 2800,
    quantidade: 12,
}

const calculo = () => {
    let total = produto.preco * produto.quantidade;
    return total
}

console.log(calculo());