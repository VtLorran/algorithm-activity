// Função para gerar um número aleatório
function gerarnumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// Função para a adivinhação do número
function adivinhacao() {
    const numerosecreto = gerarnumero(1, 100);
    let tentativas = 10; 
    let acertou = false;

    console.log("Bem-vindo ao jogo de adivinhação! Você tem 10 tentativas para acertar o número secreto.");

    while (tentativas > 0 && !acertou) {
        let palpite = parseInt(prompt(`Digite seu palpite (1 a 100). Tentativas restantes: ${tentativas}`));

        if (palpite === numerosecreto) {
            console.log("🎉 Parabéns! Você acertou o número secreto!");
            acertou = true;
        } else if (palpite > numerosecreto) {
            console.log("❌ O número secreto é MENOR.");
        } else if (palpite < numerosecreto) {
            console.log("❌ O número secreto é MAIOR.");
        } else {
            console.log("⚠️ Digite um número válido!");
        }

        tentativas--;
    }

    if (!acertou) {
        console.log(`☹️ Acabaram suas tentativas. O número secreto era: ${numerosecreto}`);
    }
}

adivinhacao();
module.exports = {};