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

    tentativas.push(Number(sugestao.value))

    if (tentativas.includes(numeroCerto)) {
        console.log("acertou")
        ganhou.style.zIndex = 2
        ganhou.style.display = "block"
        perdeu.style.display = "none"
        bia.style.display = "none"
    } else {
        console.log("errou")
        perdeu.style.zIndex = 2
        perdeu.style.display = "block"
        ganhou.style.display = "none"
        bia.style.display = "none"
    }
    console.log(tentativas)

})



