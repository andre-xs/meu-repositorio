function fatorial() {
    let saida = document.querySelector('section#saida')
    let n = Number(document.querySelector('input#fnum').value)

    saida.innerHTML += `<h2>Calculando ${n}!</h2>`
    let fat = 1
    for(let c=n; c>1; c--){
    saida.innerHTML += `${c} x `
    fat *= c // Correspondente ao cálculo fat = fat * c
    }
    /*let c = n
    let fat = 1
    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c // Correspondente ao cálculo fat = fat * c
        c --
    }*/
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    // Usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhões/etc...
}