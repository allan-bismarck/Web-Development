    function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var input_ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(input_ano.value.length == 0 || Number(input_ano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var input_sex = document.getElementsByName('radsex')
        var idade = ano - Number(input_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') /*É a mesma coisa de ir lá no no código HTML e adicionar a linha <img id= "foto">*/
        if(input_sex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/homem-crianca.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        } else {
            genero = 'mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
    }
    img.style.maxWidth = '400px'
    img.style.display = 'block'
    img.style.margin = '0px auto'
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    res.appendChild(img)
}