const media = (...numbers) => {
  let sum = 0; // outra opção: usar reduce no array
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }
  return sum / numbers.length
}

const mediaPonderada = (...entries) => {
  const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
  const sumPonderada = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  return sum / sumPonderada
}

const mediana = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  if (orderedNumbers.length % 2 === 0) {
    return media(orderedNumbers[(orderedNumbers.length / 2)], orderedNumbers[(orderedNumbers.length / 2) - 1])
  }
  return orderedNumbers[Math.floor(orderedNumbers.length / 2)]
}

const moda = (...numbers) => {
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Média Aritmética Simples: ${media(3, 6, 10, 9)}`)

console.log(`Média Ponderada: ${mediaPonderada(
  { number: 9, weight: 3 },
  { number: 7 },
  { number: 10, weight: 1 },
)}`)

console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`)

console.log(`Moda: ${moda(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)