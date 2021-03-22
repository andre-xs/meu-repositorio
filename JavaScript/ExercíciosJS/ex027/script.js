function tabuada() {
    let saida = document.querySelector('section#saida')
    let n = Number(document.querySelector('input#fnum').value)

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`
    for (let c=1; c<=10; c++){
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
    }
}