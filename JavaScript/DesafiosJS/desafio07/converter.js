let cot = Number(window.prompt('Qual a cotação atual?:'))
function converter() {
    let rs = Number(window.prompt('Quantos R$ você tem na carteira?:'))
    let res = document.querySelector ('section#conv')
    let c = rs/cot
    res.innerHTML = (`Você têm ${rs.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}, que equivalem a ${c.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}.`)
}