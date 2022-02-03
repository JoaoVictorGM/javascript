let num = document.getElementById('txtn')
let list = document.getElementById('flist')
let res = document.getElementById('resu')
let valores = [] // variavel que vai ser usada para analisar os dados

function numero (n){
    if(Number(n) >= 1 && Number(n) <= 100){ /*se o número n for maior ou igual a 1 e (&&) menor ou igual 100, volta verdadeiro ou senão(else) falso*/
     return true
}else{
    return false

    }

}

function lista(n, l){
    if (l.indexOf(Number(n)) != -1){/* indexOf retorna o número do índice onde a string de destino foi encontrada pela primeira vez ou -1(-1 quando o valor nao foi encontrado na lista ) se o destino não for encontrado, no caso se o valor for diferente(!=) e verdadeiro senão(else) falso */
        return true
    } else {
        return false 
    }

}
function calcular () {
   
 /* variação >>  if (num.value.length == 0 || num.value > 100 )*/
    if(numero(num.value) && !lista(num.value, valores)) /*só vai funcionar se for  number e se nao tiver em (lista) no caso é usado a exclamação*/{
        valores.push(Number(num.value, valores))/*'push() adiciona um elemento no vetor "valores"*/
        let item = document.createElement('option')/*criará um elemento com nome de item na  tag option do HTML*/
        item.text = `Valor ${num.value} foi adicionado`/*Adicionara um texto na lista com o numero digitado se o número for digitado corretamente */
        list.appendChild(item)/*appendChild adicionará um elemento filho (children) em um elemento pai(parent), no caso o elemento de 'item' será introduzido em 'list'*/
        resu.innerHTML=''/*Depois que é mostrado a resposta e adicionar denovo limpa a resposta.*/
                       
     }else{
         window.alert('[ERRO] valor inválido ou encontrado na lista. ')
     }
     num.value = ''
     num.focus()/*depois de digitado o número ele apaga não precisando ter que excluir manualmente*/
       
    }
    
    function conclusao (){
    if (valores.length == 0)/*length é o comprimento do numero*/{
        window.alert('Adicione valores  antes de finalizar')/*se caso  não foi digitado nenhum número e foi clicado no botão, apareça está mensagem*/
    }else{
        let tot = valores.length/* para saber quantos elementos o valor tem, por isso usado o '.length' para identificar a quantidade*/
        let maior = valores[0]/*é visto o maior número na posição 0 ou a primeira posição.*/
        let menor = valores[0]/*é visto o menor número na posição 0 ou a primeira posição.*/
        /*no caso maior e o primeiro numero será o primeiro numero*/
        let soma = 0
        let media = 0

        for (let posi in valores){/*aqui mostra a posição do valor maior*/
            soma += valores[posi]/*aqui a variavel soma sera todos os valores somados*/
            if(valores[posi] > maior)
               maior = valores[posi]
                if (valores[posi] < menor)
                  menor = valores[posi]/*aqui mostra a posição do valor menor*/ 
                  /*vai ser analisado todos os valores e mostrará o valor maior e o menor */ 
        }
        media = soma / tot /*Aqui a media dividi a soma dos números pela quantidade deles*/
        resu.innerHTML = ''
        resu.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`/* += simbolo para concatenação*/ 
        resu.innerHTML += `<p>O maior número é ${maior}.</p>`
        resu.innerHTML +=`<p>O menor número é ${menor}.</p>`
        resu.innerHTML +=`<p> A soma entre todos os números é ${soma}.`
        resu.innerHTML += `<p> A média é ${media}.</p>`
    }

    }

    
    
