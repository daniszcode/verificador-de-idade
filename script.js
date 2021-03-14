function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')// cria o elemento de imagem no js//
        img.setAttribute('id', 'foto') // cria a id 'foto' para o elemento imagem//
        if (fsex[0].checked) { // se sexo 0 (masculino) estiver checked então genero = homem //
            genero = 'homem'
            if (idade >=0 && idade < 10) {
              // se idade maior ou igual a zero && idade menor q 10 então ele recebe essa img atribute//
             img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }    
        }else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
            // se idade maior ou igual a zero && idade menor q 10 então ele recebe essa img atribute//
           img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
              //jovem
              img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
              //adulta
              img.setAttribute('src', 'foto-adulto-f.png')
            } else {
              //idosa
              img.setAttribute('src', 'foto-idoso-f.png')
        }   }
        res.style.textAlign = 'center' // alinhar no js //
    }   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`  
        res.appendChild(img) //para a imagem ser lida pelo res apos as outras frases//

        
        
        
        
        
        
        
        
        
        
        
        

















}