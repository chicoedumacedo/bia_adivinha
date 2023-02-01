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

    // function hasDuplicates(tentativas) {
    //     let valuesSoFar = [];
    //     for (let i = 0; i < tentativas.length; ++i) {
    //       let value = tentativas[i];
    //       if (valuesSoFar.indexOf(value) !== -1) {
    //         return true;
    //       }
    //       valuesSoFar.push(value);
    //     }
    //     return false;
    //   }

    // tentativa.addEventListener('click', function () {
    //     if (tentativas.includes(sugestao.value) === true){
    //         tentativas.push(Number(sugestao.value)) 
    //     }else{
    //         alert('Palpite Repetido')
         
    // }
tentativa.addEventListener('click', function () {
    
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





