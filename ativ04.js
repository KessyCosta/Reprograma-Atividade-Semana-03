//4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return 'Esse número é PAR.'
    } else {
        return 'Esse número é ÍMPAR.'
    }
}
console.log(parOuImpar(3))