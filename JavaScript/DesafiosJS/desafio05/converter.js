function converter() {
    var num = Number(window.prompt('Digite uma distância em metros (m): '))
    var res = document.querySelector('section#conv')
    km = num/1000
    hm = num/100
    dam = num/10
    dm = num*10
    cm = num*100
    mm = num*1000
    res.innerHTML = (`<h2>A distância de ${num.toFixed(2).replace('.',',')} metros, corresponde a...</h2><br>`)
    res.innerHTML += (`${km.toLocaleString('pt-BR')} quilômetros(Km)<br>`)
    res.innerHTML += (`${hm.toLocaleString('pt-BR')} hectometros (Hm)<br>`)
    res.innerHTML += (`${dam.toLocaleString('pt-BR')} decametros (Dam)<br>`)
    res.innerHTML += (`${dm.toLocaleString('pt-BR')} decímetros (dm)<br>`)
    res.innerHTML += (`${cm.toLocaleString('pt-BR')} centímetros (cm)<br>`)
    res.innerHTML += (`${mm.toLocaleString('pt-BR')} milímetros (mm)`)
}