const opAnteriorFunc = document.querySelector("#opAnterior");
const opInseridaFunc = document.querySelector("#opInserida");
const botao = document.querySelectorAll ("#botoes button");

class Calculator {
    constructor(opAnteriorFunc, opInseridaFunc) {
        this.opAnteriorFunc = opAnteriorFunc;
        this.opInseridaFunc = opInseridaFunc;
        this.opInserida = "";

    }
    addDigit(digit) {
        if (digit === "." && this.opInseridaFunc.innerText.includes (".")) {
            return;
        }
       
        this.opInserida = digit;
        this.updateScreen ();
    }

    processOperation (operation) {
        let operationValue;
        let Anterior = +this.opAnteriorFunc.innerText;
        let Inserida = +this.opInseridaFunc.innerText;
    }




    updateScreen (){
        this.opInseridaFunc.innerText += this.opInserida;
    }
}

const calc = new Calculator (opAnteriorFunc, opInseridaFunc)


botao.forEach ((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;
        if (+value >= 0 || value === '.'){
            calc.addDigit(value);
        } else {
            calc.processOperation (value)
        }
    })
})