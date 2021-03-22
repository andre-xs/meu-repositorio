function info() {
    let agora = new Date
    let saida = document.querySelector('section#saida')
    saida.innerHTML = `<p>O que recebi do sistema foi <mark>${agora}</mark></p>`
}