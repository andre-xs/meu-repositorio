function calcular() {
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))
    let x = b**2-4*a*c
    let res = document.querySelector('section#resp')
    res.innerHTML = ('<h2>Resolvendo Bhaskara</h2>')
    res.innerHTML += (`A equação atual é ${a}x<sup>2</sup>+${b}x+${c}=0.<br>`)
    res.innerHTML += (`O cálculo reslizado será ▲=${b}<sup>2</sup>-4.${a}.${c}.<br>`)
    res.innerHTML += (`O valor calculado foi <mark>▲=${x}.</mark>`)
}