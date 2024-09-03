import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admininastro", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCursos(nomeCurso, qtdVagas){
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }
}