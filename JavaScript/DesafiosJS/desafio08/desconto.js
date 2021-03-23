function calcular() {
    let prod = window.prompt('Qual o produto que você está comprando?')
    let preco = Number(window.prompt(`Qual o preço de ${prod}?`))
    res = document.querySelector("section#desconto")
    desc = preco*10/100
    final = preco-desc
    res.innerHTML = (`<h2>Calculando o desconto de 10% para ${prod}</h2><br>`)
    res.innerHTML += (`O preço original era ${preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.<br>`)
    res.innerHTML += (`Você acaba de ganhar ${desc.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de desconto!(-10%).<br>`)
    res.innerHTML += (`No fim, você vai pagar ${final.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no produto ${prod}.`)
}