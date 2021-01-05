class User {
  name;
  email;
  tasks = [];
  password;

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

  addPassword(password) {
    if (password.lenght <= 4) {
      return new Error("Tamanho inválido!");
    }
    this.password = password;
  }
}

module.exports = User;
