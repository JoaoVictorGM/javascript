
function carregar(){
var msg = window.document.getElementById('msg')

var img = window.document.getElementById('imagem')
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
if (hora >= 0 && hora  < 12){
    //Bom Dia
    img.src=  'manha.png'
    document.body.style.background='#e5d414'
   
}else if (hora > 12 && hora <= 18){
    //Boa tarde!!
     img.src = 'tarde.png'
     document.body.style.background='#e5b114'

}else {
    //Boa Noite
    img.src ='noite.png'
    document.body.style.background='#214572'
   }
}