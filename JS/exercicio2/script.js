function exibir() {
  let nome1 = document.getElementById("nomeVeiculo1").value
  let velocidade1 = document.getElementById("velocidadeVeiculo1").value

  let nome2 = document.getElementById("nomeVeiculo2").value
  let velocidade2 = document.getElementById("velocidadeVeiculo2").value

  if (velocidade1 > velocidade2)
    alert("O veículo mais rápido é o '" + nome1 + "'")
  else if (velocidade1 < velocidade2)
    alert("O veículo mais rápido é o '" + nome2 + "'")
  else
    alert("Os dois veículos têm a mesma velocidade.")
}

function calcular() {
  let nome1 = document.getElementById("nome1").value
  let poder1 = parseFloat(document.getElementById("poder1").value)
  let nome2 = document.getElementById("nome2").value
  let ptsVida = document.getElementById("ptsVida").value
  let poder2 = parseFloat(document.getElementById("poder2").value)
  let escudo = document.querySelector('input[name="escudo"]:checked').value
  let dano = 0

  if (poder1 > poder2 && escudo === 'nao')
    dano = poder1 - poder2
  else if (poder1 > poder2 && escudo === 'sim')
    dano = (poder1 - poder2) / 2

  ptsVida -= dano

  alert(
    "Quantidade de dano causado: " + dano + "\n\n" +
    "-- Personagem 1 --\n" +
    "Nome: " + nome1 + "\n" +
    "Poder de ataque: " + poder1 + "\n\n" +
    "-- Personagem 2 --\n" +
    "Nome: " + nome2 + "\n" +
    "Poder de defesa: " + poder2 + "\n" +
    "Pontos de vida atualizado: " + ptsVida + "\n" +
    "Possui escudo? " + escudo
  )
}