let vagas = [];

function sistemaVagas() {
  let opcao;

  do {
    opcao = prompt("------ Menu ------ \n\n" +
      "1. Listar vagas disponíveis \n" +
      "2. Criar uma nova vaga \n" +
      "3. Visualizar uma vaga \n" +
      "4. Inscrever um candidato em uma vaga \n" +
      "5. Excluir uma vaga \n" +
      "6. Sair \n\n" +
      "Escolha uma opção:");

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarNovaVaga();
        break;
      case "3":
        visualizarVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Encerrando o sistema de vagas.");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
        break;
    }
  } while (opcao !== "6");
}

function listarVagas() {
  if (vagas.length === 0) {
    alert("Não há vagas disponíveis.");
  } else {
    let listaVagas = "------ Vagas Disponíveis ------\n";
    for (let i = 0; i < vagas.length; i++) {
      listaVagas += (i + 1) + ". Nome: " + vagas[i].nome + ", Candidatos Inscritos: " + vagas[i].candidatos.length + "\n";
    }
    alert(listaVagas);
  }
}

function criarNovaVaga() {
  let nome = prompt("------ Criar Nova Vaga ------\n\nDigite o nome da vaga:");
  let descricao = prompt("Digite a descrição da vaga:");
  let dataLimite = prompt("Digite a data limite da vaga:");

  let confirmacao = "Confirme as informações:\n" +
    "Nome: " + nome + "\n" +
    "Descrição: " + descricao + "\n" +
    "Data Limite: " + dataLimite + "\n";

  if (confirm(confirmacao)) {
    vagas.push({
      nome: nome,
      descricao: descricao,
      dataLimite: dataLimite,
      candidatos: []
    });
    alert("Nova vaga criada com sucesso!");
  } else {
    alert("Operação cancelada.");
  }
}

function visualizarVaga() {
  let indiceVaga = parseInt(prompt("------ Visualizar Vaga ------\n\nDigite o índice da vaga:")) - 1;

  if (indiceVaga >= 0 && indiceVaga < vagas.length) {
    let vaga = vagas[indiceVaga];
    let visualizacao = "Índice: " + (indiceVaga + 1) + "\nNome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite + "\nQuantidade de Candidatos Inscritos: " + vaga.candidatos.length + "\n";

    if (vaga.candidatos.length > 0) {
      visualizacao += "Candidatos Inscritos:\n";
      for (let i = 0; i < vaga.candidatos.length; i++) {
        visualizacao += (i + 1) + ". " + vaga.candidatos[i] + "\n";
      }
    }

    alert(visualizacao);
  } else {
    alert("Vaga não encontrada.");
  }
}

function inscreverCandidato() {
  let indiceVaga = parseInt(prompt("------ Inscrever Candidato em uma Vaga ------\n\nDigite o índice da vaga:")) - 1;

  if (indiceVaga >= 0 && indiceVaga < vagas.length) {
    let vaga = vagas[indiceVaga];
    let nomeCandidato = prompt("Digite o nome do candidato:");

    let confirmacao = "Confirme as informações:\n" +
      "Vaga: " + vaga.nome + "\n" +
      "Candidato: " + nomeCandidato + "\n";

    if (confirm(confirmacao)) {
      vaga.candidatos.push(nomeCandidato);
      alert("Candidato inscrito com sucesso!");
    } else {
      alert("Operação cancelada.");
    }
  } else {
    alert("Vaga não encontrada.");
  }
}

function excluirVaga() {
  let indiceVaga = parseInt(prompt("------ Excluir Vaga ------\n\nDigite o índice da vaga:")) - 1;

  if (indiceVaga >= 0 && indiceVaga < vagas.length) {
    let vaga = vagas[indiceVaga];

    let confirmacao = "Confirme as informações:\n" +
      "Índice: " + (indiceVaga + 1) + "\n" +
      "Nome: " + vaga.nome + "\n" +
      "Descrição: " + vaga.descricao + "\n" +
      "Data Limite: " + vaga.dataLimite + "\n" +
      "Quantidade de Candidatos Inscritos: " + vaga.candidatos.length + "\n";

    if (confirm(confirmacao)) {
      vagas.splice(indiceVaga, 1);
      alert("Vaga excluída com sucesso!");
    } else {
      alert("Operação cancelada.");
    }
  } else {
    alert("Vaga não encontrada.");
  }
}

sistemaVagas();