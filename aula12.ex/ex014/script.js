function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora sao ${hora} horas`

  if ( hora >= 0 && hora < 18 )
  img.scr = 'dia.png'
} 