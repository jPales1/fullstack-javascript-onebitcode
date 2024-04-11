async function calculateIMC(weight, height) {
  if (typeof weight !== 'number' || typeof height !== 'number') {
    return Promise.reject('Os valores informados não são números');
  }
  return weight / (height * height)
}

async function callCalculate(weight, height) {
  try {
    console.log("FUNCIONAMENTO ASSÍNCRONO")
    const result = await calculateIMC(weight, height)
    let imc = result
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
  }
  catch (err) {
    console.log(err)
  }
}

callCalculate(70, 1.70)
callCalculate(71, 1.68)
callCalculate(72, 1.66)
callCalculate(73, 1.64)
callCalculate(74, 1.62)