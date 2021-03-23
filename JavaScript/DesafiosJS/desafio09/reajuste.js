function calcular () {
    let nome = window.prompt('Qual o nome do funcionário?')
    let sal = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let porc = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let res = document.querySelector('section#reajuste')
    aumento = sal*porc/100
    gtotal = sal+aumento
    res.innerHTML = (`<h2>${nome} recebeu um aumento salarial!</h2><br>`)
    res.innerHTML += (`O salário anterior era ${sal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.<br>`)
    res.innerHTML += (`Com um aumento de ${porc}%, o aumento salarial vai ser de ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.<br>`)
    res.innerHTML += (`O ganho total de ${nome} a partir de agora vai ser de ${gtotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.`)
}