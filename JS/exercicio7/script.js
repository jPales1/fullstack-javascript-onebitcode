function filaPacientes() {

  let filaEspera = [];
  let op;

  do {
    let pacientes = "";
    for (i = 0; i < filaEspera.length; i++) {
      pacientes += (i + 1) + "º - " + filaEspera[i] + "\n"
    }

    op = prompt(
      "Pacientes: \n" +
      pacientes + "\n" +
      "--- MENU --- \n" +
      "1.Novo paciente \n" +
      "2.Consultar paciente \n" +
      "3.Sair"
      );

    switch (op) {
      case "1":
        let nome = prompt("Digite o nome do paciente a ser adicionado: ")
        filaEspera.push(nome)
        break
      case "2":
        if (filaEspera.length != 0)
          alert("O paciente " + filaEspera.shift() + " será consultado agora.")
        else
          alert("Não existe nenhum paciente na fila.")
        break
      case "3":
        alert("Encerrando...")
        break
      default:
        alert("Opção inválida, tente novamente.")
        break
    }
  } while (op !== "3")

}

function pilhaBaralho() {

  let baralho = [];
  let opcao;

  do {
    opcao = prompt(
      "Quantidade de cartas no baralho: " + baralho.length + "\n\n" +
      "--- MENU --- \n" +
      "1. Adicionar uma carta \n" +
      "2. Puxar uma carta \n" +
      "3. Sair \n" +
      "Escolha uma opção:"
      );

    switch (opcao) {
      case "1":
        let nomeCarta = prompt("Digite o nome da carta a ser adicionada:");
        baralho.push(nomeCarta);
        alert(nomeCarta + " foi adicionada ao topo do baralho.");
        break;
      case "2":
        if (baralho.length === 0) {
          alert("O baralho está vazio. Não há cartas para puxar.");
        } else {
          let cartaPuxada = baralho.pop();
          alert("Carta puxada: " + cartaPuxada);
        }
        break;
      case "3":
        alert("Encerrando o programa.");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
        break;
    }
  } while (opcao !== "3");
}

filaPacientes()
pilhaBaralho()