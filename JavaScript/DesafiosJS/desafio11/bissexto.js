function verificar(){
    let ano = Number(window.prompt('Qual ano você quer verificar?'))
    let res = document.querySelector('section#resp')

    res.innerHTML = (`<h2>Analisando o ano de ${ano}...</h2>`)
    if ((ano % 4 == 0 && ano % 100 != 0 )||(ano % 400 == 0)) { 
        res.innerHTML += (`<p>O ano de ${ano} <mark>é bissexto!&#x2705</mark></p>`); 
    } else {
        res.innerHTML += (`<p>O ano de ${ano} <mark>não é bissexto!&#x274C</mark></p>`);
    }
}