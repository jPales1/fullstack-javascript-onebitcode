function calcularArea() {
  let opcao;

  do {
    opcao = prompt("--- MENU --- \n\n" +
      "1. Área do Triângulo \n" +
      "2. Área do Retângulo \n" +
      "3. Área do Quadrado \n" +
      "4. Área do Trapézio \n" +
      "5. Área do Círculo \n" +
      "6. Sair \n\n" + 
      "Escolha uma opção:");

    switch (opcao) {
      case "1":
        calcularAreaTriangulo();
        break;
      case "2":
        calcularAreaRetangulo();
        break;
      case "3":
        calcularAreaQuadrado();
        break;
      case "4":
        calcularAreaTrapezio();
        break;
      case "5":
        calcularAreaCirculo();
        break;
      case "6":
        alert("Encerrando o programa.");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
        break;
    }
  } while (opcao !== "6");
}

// Função para calcular a área do triângulo
function calcularAreaTriangulo() {
  let base = parseFloat(prompt("Digite a base do triângulo:"));
  let altura = parseFloat(prompt("Digite a altura do triângulo:"));
  let area = (base * altura) / 2;
  alert(`A área do triângulo é: ${area.toFixed(2)}`);
}

// Função para calcular a área do retângulo
function calcularAreaRetangulo() {
  let base = parseFloat(prompt("Digite a base do retângulo:"));
  let altura = parseFloat(prompt("Digite a altura do retângulo:"));
  let area = base * altura;
  alert(`A área do retângulo é: ${area.toFixed(2)}`);
}

// Função para calcular a área do quadrado
function calcularAreaQuadrado() {
  let lado = parseFloat(prompt("Digite o lado do quadrado:"));
  let area = (lado * lado);
  alert(`A área do quadrado é: ${area.toFixed(2)}`);
}

// Função para calcular a área do trapézio
function calcularAreaTrapezio() {
  let baseMaior = parseFloat(prompt("Digite a base maior do trapézio:"));
  let baseMenor = parseFloat(prompt("Digite a base menor do trapézio:"));
  let altura = parseFloat(prompt("Digite a altura do trapézio:"));
  let area = ((baseMaior + baseMenor) * altura) / 2;
  alert(`A área do trapézio é: ${area.toFixed(2)}`);
}

// Função para calcular a área do círculo
function calcularAreaCirculo() {
  let raio = parseFloat(prompt("Digite o raio do círculo:"));
  let area = Math.PI * (raio * raio);
  alert(`A área do círculo é: ${area.toFixed(2)}`);
}

calcularArea();