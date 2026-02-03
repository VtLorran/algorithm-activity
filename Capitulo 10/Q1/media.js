function media(...valores) {
    let soma = 0;
    for(let i=0; i<valores.length; i++) {
        soma += valores[i];
    }
    return soma/valores.length
}

module.exports = media;