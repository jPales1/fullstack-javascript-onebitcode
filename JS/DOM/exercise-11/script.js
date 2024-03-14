function escalar() {
  const posicao = document.getElementById('position').value;
  const nome = document.getElementById('name').value;
  const camisa = document.getElementById('camisa').value;
  const escalacao = document.getElementById('escalacao');

  if (confirm(`Você quer escalar esse jogador: ${nome} - ${posicao} (${camisa})?`)) {
    const jogadorEscalado = document.createElement("li")
    jogadorEscalado.id = "jogador-" + camisa
    jogadorEscalado.innerText = posicao + " - " + nome + " (" + camisa + ")"
    escalacao.appendChild(jogadorEscalado);

    posicao.value = "";
    nome.value = "";
    camisa.value = "";
  }
}

function remover() {
  const camisa = document.getElementById('camisaRem').value;
  const jogadorRemovido = document.getElementById("jogador-" + camisa);

  if (confirm(`Você quer remover esse jogador?\n${jogadorRemovido.innerText}`)) {
    const escalacao = document.getElementById('escalacao');
    escalacao.removeChild(jogadorRemovido);
  }
}