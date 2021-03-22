function contagem() {
    let saida = document.querySelector('section#saida')
    let num = Number(document.querySelector('input#fnum').value)
    saida.innerHTML+=`<h2>Contando de 0 até ${num}</h2>`
    for (let cont=0; cont<=num; cont++) {
        saida.innerHTML += ` ${cont} &#x1F449;`
    }
    saida.innerHTML += ` &#x1F3C1;`
}