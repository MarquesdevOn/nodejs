const prompt = require("prompt-sync")({sigint:true});
/* Cálculo de Juros Simples
Descrição: Crie um código que receba um valor principal (em reais), uma taxa de juros
anual (em porcentagem) e o tempo (em anos), e calcule os juros simples. Imprima o
resultado no console.*/ 

var num1 = prompt("Digite um valor: ")

var taxaAnual = prompt("Digite o valor da taxa: ")


var tempo = prompt("Qual o tempo: ")

var calc = num1 * (taxaAnual / 100 ) * tempo

console.log("O valor é: " , calc)