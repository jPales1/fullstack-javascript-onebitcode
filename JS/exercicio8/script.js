let imoveis = [];
let opcao;

do {
  opcao = prompt(
    "Quantidade de imóveis cadastrados: " + imoveis.length + "\n\n" +
    "--- MENU ---\n" +
    "1. Cadastrar Imóvel\n" +
    "2. Mostrar Imóveis\n" +
    "3. Sair \n\n" +
    "Escolha uma opção:"
    );

  switch (opcao) {
    case "1":
      cadastrarImovel();
      break;
    case "2":
      mostrarImoveis();
      break;
    case "3":
      alert("Encerrando o programa.");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
} while (opcao !== "3");

function cadastrarImovel() {
  let nomeProprietario = prompt("Digite o nome do proprietário:");
  let quantidadeQuartos = parseInt(prompt("Digite a quantidade de quartos:"));
  let quantidadeBanheiros = parseInt(prompt("Digite a quantidade de banheiros:"));
  let possuiGaragem = confirm("O imóvel possui garagem?");

  let imovel = {
    nomeProprietario: nomeProprietario,
    quantidadeQuartos: quantidadeQuartos,
    quantidadeBanheiros: quantidadeBanheiros,
    possuiGaragem: possuiGaragem,
  };

  imoveis.push(imovel);
  alert("Imóvel cadastrado com sucesso!");
}

function mostrarImoveis() {
  if (imoveis.length === 0) {
    alert("Não há imóveis cadastrados.");
  } else {
    let listaImoveis = "--- IMÓVEIS ---";
    for (let i = 0; i < imoveis.length; i++) {
      listaImoveis += "\n\nIMÓVEL " + (i+1) + ": \n";
      listaImoveis += "Proprietário: " + imoveis[i].nomeProprietario + " \n";
      listaImoveis += "Quartos: " + imoveis[i].quantidadeQuartos + " \n";
      listaImoveis += "Banheiros: " + imoveis[i].quantidadeBanheiros + " \n";
      listaImoveis += "Possui Garagem: " + (imoveis[i].possuiGaragem ? 'Sim' : 'Não');
    }
    alert(listaImoveis);
  }
}
