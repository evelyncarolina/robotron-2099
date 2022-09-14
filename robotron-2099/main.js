const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "-"){
        braco.value = parseInt(braco.value) - 1
    } else{
        braco.value = parseInt(braco.value) + 1
    }
}












