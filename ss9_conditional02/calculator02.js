/*How to store all the information for what' number currently ? Using class */
class Calculator {

/*constructor to get element from the data-previous-operand and data-current-operand (only one time for constructor)*/
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    /*Next we will create all of function*/

    clear() {
        /*this function clear everything all of the element from current and operand operand equal empty string*/
        this.currentOperand = ''
        this.previousOperand = ''
        this.operand = 'undefined'/*the operation to be undefined since they don't have any operation selected if we clear things */

    }

    delete() {
        if (this.currentOperand !== '') {
            this.currentOperand = this.currentOperand.toString().slice(0, -1)
        } else if (this.previousOperand !== '')
            this.previousOperand = this.previousOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        /*to hooked up with all of  our button and our display is probably being updated every time we click*/
        if (number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperationFunction(operation) {
        if (this.currentOperand === '') return
        if (this.currentOperand !== '') {/*if it different null*/
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }


    getDisplayOperator(operator) {
        let operatorDisplay
        if (this.previousOperand === '') {/*nếu nó equal rỗng (nghĩa là nó có ptu) thì suy ra kiểm*/
            this.operandp = ''
        }
    }


    displayOnScreen() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

/*Get element from button*/
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
/*Let's work on hooking up all of our different variables down here and making them operate on our calculator object*/
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
/*Now that we've passed the element those elements in we can actually use this calculator object so to first use it*/
/*We wanna loop over all these different buttons and for each buttons, so we can say button add event listener
                            and listener is going to be whenever we click            */
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.displayOnScreen()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperationFunction(button.innerText)
        calculator.displayOnScreen()
    })
})
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.displayOnScreen()
})
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.displayOnScreen()
})
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.displayOnScreen()
})