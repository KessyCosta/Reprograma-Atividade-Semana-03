//1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function receberNumero(dia){
  switch (dia) {
    case '1':
        return 'domingo'
        break
    case '2' :
        return 'segunda-feira'
        break
    case '3' :
        return 'terça-feira'
        break
    case '4' :
        return 'quarta-feira' 
        break
    case '5' :
        return 'quinta-feira'
        break
    case '6' :
        return 'sexta-feira'
        break
    case '7' :
        return 'sábado'
    default:
        return 'Não é dia da semana!'
        break
  }
}
console.log(receberNumero('6'))