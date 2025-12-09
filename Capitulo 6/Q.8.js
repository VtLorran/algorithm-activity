function testeEscopo() {
    if (true) {
        let numero = 10; // variável dentro do bloco if
        console.log("Dentro do bloco:", numero); // funciona
    }

    console.log("Fora do bloco:", numero); // ReferenceError: numero is not defined
}

testeEscopo();
module.exports = {};