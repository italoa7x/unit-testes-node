class Usuario {
  name;
  email;

  constructor(name, email) {
    this.name = name;

    this.email = email;
  }

  details() {
    return `nome: ${this.name} email: ${this.email}`;
  }
}

module.exports = Usuario;
