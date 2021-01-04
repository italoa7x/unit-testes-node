const Usuario = require("./models/Usuario");

describe("deve tester o modulo de usuarios", () => {
  it("deve instanciar um novo usuario", () => {
    usuario = new Usuario("italo", "italo@gmail.com");

    expect(usuario.name).toBe("italo");
  });

  it("deve instanciar um usuario com email valido", () => {
    usuario = new Usuario("italo", "italo@gmail.com");

    expect(usuario.email).toBe("italo@gmail.com");
  });

  it("deve dar erro ao consultar o nome que nao foi passado na instanciacao de um usuario", () => {
    usuario = new Usuario("italo", null);

    expect(usuario.email).not.toBe("emailqualquer@gmail.com");
  });

  it("deve verificar se o nome e o email esperado são os mesmos informados no instanciacao do usuario", () => {
    usuario = new Usuario("italo", "italo@gmail.com");

    expect(usuario.details()).toBe("nome: italo email: italo@gmail.com");
  });

  it("deve verificar se foi exibido undefined ao exibir os detalhes do usuario", () => {
    usuario = new Usuario(null, null);

    expect(usuario.details()).toBe("nome: null email: null");
  });
});
