// 6 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function converteDias(dias) {
    let umDia = 24 
    let calcula = dias * umDia 
    return `${dias} dia(s) são ${calcula} horas`
}
console.log(converteDias(30))