function verificar() {
    let inicial = Number(window.prompt('Qual era o preço anterior do produto?'))
    let final = Number(window.prompt("Qual é o preço atual do produto?"))
    let saida = document.querySelector('section#saida')

    saida.innerHTML = `<h2>Analisando os valores informados...</h2>`
    saida.innerHTML += `<p>O produto custava ${inicial.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})} e agora custa ${final.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</p>`

    if (inicial < final) {
        subiu = (final-inicial)
        porc = (final/inicial-1)*100
        saida.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        saida.innerHTML += `<p>O preço subiu ${subiu.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})} em relação ao preço anterior.</p>`
       saida.innerHTML += `<p>Uma variação de ${porc.toFixed(2)}% pra cima.</p>`
    } else if (inicial > final) {
        baixou = inicial-final
        porc = (inicial/final-1)*100
        saida.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        saida.innerHTML += `<p>O preço caiu ${baixou.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})} em relação ao preço anterior.</p>`
        saida.innerHTML += `<p>Uma variação de ${porc.toFixed(2)}% pra baixo.</p>`
    } else {
        saida.innerHTML = `<h2>O valor continua o mesmo.</h2>`
    }
}