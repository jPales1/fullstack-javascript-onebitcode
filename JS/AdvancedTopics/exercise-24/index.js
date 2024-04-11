function calculateIMC(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== 'number' || typeof height !== 'number') {
      reject('Os valores informados não são números');
    } else {
      let imc = weight / (height * height)
      resolve(imc)
    }
  })
}

function callCalculate(weight, height) {
  calculateIMC(weight, height).then((imc) => {
    console.log("IMC = " + imc)
    if (imc < 18.5) {
      console.log("MAGREZA")
    } else if (imc >= 18.5 && imc < 24.9) {
      console.log("NORMAL")
    } else if (imc >= 25 && imc < 29.9) {
      console.log("SOBREPESO")
    } else if (imc >= 30 && imc < 39.9) {
      console.log("OBESIDADE")
    } else {
      console.log("OBESIDADE GRAVE")
    }
  }).catch((err => {
    console.log("A promise foi rejeitada. Motivo: " + err)
  }))

  console.log("FUNCIONAMENTO ASSÍNCRONO")
}

callCalculate(70, 1.70)
callCalculate(71, 1.68)
callCalculate(72, 1.66)
callCalculate(73, 1.64)
callCalculate(74, 1.62)