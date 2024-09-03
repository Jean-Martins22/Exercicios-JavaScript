import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admininastro", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCursos(nomeCurso, qtdVagas){
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }
}

const novoAdmin = new Admin("Junin", "junin.com", "2024-01-01");
console.log(novoAdmin);
console.log(novoAdmin.criarCursos("JavaScript", 50));