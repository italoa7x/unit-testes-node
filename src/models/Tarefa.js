class Tarefa {
  titulo;
  descricao;
  dataCriacao;

  constructor(titulo, descricao, dataCriacao) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.dataCriacao = dataCriacao;
  }
}

module.exports = Tarefa;
