const nome = prompt("Digite o nome do turista: ")
let qtdCidades = 0
let cidades = ""
let visita = prompt("Você já visitou alguma cidade? (sim/nao)")

while(visita == "sim"){
  let cidade = prompt("Qual a cidade?")
  if(qtdCidades == 0)
    cidades += cidade
  else
    cidades += ", " + cidade
  qtdCidades++
  visita = prompt("Você já visitou alguma cidade? (sim/nao)")
}

alert(
  "Nome do turista: " + nome + "\n" +
  "Quantidade de cidades visitadas: " + qtdCidades + "\n" +
  "Cidades visitadas: " + cidades
)