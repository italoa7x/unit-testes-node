const Tarefa = require("../models/Task");
describe("testa tarefas", () => {
  it("deve criar uma instancia de tarefa com todos os dados", () => {
    tarefa = new Tarefa(
      "titulo teste",
      "descricao teste",
      new Date().toLocaleDateString()
    );

    expect(tarefa.dateCriation).toBe(new Date().toLocaleDateString());
  });

  it("deve criar uma instancia de tarefa e verificar que será retornado nulo quando nao informado dados", () => {
    tarefa = new Tarefa(null, null, null);

    expect(tarefa.describe).not.toBe("description test");
  });
});
