let amigo = {nome: 'José',
sexo:'M',
peso:85.4,
engordar(p=0){
    console.log('Engordou')
     this.peso += p /*(this) e uma palavra alta referência a um objeto*/

 
}}
amigo.engordar(2) /*volta a posição 2 do objeto*/


console.log(`${amigo.nome} peso ${amigo.peso}Kg`)