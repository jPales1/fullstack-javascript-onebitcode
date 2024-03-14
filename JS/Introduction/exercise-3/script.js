function calcular() {
  const metros = document.getElementById("valor").value
  const medida = parseFloat(document.getElementById("medida").value)
  const convertido = document.getElementById("convertido")
  let unidade = ""
  let resultado = 0

  switch (medida) {
    case 1:
      unidade = "milímetro(s)"
      resultado = metros * 1000
      break
    case 2:
      unidade = "centímetro(s)"
      resultado = metros * 100
      break
    case 3:
      unidade = "decímetro(s)"
      resultado = metros * 10
      break
    case 4:
      unidade = "decâmetro(s)"
      resultado = metros / 10
      break
    case 5:
      unidade = "hectômetro(s)"
      resultado = metros / 100
      break
    case 6:
      unidade = "quilômetro(s)"
      resultado = metros / 1000
      break
  }

  alert(metros + " metros = " + resultado + " " + unidade)
}