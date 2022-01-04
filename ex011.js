var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

if (hora < 5){
    console.log(`Boa Madrugada, Agora são ${hora} horas e ${minutos} minutos!`)
}else if (hora <= 12 ){
    console.log(`Bom dia, agora são ${hora} horas e ${minutos} minutos!`)
}else if (hora < 18) {
    console.log(`Boa tarde, agora são ${hora} horas e ${minutos} minutos!`)
}else if (hora <= 23){
    console.log(`Boa Noite, agora são ${hora} e ${minutos} minutos!`)
}