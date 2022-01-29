let num = [8, 9, 6, 3]

num.push(7)
num.sort()
 console.log(`O Vetor tem ${num.length} posições`)
 console.log(`O primeiro valor do vetor é ${num[0]}`)
 let pos = num.indexOf(3)
 if(pos == -1) {
     console.log('O valor não foi encontrado !')
 } else {
     console.log(`O valor está na posição${pos}`)
 }
