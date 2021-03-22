function contar() {
    let saida = document.querySelector('section#saida')
    saida.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`

    for (let cont = 1; cont <=10; cont++){
        if (cont%2==0){
            saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;` 
        } else {
            saida.innerHTML += ` ${cont} &#x1F449;`
        }
    }   
    saida.innerHTML += ` &#x1F3C1;`
}