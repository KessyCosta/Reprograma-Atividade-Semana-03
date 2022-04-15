//2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais,
// mostre uma mensagem no console "Os números são iguais".

function maiorOuMenor(n1,n2) {
    
    if (n1 > n2) {
        return `${n1} é maior que ${n2}`
    } else if (n1 < n2){
        return `${n1} é menor que ${n2}`
    } else {
        return `Os números são iguais`
    }
}
console.log(maiorOuMenor(3,5))