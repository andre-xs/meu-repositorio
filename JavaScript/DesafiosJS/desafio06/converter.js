function converter() {
    let c = Number(window.prompt('Digite a temperatura em Celcius(°C):'))
    let res = document.querySelector('section#conv')
    k = (c+273.15)
    f = (c*1.8)+32
    res.innerHTML = (`<h2>A temperatura de ${c.toLocaleString('pt-BR')}°C, corresponde a...</h2>`)
    res.innerHTML += (`${f.toLocaleString('pt-BR')}°F (Fahrenheit)<br>`)
    res.innerHTML += (`${k.toLocaleString('pt-BR')}°K (Kelvin)`)
}