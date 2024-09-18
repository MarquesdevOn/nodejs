const prompt = require("prompt-sync")({sigint:true});
/* Conversão de Moedas
Descrição: Crie um código que receba um valor em reais (BRL) e o converta para dólares
(USD), usando uma taxa de câmbio fixa (por exemplo, 1 USD = 5 BRL). Imprima o valor
convertido no console.*/



var real = parseFloat(prompt("Para conversão digite o valor em real: "))


var resul = real * 5.61

console.log("O resultado da conversão é: " , resul)