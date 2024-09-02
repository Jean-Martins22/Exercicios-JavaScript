const user = {
  nome: 'Jean',
  email: 'jean.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true,

  exibirInfos: function() {
      console.log(this.nome, this.email);
      
  }
};

const admin = {
  nome: 'Junior',
  email: 'junior.com',
  nascimento: '2024-01-01',
  role: 'adminininastro',
  ativo: true,
  criarCurso: function() {
    console.log('Curso criado');
      
  }
};

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()