let numeros = []
let num = document.getElementById('num')
let lista = document.querySelector('select#lista')
lista.innerHTML = ''
let res = document.querySelector('div#res')

function naLista(n) {
    if(numeros.indexOf(n) == -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    let numero = Number(num.value)

    if(naLista(numero)) {
        window.alert('Número presente na lista, tente outro diferente!')
    } else if(num.value.length == 0 || numero < 1 || numero > 100) {
        window.alert('Preencha o campo com um número válido!')
    } else {
        numeros.push(numero)
        let item = document.createElement('option')
        item.text = 'O valor ' + numero + ' foi adicionado.'
        lista.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(numeros.length == 0) {
        window.alert('Lista vazia, insira um numero para continuar!')
    } else {
        res.innerHTML = ''
        res.innerHTML += `<p>O número de valores na lista é <strong>${numeros.length}</strong>.</p>`
        numeros.sort()
        res.innerHTML += `<p>O menor valor da lista é <strong>${numeros[0]}</strong>.</p>`
        res.innerHTML += `<p>O maior valor da lista é <strong>${numeros[numeros.length-1]}</strong>.</p>`
        let cont = 0
        for(let x in numeros) {
            cont += numeros[x]
        }
        res.innerHTML += `<p>A soma de todos os valores é <strong>${cont}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores é <strong>${cont/numeros.length}</strong>.</p>`
    }
}