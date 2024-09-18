
const prompt=require("prompt-sync")({sigint:true})
/* Conversão de Velocidade
Descrição: Crie um código que receba uma velocidade em km/h e a converta para m/s.
Imprima o resultado no console.*/

var km = prompt("Digite um valor para o km: ")

resul = km * 1000

console.log("O resultado é: " , resul)