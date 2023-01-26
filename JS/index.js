const opAnteriorFunc = document.querySelector("#opAnterior");
const opInseridaFunc = document.querySelector("#opInserida");
const botao = document.querySelectorAll ("#botoes button");

class Calculator {
    constructor(opAnteriorFunc, opInseridaFunc) {
        this.opAnteriorFunc = opAnteriorFunc
        this.opInseridaFunc = opInseridaFunc
        this.opInserida = ""

    }
}



botao.forEach ((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;
        if (+value >= 0 || value === '.'){
            console.log (value)
        } else {
            console.log ('op.' + value)
        }
    })
})