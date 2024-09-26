
let anoNascimento = 2007; 
let contaAtiva = true; 
let restricaoCredito = true; 
let sistemaManutencao = false; 

//dados para o segundo
// 2007 / true / true/ false

let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;


if (idade >= 18 && contaAtiva && !restricaoCredito && !sistemaManutencao) {
  console.log("Acesso concedido");
} else {
  console.log("Acesso negado");
}