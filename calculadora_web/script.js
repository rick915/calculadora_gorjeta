let conta= 0
let pessoas= 0

const contaInput= document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento){
    conta = Number(evento.terget.value)
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
}