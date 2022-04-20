function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                set.Attribute('src','foto-bebe-m.jpg')
            } else if (idade < 21) {
                // JOVEM
                set.Attribute('src','foto-jovem-m.jpg')
            } else if (idade < 50) {
                // ADULTO
                set.Attribute('src','foto-adulto-m.jpg')
            } else {
                // IDOSO
                set.Attribute('src','foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src','foto-bebe-f.jpg')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                // IDOSO
                set.Attribute('src','foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        }
    }