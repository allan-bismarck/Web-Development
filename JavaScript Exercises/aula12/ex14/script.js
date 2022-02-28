function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#F1DCC9'
    } else if ( hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#BF2604'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#4A3B5C'
    }
}

