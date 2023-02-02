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
        const Anterior = +this.opAnteriorFunc.innerText.split(" ") [0];
        const Inserida = +this.opInseridaFunc.innerText;

        switch(operation){
            case "+":
                operationValue = Anterior + Inserida
                this.updateScreen (operationValue, operation, Anterior, Inserida)
                break;
            default:
                return;
        }
    }

    updateScreen (
        operationValue = null, 
        operation = null, 
        Inserida = null, 
        Anterior = null
    ){

            console.log (operationValue, operation, Anterior, Inserida);

        if (operationValue === null) {
            this.opInseridaFunc.innerText += this.opInserida;
        } else {
            if (Anterior === 0){
                this.operationValue = Inserida;
            }
            this.opAnteriorFunc.innerText = `${operationValue} ${operation}`;
            this.opInseridaFunc.innerText = "";
        }
        
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