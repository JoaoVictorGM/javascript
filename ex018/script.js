function calcular(){
    let num = document.getElementById('txtn')
    let tabuada = document.getElementById('seltab')
    if(num.value.lenght == 0) {
        window.alert('[ERRO] Por favor, digite um numero!')
       
    }else{
       let n = Number(num.value)
       let c = 1
       tabuada.innerHTML=''
    while ( c<= 10){
       let item = document.createElement('option')
       item.text = `${n} x ${c} = ${n*c}`
       item.value = `tabuada${c}`
       tabuada.appendChild(item)
       c++

       }
    } 

}
    
  
