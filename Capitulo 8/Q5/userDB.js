// banco de dados de usuários
function criarUsuarios(nome, email, senha) {
    return {
        nome,
        email,
        senha,
        renomear(novoNome) {
            this.nome = novoNome;
            return nome;
        },
        alterarSenha(novaSenha) {
            this.senha = novaSenha;
            return senha;
        },
        alterarEmail(novoEmail) {
            this.email = novoEmail;
            return email;
        }
    }
}

const usuarios = [
  criarUsuarios('Vitor', 'vitor2707@gmail.com', 123456),
  criarUsuarios('Lorran', 'lorran2707@gmail.com', 678910),
  criarUsuarios('Carvalho', 'carvalho2707@gmail.com', 11121314)
];

module.exports = {usuarios};