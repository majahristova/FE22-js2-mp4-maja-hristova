class Calculator {
    previousOperstorText;
    currentOperatorText;
    operation;
    currentOperand = '';
    previousOperand = '';
    constructor(previousOperstorText, currentOperatorText) {
        this.previousOperstorText = previousOperstorText;
        this.currentOperatorText = currentOperatorText;
        this.clear();
    }
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
    }
    addingNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    choseOperation(operation) {
        if (this.currentOperand === "")
            return;
        if (this.previousOperand !== "") {
            this.computeNumB();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }
    computeNumB() {
        let compute;
        let prev;
        let current;
        prev = parseFloat(this.previousOperand);
        current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current))
            return;
        switch (this.operation) {
            case "+":
                compute = prev + current;
                break;
            case "-":
                compute = prev - current;
                break;
            case "*":
                compute = prev * current;
                break;
            case "÷":
                compute = prev / current;
                break;
        }
        this.currentOperand = compute;
        this.operation = undefined;
        this.previousOperand = "";
    }
    updateAndDisplayNum() {
        this.currentOperatorText.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperstorText.innerText = ` ${this.currentOperand} ${this.operation}`;
        }
    }
}
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearAllButton = document.querySelector("[data-all-clear]");
const previousOperstorText = document.querySelector("[data-previousoperend]");
const currentOperatorText = document.querySelector("[data-currentoperend]");
const calculator = new Calculator(previousOperstorText, currentOperatorText);
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.addingNumber(button.innerText);
        calculator.updateAndDisplayNum();
    });
});
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.choseOperation(button.innerText);
        calculator.updateAndDisplayNum();
    });
});
equalButton.addEventListener("click", (button) => {
    calculator.computeNumB();
    calculator.updateAndDisplayNum();
});
clearAllButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateAndDisplayNum();
});
deleteButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateAndDisplayNum();
});
