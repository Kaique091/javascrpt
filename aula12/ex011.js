var idade = 66
console.log(`voce tem ${idade} anos entao `)
if (idade < 16) {
    console.log('n vota')
}else  if (idade < 18 || idade > 65){
        console.log('o voto é opcional')
    }else {
        console.log('tem que votar')
    }