function contar() {
    let saida = document.querySelector('section#saida')

    saida.innerHTML += `<h2>Números pares de 1 a 10`
    for (let cont = 2; cont<=10; cont +=2){
        saida.innerHTML += ` ${cont} &#x1F449;`
    }
    saida.innerHTML += ` &#x1F3C1;`
}