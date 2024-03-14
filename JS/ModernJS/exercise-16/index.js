const dayjs = require('dayjs')
var customParseFormat = require('dayjs/plugin/customParseFormat')
var utc = require('dayjs/plugin/utc')
dayjs.extend(customParseFormat)
dayjs.extend(utc)

function nascimento(dataNascimento) {
  const nascimento = dayjs(dataNascimento, "DD/MM/YYYY")
  console.log("Data de nascimento: " + nascimento.format("DD/MM/YYYY"))

  const agora = dayjs().utcOffset(-3)
  console.log("Data de agora: " + agora.format("DD/MM/YYYY"))

  const idade = agora.diff(nascimento, 'year')
  console.log("Idade da pessoa: " + idade + " anos")

  const proxAniversario = nascimento.add(idade + 1, 'year')
  console.log("Próximo aniversário: " + proxAniversario.format("DD/MM/YYYY"))

  const diasProximo = proxAniversario.diff(agora, "day")
  console.log("Próximo aniversário em " + diasProximo + " dias")
}

nascimento("12/07/2003")