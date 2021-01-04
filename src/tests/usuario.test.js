const User = require("../models/User");
const Task = require("../models/Task");

describe("deve tester o modulo de usuarios", () => {
  it("deve instanciar um novo usuario", () => {
    usuario = new User("italo", "italo@gmail.com");

    expect(usuario.name).toBe("italo");
  });

  it("deve instanciar um usuario com email valido", () => {
    usuario = new User("italo", "italo@gmail.com");

    expect(usuario.email).toBe("italo@gmail.com");
  });

  it("deve dar erro ao consultar o nome que nao foi passado na instanciacao de um usuario", () => {
    usuario = new User("italo", null);

    expect(usuario.email).not.toBe("emailqualquer@gmail.com");
  });

  it("deve verificar se o nome e o email esperado são os mesmos informados no instanciacao do usuario", () => {
    usuario = new User("italo", "italo@gmail.com");

    expect(usuario.details()).toBe("nome: italo email: italo@gmail.com");
  });

  it("deve verificar se foi exibido undefined ao exibir os detalhes do usuario", () => {
    usuario = new User(null, null);

    expect(usuario.details()).toBe("nome: null email: null");
  });

  it("adiciona uma tarefa ao usuario", () => {
    const tarefa = new Task(
      "tarefa 1",
      "descricao tarefa 1",
      new Date().toLocaleDateString()
    );
    const usuario = new User("italo", "italo@gmail.com");

    usuario.addTask(tarefa);
    expect(usuario.tasks.length).toBe(1);
  });

  it("deve retornar uma lista vazia ao tentar adicionar uma tarefa invalida", () => {
    const tarefa = null;
    const usuario = new User("italo", "italo@gmail.com");

    usuario.addTask(tarefa);
    expect(usuario.tasks.length).toBe(0);
  });
});
