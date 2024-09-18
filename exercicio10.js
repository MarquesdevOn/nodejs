const prompt = require("prompt-sync")({sigint:true});
/*Cálculo de Perímetro e Área de um Retângulo
Descrição: Crie um código que receba a largura e o comprimento de um retângulo e
calcule tanto o perímetro quanto a área. Use as fórmulas: Imprima ambos os resultados no
console.*/ 

var base = prompt("Digite o valor da base: ")

var altura = prompt("Digite o valor da altura: ")

resul = base * altura

result = 2 * (base + altura)

console.log("O resultado da área é: ", resul)
console.log("O resultaddo do perimetro é: " , result)