class User {
  name;
  email;
  tasks = [];

  constructor(name, email) {
    this.name = name;

    this.email = email;
  }

  details() {
    return `nome: ${this.name} email: ${this.email}`;
  }

  addTask(task) {
    if (!task) {
      return new Error("Tarefa inválida");
    }
    this.tasks.push(...this.tasks, task);
  }
}

module.exports = User;
