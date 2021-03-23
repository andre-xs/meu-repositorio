function calculo() {
    let prod = window.prompt('Qual produto você está comprando?')
    let preco = Number(window.prompt(`Qual o preço de ${prod}`))
    let pagto = Number(window.prompt(`Qual o valor que você deu para pagar ${prod}`))
    troco = pagto-preco
    window.alert (`Você comprou ${prod}, que custa ${preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. Deu ${pagto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em troco.`)
}
