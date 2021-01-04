class Usuario {
  name;
  email;
  tarefas = [];

  constructor(name, email) {
    this.name = name;

    this.email = email;
  }

  details() {
    return `nome: ${this.name} email: ${this.email}`;
  }

  adicionarTarefa(tarefa) {
    if (!tarefa) {
      return new Error("Tarefa inválida");
    }
    this.tarefas.push(...this.tarefas, tarefa);
  }
}

module.exports = Usuario;
