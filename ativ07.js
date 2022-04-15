// 7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function retornaDivisão (n1, n2) {
    valor = n1 / n2
    if (valor % 2 === 0) {
        return `O valor ${valor}, resultado da divisão entre ${n1} e ${n2} é PAR.`        
    } else {
        return `O valor ${valor}, resultado da divisão entre ${n1} e ${n2} é ÍMPAR.`    
    }
}
console.log(retornaDivisão(96, 2))