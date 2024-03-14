function mostrarRecruta() {
  let nome = document.getElementById("nome").value
  let sobrenome = document.getElementById("sobrenome").value
  let campo = document.getElementById("campo").value
  let ano = document.getElementById("ano").value
  let idade = 2023 - ano;
  alert(
    "Nome: " + nome + " " + sobrenome + "\n" +
    "Campo: " + campo + "\n" +
    "Idade: " + idade
  )
}

function calcular() {
  let num1 = parseFloat(document.getElementById("numero1").value)
  let num2 = parseFloat(document.getElementById("numero2").value)
  let soma = num1 + num2
  let sub = num1 - num2
  let mult = num1 * num2
  let div = num1 / num2
  alert("Soma: " + soma + "\n" +
    "Subtração: " + sub + "\n" +
    "Multiplicação: " + mult + "\n" +
    "Divisão: " + div + "\n"
  )
}