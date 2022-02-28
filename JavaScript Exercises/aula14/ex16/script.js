function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    var contador

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || (f<i && p>0) || 
    (f>i && p<0)) {
        res.innerHTML = 'Impossível fazer a contagem'
    } else {
        if(p == 0) {
            window.alert('Contagem não permitida, passo = 0, será utilizado 1')
            p = 1
        }
        res.innerHTML = ''
        if(f>i) {
            for(contador = i; contador <= f; contador += p) {
                res.innerHTML += contador + ' &#128073 '
            }
        } else {
            for(contador = i; contador >= f; contador += p) {
                res.innerHTML += contador + ' &#128073 '
            }
        }
        res.innerHTML += ' &#127988'
    }
}