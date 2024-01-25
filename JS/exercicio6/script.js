function tabuada(){
  let numero = prompt("Informe o numero usado na tabuada:")
  r = "";

  for(i = 1; i <= 20; i++){
    r += numero * i + " "
  }

  alert(r)
}

function palindromo(){
  let nome = prompt("Informe a palavra:")
  let contrario = "";
  for(i = (nome.length) - 1; i >= 0; i--){
    console.log(nome[i])
    contrario += nome[i];
  }
  if(contrario.toLowerCase() === nome.toLowerCase())
    alert("A palavra é um palíndromo!")
  else
    alert("Não é palíndromo\nPalavra: " + nome + "\nContrário: " + contrario)  
}