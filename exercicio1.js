const prompt = require("prompt-sync")({sigint:true})

/* Hora de praticar: 
1. Cálculo de Média Aritmética
Descrição: Crie uma função que receba três notas de um aluno e calcule a média aritmética.Imprima a média no console com duas casas decimais. */

var a = parseFloat(prompt("Digite um valor para a nota A: "))
var b = parseFloat(prompt("Digite um valor para a nota B: "))
var c = parseFloat(prompt("Digite um valor para a nota C: "))

var resul = (a + b + c )/2


console.log("O resultado é: " , resul)

