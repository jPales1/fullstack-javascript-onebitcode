function exibirMenuInterativo() {

  let opcao;

  do {
    opcao = parseInt(prompt(
      "Escolha uma opção: \n" +
      "1. Opção 1 \n" +
      "2. Opção 2 \n" +
      "3. Opção 3 \n" +
      "4. Opção 4 \n" +
      "5. Encerrar"
      ));

    switch (opcao) {
      case 1:
        alert("Você escolheu a opção 1");
        break;
      case 2:
        alert("Você escolheu a opção 2");
        break;
      case 3:
        alert("Você escolheu a opção 3");
        break;
      case 4:
        alert("Você escolheu a opção 4");
        break;
      case 5:
        alert("Sistema sendo encerrado...");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao != 5);
}

function exibirControleFinanceiro() {
  let dinheiro = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível:"));


  let opcao;

  do {
    opcao = parseInt(prompt(
      "Quantidade de dinheiro: R$" + dinheiro.toFixed(2) + "\n" +
      "Opções: \n" +
      "1. Adicionar dinheiro \n" +
      "2. Remover dinheiro \n" +
      "3. Sair"
    ));

    switch (opcao) {
      case 1:
        let quantidadeAdicionar = parseFloat(prompt("Digite a quantidade a ser adicionada:"));
          dinheiro += quantidadeAdicionar;
        break;
      case 2:
        let quantidadeRemover = parseFloat(prompt("Digite a quantidade a ser removida:"));
          if (quantidadeRemover > dinheiro) {
            alert("Você não possui dinheiro suficiente para remover essa quantidade.");
          } else {
            dinheiro -= quantidadeRemover;
          }
        break;
      case 3:
        alert("Encerrando o programa...");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao !== 3);
}

exibirMenuInterativo()
exibirControleFinanceiro()