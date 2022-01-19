function calcular(){
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpass')
    var resu = document.getElementById('resu')

        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resu.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] faltam dados !')
    }else{
        resu.innerHTML = 'Contando: <br>'
        var i =Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <=0){
            window.alert='Passo inválido! Considerando PASSO 1'
            p = 1 

        }
        if (i < f){
            //Contagem crescente
            for(c = i;c <= f;c += p) {
            resu.innerHTML += `${c} \u{1F47D}`
           } 
    }else{
            //Contagem decrescente
            for(c = i;c >= f; c -= p){
                resu.innerHTML += `${c} \u{1F47D}`
            }
        }
    
         resu.innerHTML += `\u{1f3c1}`
            
        }
           
    }

    
  
