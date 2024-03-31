let conta= 0
let pessoas= 0
let porcentagem= 0

const contaInput= document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento){
    conta = Number(evento.target.value)
}

const pessoasInput = document.querySelector(".pessoas")
pessoasInput.addEventListener("input", recerberQuantidadePessoas)

function recerberQuantidadePessoas(evento){
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")
    if(evento.target.value === "0") {
        paragrafoErro.style.display ="block"
        divErro.setAttribute("id", "erro-div")
    }else{
        paragrafoErro.style.display ="none"
        divErro.setAttribute("id", "") 
        pessoas = Number(evento.target.value)
    }

    calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento) {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    if(evento.target.value !== ""){
        porcentagem = parseFloat(evento.target.value)/100
    }else{
        porcentagem =0
    }

    
}

const gorjetaInput =document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPorcentagem)

function calcular(){
    if(conta !==0 && porcentagem !==0 && pessoas !== 0){
        const strongGT = document.querySelector(".gorjeta-total > strong")
        strongGT.innerHTML = `R$ ${(conta * porcentagem/pessoas).toFixed(2)}`

        const strongT = document.querySelector(".total > strong")
        strongT.innerHTML =`R$ ${((conta + (conta*porcentagem))/pessoas).toFixed(2)}`
    }

}

const botaoLimpar = document.querySelector(".resulstados > button")
botaoLimpar.addEventListener("click", limpar)

function limpar() {
    contaInput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    gorjetaInput.value = ""

    pessoasInput.value= ""
    document.querySelector(".gorjeta-total > strong").innerHTML = " R$ 0.00"
    document.querySelector(".total > strong").innerHTML = " R$  0.00"
}