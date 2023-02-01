let sugestao = document.getElementById("sugestao")
let bia = document.getElementById("bia")
let ganhou = document.getElementById("ganhou")
let perdeu = document.getElementById("perdeu")
let tentativa = document.getElementById("tentativa")

let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let numeroCerto = numeroRandomico;
let number = 0;

console.log(numeroCerto)

let tentativas = []

    tentativa.addEventListener('click', function () {

    // if (tentativas.includes(sugestao.value) == true){
    //     alert('Palpite Repetido')
    //     console.log('teste',tentativas.includes(sugestao.value) == true)
    // }else{
    //     tentativas.push(Number(sugestao.value))  
    // }

    tentativas.push(Number(sugestao.value))
    

    if (sugestao.value > numeroRandomico){
       alert('O numero digitado é maior') 
    }
    if (sugestao.value < numeroRandomico){
        alert('O numero digitado é menor') 
    }

    if (tentativas.length <= 10){
        console.log('numero de tentativas menor que 10', tentativas.length)

        if (tentativas.includes(numeroCerto)) {
            console.log("acertou")
            ganhou.style.zIndex = 2
            ganhou.style.display = "block"
            perdeu.style.display = "none"
            bia.style.display = "none"
            alert('Parabéns Você Ganhou')
        } else {
            console.log("errou")
            perdeu.style.zIndex = 2
            perdeu.style.display = "block"
            ganhou.style.display = "none"
            bia.style.display = "none"
        }
        
    } else {
        console.log('numero tentativas maior que 10', tentativas.length)
        alert('Voce perdeu')
        tentativas = []
    }

    console.log(tentativas)

    document.getElementById('resultado').innerHTML = tentativas;
})





