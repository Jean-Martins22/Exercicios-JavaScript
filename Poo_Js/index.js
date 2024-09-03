import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docentes.js";

const novoUser = new User("Binho", "binho.com", "2024-01-01");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Junin", "junin.com", "2024-01-01");
console.log(novoAdmin.criarCursos("JavaScript", 50));

const novoDocente = new Docente("Paulo", "paulo.com", "2024-01-01");
console.log(novoDocente.aprovarEstudante("Kaio", "JavaScript"));