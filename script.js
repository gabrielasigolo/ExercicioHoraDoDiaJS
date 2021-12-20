function carregar() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        document.body.style.background = '#c76e42'
        img.src = 'manhã.jpg'
        msg.innerHTML += ' Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        document.body.style.background = '#ffc16a'
        img.src = 'tarde.jpg'
        msg.innerHTML += ' Boa tarde!'
    } else {
        // BOA NOITE
        document.body.style.background = '#525463'
        img.src = 'noite.jpg'
        msg.innerHTML += ' Boa noite!'
    }
}

