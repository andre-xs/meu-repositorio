function estacao() {
    let mes = prompt('Digite o mês em extenso (Ex: Setembro)')
    let saida = document.querySelector('section#saida')
    let estacao
    switch (mes.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO' : case 'FEVEREIRO' : case 'MARÇO' : // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estacao = 'VERÃO'
            break
        case 'ABRIL' : case 'MAIO' : case 'JUNHO' :
            estacao = 'OUTONO'
            break
        case 'JULHO' : case 'AGOSTO' : case 'SETEMBRO' :
            estacao = 'INVERNO'
            break
        case 'OUTUBRO' : case 'nOVEMBRO' : case 'DEZEMBRO' :
            estacao = 'PRIMAVERA'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.</p>`
}