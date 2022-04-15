// 5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function calculaIdade(anoNasc,) {
    let idade = 2022 - anoNasc 
    if (anoNasc <= 2004) {
        return `Você tem ${idade} anos, então você é MAIOR de idade.`
    } else {
        return `Você tem ${idade} anos, então você é MENOR de idade.`
    }
   
}
console.log(calculaIdade(1984))