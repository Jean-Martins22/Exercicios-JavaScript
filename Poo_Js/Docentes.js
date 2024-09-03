import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}, responsável: ${this.nome}.`
    }
}

const novoDocente = new Docente("Paulo", "paulo.com", "2024-01-01");
console.log(novoDocente);
console.log(novoDocente.aprovarEstudante("Kaio", "JavaScript"));