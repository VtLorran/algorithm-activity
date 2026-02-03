class Musica {
    constructor(titulo, artista, duracao, arquivo) {
        this.titulo = titulo;
        this.artista = artista;       
        this.duracao = duracao;       
        this.arquivo = arquivo;      
        this.tocando = false;
    }

    reproduzir() {
        this.tocando = true;
        console.log(`▶️ Reproduzindo: ${this.titulo} - ${this.artista.nome}`);
    }

    pausar() {
        this.tocando = false;
        console.log(`⏸️ Música pausada: ${this.titulo}`);
    }
}


class Artista {
    constructor(nome, foto) {
        this.nome = nome;
        this.foto = foto;
        this.musicas = [];
    }

    listaDeMusicas() {
        return this.musicas;
    }

    adicionarMusica(musica) {
        if (!this.musicas.includes(musica)) {
            this.musicas.push(musica);
        }
    }

    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica);
    }
}


class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.musicas = [];
        this.musicaAtual = 0;
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica);
    }

    reproduzir() {
        if (this.musicas.length === 0) {
            console.log("Nenhuma música na playlist.");
            return;
        }

        const musica = this.musicas[this.musicaAtual];
        musica.reproduzir();
    }

    avancarMusica() {
        if (this.musicas.length === 0) {
            console.log("Playlist vazia.");
            return;
        }

        this.musicaAtual++;
        if (this.musicaAtual >= this.musicas.length) {
            this.musicaAtual = 0;
        }

        this.reproduzir();
    }
}


const artista1 = new Artista("Zé vaqueiro", "foto.jpg");

const m1 = new Musica("Se você se entregar", artista1, 200, "https://www.youtube.com/watch?v=0zxvFZ42I48");
const m2 = new Musica("Um dia", artista1, 220, "https://www.youtube.com/watch?v=0zxvFZ42I48");

artista1.adicionarMusica(m1);
artista1.adicionarMusica(m2);

const playlist = new Playlist("Favoritas");

playlist.adicionarMusica(m1);
playlist.adicionarMusica(m2);

playlist.reproduzir();        
playlist.avancarMusica();    

module.exports = {};