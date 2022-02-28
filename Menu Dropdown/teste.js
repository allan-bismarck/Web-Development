let esportes = document.querySelector('a#esportes')
let politica = document.querySelector('a#politica')
let entretenimento = document.querySelector('a#entretenimento')
let curiosidades = document.querySelector('a#curiosidades')

let m_esportes = document.querySelector('div#menu_esportes')
let m_politica = document.querySelector('div#menu_politica')
let m_entretenimento = document.querySelector('div#menu_entretenimento')
let m_curiosidades = document.querySelector('div#menu_curiosidades')

function entrou(elemento) {
    if(elemento == 'politica') {
        m_politica.style.display = 'block'
    }
    
    if(elemento == 'esportes') {
        m_esportes.style.display = 'block'
    }

    if(elemento == 'entretenimento') {
        m_entretenimento.style.display = 'block'
    } 
    
    if(elemento == 'curiosidades') {
        m_curiosidades.style.display = 'block'
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