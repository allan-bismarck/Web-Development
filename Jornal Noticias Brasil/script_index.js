let m_esportes = document.querySelector('div#menu_esportes')
let m_politica = document.querySelector('div#menu_politica')
let m_entretenimento = document.querySelector('div#menu_entretenimento')
let m_curiosidades = document.querySelector('div#menu_curiosidades')

function entrou(elemento) {
    if(elemento == 'esportes') {
        m_esportes.style.display = 'block'
        m_esportes.style.backgroundColor = '#32CD32'
    }
    
    if(elemento == 'politica') {
        m_politica.style.display = 'block'
        m_politica.style.backgroundColor = '#F17105'
    }

    if(elemento == 'entretenimento') {
        m_entretenimento.style.display = 'block'
        m_entretenimento.style.display = 'darkblue'
    } 
    
    if(elemento == 'curiosidades') {
        m_curiosidades.style.display = 'block'
        m_curiosidades.style.backgroundColor = '#CC2936'
    }
}

function saiu(elemento) {
    if(elemento == 'politica') {
        m_politica.style.display = 'none'
    } 
    
    if(elemento == 'esportes') {
        m_esportes.style.display = 'none'
    }
    
    if(elemento == 'entretenimento') {
        m_entretenimento.style.display = 'none'
    }
    
    if(elemento == 'curiosidades') {
        m_curiosidades.style.display = 'none'
    }
}

function diminuiu() {
    let tela = document.documentElement.clientWidth
    if(tela < 550) {
        document.querySelector('div#menu').style.display = 'block'
        document.body.style.setProperty('--largura-coluna', 'none')
    }

    if(tela >= 550) {
        document.querySelector('div#menu').style.display = 'flex'
        document.body.style.setProperty('--largura-coluna', '160px')
    }
}

function pagina() {
    if(document.querySelector('header#esportes') != null) {
        document.querySelector('header#esportes').style.backgroundImage = 'linear-gradient(to bottom, #32CD32 40%, #287233'
        document.querySelector('div#menu').style.backgroundColor = 'darkgreen'
        document.body.style.backgroundColor = 'lightgreen'
        document.querySelector('footer').style.backgroundImage = 'linear-gradient(to top, #32CD32 40%, #287233'
    }

    if(document.querySelector('header#politica') != null) {
        document.querySelector('header#politica').style.backgroundImage = 'linear-gradient(to bottom, #F17105 40%, #CD4505'
        document.querySelector('div#menu').style.backgroundColor = '#A83A0B'
        document.body.style.backgroundColor = '#FF9C71'
        document.querySelector('footer').style.backgroundImage = 'linear-gradient(to top, #F17105 40%, #CD4505'
    }

    if(document.querySelector('header#entretenimento') != null) {
        document.querySelector('header#entretenimento').style.backgroundImage = 'linear-gradient(to top, rgb(28, 28, 247) 40%, rgb(11, 11, 63))'
        document.querySelector('div#menu').style.backgroundColor = 'darkblue'
        document.body.style.backgroundColor = '#lightblue'
        document.querySelector('footer').style.backgroundImage = 'linear-gradient(to bottom, rgb(28, 28, 247) 40%, rgb(11, 11, 63))'
    }

    if(document.querySelector('header#curiosidades') != null) {
        document.querySelector('header#curiosidades').style.backgroundImage = 'linear-gradient(to bottom, #CC2936 40%, #73171F'
        document.querySelector('div#menu').style.backgroundColor = '#63141B'
        document.body.style.backgroundColor = '#CC7484'
        document.querySelector('footer').style.backgroundImage = 'linear-gradient(to top, #CC2936 40%, #73171F'
    }
}