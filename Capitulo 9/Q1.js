class Usuario {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.seguidores = [];
        this.seguindo = [];
        this.posts = [];
    }

    seguirUsuario(outroUsuario) {
        if (!this.seguindo.includes(outroUsuario)) {
            this.seguindo.push(outroUsuario);
            outroUsuario.seguidores.push(this);
        }
    }

    criarPost(texto) {
        const post = new Post(this, texto);
        this.posts.push(post);
        return post;
    }

    listarPosts() {
        return this.posts;
    }
}


class Post {
    constructor(autor, texto) {
        this.autor = autor;
        this.texto = texto;
        this.data = new Date();
        this.curtidas = 0;
        this.comentarios = [];
    }

    curtir() {
        this.curtidas++;
    }

    comentar(usuario, texto) {
        const comentario = new Comentario(usuario, texto);
        this.comentarios.push(comentario);
    }

    resumo() {
        return `${this.autor.nome}: ${this.texto} (${this.curtidas} curtidas)`;
    }
}

class RedeSocial {
    constructor() {
        this.usuarios = [];
        this.postsGerais = [];
    }

    cadastrarUsuario(nome, dataNascimento) {
        const usuario = new Usuario(nome, dataNascimento);
        this.usuarios.push(usuario);
        return usuario;
    }

    publicar(usuario, texto) {
        const post = usuario.criarPost(texto);
        this.postsGerais.push(post);
        return post;
    }

    feed(usuario) {
        let feed = [];

        usuario.seguindo.forEach(u => {
            feed = feed.concat(u.posts);
        });

        feed.sort((a, b) => b.data - a.data);

        return feed;
    }

    listarUsuarios() {
        return this.usuarios;
    }
}


const usuario1 = new Usuario("Alice", new Date("1990-05-15"));
const usuario2 = new Usuario("Bob", new Date("1985-10-22"));

usuario2.seguirUsuario(usuario1);

console.log(usuario1.nome);
console.log(usuario2.nome);

console.log(usuario1.seguidores.length);
console.log(usuario2.seguidores.length);

module.exports = {};