const { Usuario, Post, Comentario, RedeSocial } = require("../redeSocial");

describe("Classe Usuario", () => {
  test("deve criar um usuário corretamente", () => {
    const usuario = new Usuario("Vitor", "2005-01-01");

    expect(usuario.nome).toBe("Vitor");
    expect(usuario.dataNascimento).toBe("2005-01-01");
    expect(usuario.seguidores).toEqual([]);
    expect(usuario.seguindo).toEqual([]);
    expect(usuario.posts).toEqual([]);
  });

  test("deve seguir outro usuário corretamente", () => {
    const u1 = new Usuario("Ana", "2004-01-01");
    const u2 = new Usuario("João", "2003-01-01");

    u1.seguirUsuario(u2);

    expect(u1.seguindo).toContain(u2);
    expect(u2.seguidores).toContain(u1);
  });

  test("não deve seguir o mesmo usuário duas vezes", () => {
    const u1 = new Usuario("Ana", "2004-01-01");
    const u2 = new Usuario("João", "2003-01-01");

    u1.seguirUsuario(u2);
    u1.seguirUsuario(u2);

    expect(u1.seguindo.length).toBe(1);
    expect(u2.seguidores.length).toBe(1);
  });

  test("deve criar e listar posts", () => {
    const usuario = new Usuario("Vitor", "2005-01-01");

    const post = usuario.criarPost("Olá mundo");

    expect(post).toBeInstanceOf(Post);
    expect(usuario.listarPosts()).toContain(post);
  });
});

describe("Classe Comentario", () => {
  test("deve criar um comentário corretamente", () => {
    const usuario = new Usuario("Ana", "2004-01-01");
    const comentario = new Comentario(usuario, "Legal!");

    expect(comentario.usuario).toBe(usuario);
    expect(comentario.texto).toBe("Legal!");
    expect(comentario.data).toBeInstanceOf(Date);
  });
});

describe("Classe Post", () => {
  test("deve curtir um post", () => {
    const usuario = new Usuario("João", "2003-01-01");
    const post = new Post(usuario, "Meu primeiro post");

    post.curtir();
    post.curtir();

    expect(post.curtidas).toBe(2);
  });

  test("deve comentar um post", () => {
    const autor = new Usuario("João", "2003-01-01");
    const comentarista = new Usuario("Ana", "2004-01-01");
    const post = new Post(autor, "Post de teste");

    const comentario = post.comentar(comentarista, "Gostei!");

    expect(post.comentarios).toContain(comentario);
    expect(comentario).toBeInstanceOf(Comentario);
    expect(comentario.texto).toBe("Gostei!");
  });

  test("deve retornar o resumo corretamente", () => {
    const usuario = new Usuario("Vitor", "2005-01-01");
    const post = new Post(usuario, "Teste");

    post.curtir();
    post.curtir();

    expect(post.resumo()).toBe("Vitor: Teste (2 curtidas)");
  });
});

describe("Classe RedeSocial", () => {
  test("deve cadastrar usuários", () => {
    const rede = new RedeSocial();

    const u1 = rede.cadastrarUsuario("Ana", "2004-01-01");
    const u2 = rede.cadastrarUsuario("João", "2003-01-01");

    expect(rede.listarUsuarios()).toContain(u1);
    expect(rede.listarUsuarios()).toContain(u2);
  });

  test("deve publicar posts", () => {
    const rede = new RedeSocial();
    const usuario = rede.cadastrarUsuario("Vitor", "2005-01-01");

    const post = rede.publicar(usuario, "Meu post");

    expect(rede.postsGerais).toContain(post);
    expect(usuario.posts).toContain(post);
  });

  test("deve gerar o feed com posts dos usuários seguidos", () => {
    const rede = new RedeSocial();
    const u1 = rede.cadastrarUsuario("Ana", "2004-01-01");
    const u2 = rede.cadastrarUsuario("João", "2003-01-01");

    u1.seguirUsuario(u2);

    const post1 = rede.publicar(u2, "Post 1");
    const post2 = rede.publicar(u2, "Post 2");

    const feed = rede.feed(u1);

    expect(feed).toContain(post1);
    expect(feed).toContain(post2);
  });

  test("feed deve estar ordenado por data (mais recente primeiro)", async () => {
    const rede = new RedeSocial();
    const u1 = rede.cadastrarUsuario("Ana", "2004-01-01");
    const u2 = rede.cadastrarUsuario("João", "2003-01-01");

    u1.seguirUsuario(u2);

    const post1 = rede.publicar(u2, "Post antigo");
    await new Promise(resolve => setTimeout(resolve, 10));
    const post2 = rede.publicar(u2, "Post novo");

    const feed = rede.feed(u1);

    expect(feed[0]).toBe(post2);
    expect(feed[1]).toBe(post1);
  });
});
