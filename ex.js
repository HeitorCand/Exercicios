
// class Animal {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   descrever() {
//     console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos`);
//   }
// }


// class Gato extends Animal {
//   constructor(nome, idade, cor) {
//     super(nome, idade);
//     this.cor = cor;
//   }

//   miar() {
//     console.log(`${this.nome} faz: Miau!`);
//   }
// }


// let cachorro = new Animal('mario', 10);
// let gato = new Gato('jose', 5, 'Preto e Branco');

// cachorro.descrever();
// gato.descrever();
// gato.miar();

// // =================== 9 ======================
// class SomadorDeNotas {
//   constructor() {
//     this.total = 0;
//   }
//   adicionarNota(nota) {
//     this.total += nota;
//   }
//   verTotal() {
//     console.log(`Total de notas: ${this.total}`);
//   }
// }

// const somador = new SomadorDeNotas();

// somador.adicionarNota(5);
// somador.adicionarNota(8);
// somador.adicionarNota(7);

// somador.verTotal();

// Definição da classe Funcionário
class Funcionario {
  // Construtor da classe com atributos comuns a todos os funcionários
  constructor(nome, idade, salarioBase) {
      this.nome = nome;
      this.idade = idade;
      this.salarioBase = salarioBase;
  }

  // Método para calcular o salário total do funcionário (método genérico)
  calcularSalario() {
      // Por padrão, o salário total é igual ao salário base
      return this.salarioBase;
  }
}

// Definição da classe Professor, que herda de Funcionário
class Professor extends Funcionario {
  // Construtor da classe Professor, com atributos específicos
  constructor(nome, idade, salarioBase, disciplina, horasAulaPorSemana) {
      // Chamada ao construtor da classe pai (Funcionario)
      super(nome, idade, salarioBase);

      // Atributos específicos do Professor
      this.disciplina = disciplina;
      this.horasAulaPorSemana = horasAulaPorSemana;
  }

  // Sobrescrita do método calcularSalario para o Professor
  calcularSalario() {
      // O salário do professor é calculado multiplicando suas horas de aula pelo valor da hora/aula
      const valorHoraAula = 20; // Valor fictício da hora/aula (pode ser ajustado conforme necessário)
      return this.salarioBase + (this.horasAulaPorSemana * valorHoraAula);
  }
}

// Criando dois objetos do tipo Professor com informações fictícias
const professor1 = new Professor("João", 35, 3000, "Programação", 20);
const professor2 = new Professor("Maria", 40, 3500, "UX", 15);

// Chamando o método calcularSalario() para cada objeto e mostrando o resultado no console
console.log(`${professor1.nome}: Salário total - R$${professor1.calcularSalario()}`);
console.log(`${professor2.nome}: Salário total - R$${professor2.calcularSalario()}`);