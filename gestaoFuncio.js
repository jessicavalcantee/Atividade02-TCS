class Funcionario {
    constructor(nome, idade, cargo, salario) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
      this.salario = salario;
    }
  
   toString() {
      return `Nome: ${this.nome} Idade: ${this.idade} Cargo: ${this.cargo} Salario: ${this.salario}`;
    }
    
  }
  
  // Cria um array para armazenar os funcionários
  const funcionarios = [];
  
  
  document.querySelector('form').addEventListener('submit', function (event) { 
    event.preventDefault(); // Impede o envio do formulário 
  
  //Pega os dados do formulário
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const cargo = document.getElementById('cargo').value;
  const salario = document.getElementById('salario').value;
  
  // Verificador de campos vazios
  if (!nome || !idade || !cargo || !salario) {
    alert("Preencha todos os campos!");
    return;
  }
  
  //Cria um novo aluno e adiciona na lista
  const funcionario = new Funcionario(nome, idade, cargo, salario);
  funcionarios.push(funcionario);
  
  atualizarTabela();
  
  this.reset(); // Limpa o formulário após o envio
  });
    
  function atualizarTabela() {
    const tabela = document.getElementById('table');
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar os alunos
  
    funcionarios.forEach((funcionario, index) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${funcionario.nome}</td>
        <td>${funcionario.idade}</td>
        <td>${funcionario.cargo}</td>
        <td>${funcionario.salario}</td>
        <td><button class="excluir">Remover</button></td>
        <td><button class="editar">Editar</button></td>
        
      `;
      tabela.appendChild(linha);
  
      // Adiciona o evento de clique para o botão de remover
      linha.querySelector('.excluir').addEventListener('click', () => {
        removerFuncionario(index); 
      });
      
      // Adiciona o evento de clique para o botão de editar 
      linha.querySelector('.editar').addEventListener('click', () => {
        editarFuncionario(index); 
      });
    });
}
  
    const removerFuncionario = (index) => {
      const funcionarioRemovido = funcionarios[index];
      funcionarios.splice(index, 1);
      atualizarTabela();
      console.log(`Funcionario ${funcionarioRemovido.nome} foi removido.`);
    }
  
    const editarFuncionario = (index) => {
      const funcionario = funcionarios[index];
      document.getElementById('nome').value = funcionario.nome;
      document.getElementById('idade').value = funcionario.idade;
      document.getElementById('cargo').value = funcionario.cargo;
      document.getElementById('salario').value = funcionario.salario;
  
      const form = document.querySelector('form');
      const botaoCadastrar = form.querySelector('input[type="submit"]');
      botaoCadastrar.value = "Atualizar"; // Altera o texto do botão para "Atualizar"
  
      // Substitui o comportamento padrão do botão "Cadastrar"
      form.onsubmit = function (event) {
        event.preventDefault(); 
      
        const nomeAtualizado = document.getElementById('nome').value;
        const idadeAtualizada = document.getElementById('idade').value;
        const cargoAtualizado = document.getElementById('cargo').value;
        const salarioAtualizado = document.getElementById('salario').value;
      
        funcionarios[index] = new Funcionario(nomeAtualizado, idadeAtualizada, cargoAtualizado, salarioAtualizado);
        
        alert('Funcionário foi editado com sucesso!');
        
        botaoCadastrar.value = "Cadastrar";
        form.onsubmit = null; 
        atualizarTabela();
        form.reset();
    };
  
  }
  
  //Relatorio dos funcionários com salário maior que 5k
  document.getElementById('maior-que-cinco').addEventListener('click', function () {
    const MaiorQueCinco = funcionarios.filter(funcionario => funcionario.salario >= 5000);
    const listaMaiorQueCinco = MaiorQueCinco.map(funcionario => funcionario.toString()).join('<br>');
    document.getElementById('relatorio-funcionario').innerHTML = `<h3>Funcionários com salário maior que 5k:</h3><p>${listaMaiorQueCinco}</p>`;
  });

//media das notas
document.getElementById('media-salario').addEventListener('click', () => {
    const mediaSalario = funcionarios.reduce((soma, funcionario) => soma + parseFloat(funcionario.salario), 0) / funcionarios.length;
    document.getElementById('relatorio-funcionario').innerHTML = `<h3>Média Salarial:</h3><p>${mediaSalario.toFixed(2)}</p>`;
  });

  document.getElementById('funcionario-ordem').addEventListener('click', () => {
    if (funcionarios.length === 0) {
        document.getElementById('relatorio-funcionario').innerHTML = `<h3>Lista Vazia</h3><p>Não há funcionários cadastrados.</p>`;
        return;
    }

    const nomesEmMaiusculo = funcionarios.map(funcionario => funcionario.nome.toUpperCase()).join(', ');
    
    document.getElementById('relatorio-funcionario').innerHTML = `<h3>Nomes dos Funcionários:</h3><p>${nomesEmMaiusculo}</p>`;
});
