function calcular(){
    let num = document.getElementById('txtn')
    let tabuada = document.getElementById('seltab')
    if(num.value.length == 0) {// 'value' retorna o valor digitado na variavel
        window.alert('[ERRO] Por favor, digite um numero!')
       // aqui no caso se o usuário apertar o botão de calcular sem ter digitado nenhum número, ira aparecer uma mensagem de erro
    }else{
       let n = Number(num.value)// variável do número que foi digitado
       let c = 1 // variável do número que será o multiplicador
       tabuada.innerHTML=''
    while ( c<= 10){
       let item = document.createElement('option')//criara um elemento no HTML
       item.text = `${n} x ${c} = ${n*c}`// com o repetidor(while) será mostrado o numero digitado com o multiplicador na tela até chegar a 10
       item.value = `tabuada${c}`
       tabuada.appendChild(item)//adicionará um item na tabuada
       c++ //contador de um em um da variavel c até 10

       }
    } 

}
   
  
