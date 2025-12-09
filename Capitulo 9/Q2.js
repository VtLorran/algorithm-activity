class Livro {
    constructor(id, titulo, autor, ano) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;

        this.disponivel = true;
    }

    marcarComoEmprestado() {
        this.disponivel = false;
    }

    marcarComoDevolvido() {
        this.disponivel = true;
    }

    toString() {
        return `${this.titulo} - ${this.autor} (${this.ano})`;
    }
}


class Usuario {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.emprestimos = [];
    }

    adicionarEmprestimo(emprestimo) {
        this.emprestimos.push(emprestimo);
    }

    toString() {
        return `${this.nome}`;
    }
}

class Emprestimo {
    constructor(usuario, livro) {
        this.usuario = usuario;
        this.livro = livro;
        this.dataEmprestimo = new Date();
        this.dataDevolucao = null;
    }

    devolver() {
        this.dataDevolucao = new Date();
    }

    isAtivo() {
        return this.dataDevolucao === null;
    }
}


class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.emprestimos = [];
    }

    adicionarLivro(titulo, autor, ano) {
        const livro = new Livro(this.livros.length + 1, titulo, autor, ano);
        this.livros.push(livro);
        return livro;
    }

    cadastrarUsuario(nome) {
        const usuario = new Usuario(this.usuarios.length + 1, nome);
        this.usuarios.push(usuario);
        return usuario;
    }

    buscarLivroPorId(id) {
        return this.livros.find(l => l.id === id) || null;
    }

    buscarUsuarioPorId(id) {
        return this.usuarios.find(u => u.id === id) || null;
    }

    emprestarLivro(idLivro, idUsuario) {
        const livro = this.buscarLivroPorId(idLivro);
        const usuario = this.buscarUsuarioPorId(idUsuario);

        if (!livro || !usuario) return "Livro ou usuário não encontrado.";
        if (!livro.disponivel) return "Livro já está emprestado.";

        livro.marcarComoEmprestado();

        const emprestimo = new Emprestimo(usuario, livro);
        usuario.adicionarEmprestimo(emprestimo);
        this.emprestimos.push(emprestimo);

        return "Empréstimo realizado com sucesso!";
    }

    devolverLivro(idLivro) {
        const emprestimo = this.emprestimos.find(e => e.livro.id === idLivro && e.isAtivo());

        if (!emprestimo) return "Esse livro não está emprestado.";

        emprestimo.devolver();
        emprestimo.livro.marcarComoDevolvido();

        return "Livro devolvido com sucesso!";
    }

    listarLivrosDisponiveis() {
        return this.livros.filter(l => l.disponivel);
    }

    listarEmprestimosAtivos() {
        return this.emprestimos.filter(e => e.isAtivo());
    }
}

const biblioteca = new Biblioteca();

let l1 = biblioteca.adicionarLivro("Dom Quixote", "Miguel de Cervantes", 1605);
let l2 = biblioteca.adicionarLivro("1984", "George Orwell", 1949);

let u1 = biblioteca.cadastrarUsuario("Alice");
let u2 = biblioteca.cadastrarUsuario("Bob");

console.log(biblioteca.emprestarLivro(1, 1)); 

console.log(biblioteca.listarLivrosDisponiveis());

console.log(biblioteca.devolverLivro(1));

console.log(biblioteca.listarLivrosDisponiveis());

module.exports = {};