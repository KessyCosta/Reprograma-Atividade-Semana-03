//3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
//  - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado

let nota1 = 10;
let nota2 = 10;
let nota3 = 9;
media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

function calculaResultado(media) {
  if (media >= 7) {
    return "aprovado";
  } else if (media >= 5 || media < 7) {
    return "recuperação";
  } else {
    return "reprovado";
  }
}
console.log(calculaResultado(media));
