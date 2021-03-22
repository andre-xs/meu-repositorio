function contagem(){
    let saida = document.querySelector('section#saida')
    let n1 = Number(document.querySelector('input#fn1').value)
    let n2 = Number(document.querySelector('input#fn2').value)
    let cont

    saida.innerHTML += `<h2>Contando de ${n1} até ${n2}</h2>`
    if (n1<n2){
        for (cont=n1; cont<=n2; cont++){
        saida.innerHTML += ` ${cont} &#x1F449;`
        }
    } else if (n2<n1){
        for (cont=n1; cont>=n2; cont--){
            saida.innerHTML += ` ${cont} &#x1F449;`
        }
    } else {
        saida.innerHTML += `Não é possível contar, pois os números são iguais`
    }
    saida.innerHTML += ` &#x1F3C1;`
}