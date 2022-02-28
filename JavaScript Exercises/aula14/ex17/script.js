function gerar_tabuada() {
    var num = document.querySelector('input#num')
    var res = document.querySelector('div#res')
    var numero = Number(num.value)
    var cont
    var text = document.createElement('p')
    text.style.fontFamily = 'Arial'
    var lista = document.createElement('ul')
    
    res.innerHTML = ''
    text.innerHTML = '<strong>Soma</strong>'
    lista.appendChild(text)
    lista.style.textAlign = 'center'
    lista.style.columns = '4'
    lista.style.backgroundColor = 'lightblue'
    lista.style.margin = '0'

    if(numero == 0) {
        lista.style.columns = '3'
    }
    //SOMA
    for(cont=0;cont<=10;cont++) {
        lista.style.textAlign = 'center'
        lista.innerHTML += `${numero} + ${cont} = ${cont+numero}<br/>`
    }

    text.innerHTML = '<strong>Subtração</strong>'
    lista.appendChild(text)
    //SUBTRAÇÃO
    for(cont=0;cont<=10;cont++) {
        lista.style.textAlign = 'center'
        lista.innerHTML += `${numero+cont} - ${numero} = ${cont}<br/>`
    }

    text.innerHTML = '<strong>Multiplicação</strong>'
    lista.appendChild(text)
    //MULTIPLICAÇÃO
    for(cont=0;cont<=10;cont++) {
        lista.style.textAlign = 'center'
        lista.innerHTML += `${numero} * ${cont} = ${numero*cont}<br/>`
    }

    //DIVISÃO
    if(numero != 0) {
        text.innerHTML = '<strong>Divisão</strong>'
        lista.appendChild(text)
        for(cont=0;cont<=10;cont++) {
            lista.style.textAlign = 'center'
            lista.innerHTML += `${cont*numero} / ${numero} = ${(cont*numero)/numero}<br/>`
        }
    }

    res.appendChild(lista)
}