class Atletas {
  constructor(nome, idade, peso, altura, notas) {
  this.nome = nome
  this.idade = idade
  this.peso = peso
  this.altura = altura
  this.notas = notas
}

calculaCategoria(){
  if(this.idade >= 9 && this.idade <= 11 ) {
  return "Infantil"}

  if(this.idade >= 12 && this.idade <= 13 ) {
  return "Juvenil"}

  if(this.idade >= 14 && this.idade <= 15 ){
  return "Intermediário"}

  if(this.idade >= 16 && this.idade <= 30 ){
  return "Adulto"}

  else { return "Sem categoria"} 
}
  
calcularIMC(){
return this.peso / (this.altura * this.altura)
}

calculaMediaValida(){
  let soma = 0
  this.notas.forEach(function(nota){
  soma = soma + nota
  })
  return soma / this.notas.length
}

obterNomeAtleta(){
  return this.nome
}

obtemIdadeAtleta() {
  return this.idade
}
obtemPesoAtleta() {
  return this.peso
}
obtemAlturaAtleta(){
  return this.altura
}
obtemNotasAtleta() {
  return this.notas
}
obtemCategoria(){
  return this.calculaCategoria();
}

obtemIMC(){
return this.peso / (this.altura * this.altura)
};

obtemMediaValida(){
  return this.calculaMediaValida();
}
}
// Declara o atleta
const atleta = new Atletas("Cesar Abascal",
  30, 80, 1.70,
  [10, 9.34, 8.42, 10, 7.88]);


  
console.log("Nome: " + atleta.obterNomeAtleta())
console.log("Idade: "+ atleta.obtemIdadeAtleta())
console.log("Peso: " + atleta.obtemPesoAtleta())
console.log("Altura: " + atleta.obtemAlturaAtleta())
console.log("Notas: " + atleta.obtemNotasAtleta())
console.log("Categoria: " + atleta.obtemCategoria())
console.log("IMC: "+ atleta.obtemIMC())
console.log("Média Válida: " + atleta.obtemMediaValida())