const buttons = document.querySelectorAll('.btn');
const screenum = document.querySelector('.numbers');
const OP = document.querySelector('.operator')
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = null;
let justCalculated = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            
            if (justCalculated) {
                firstNumber = '';
                secondNumber = '';
                operator = '';
                result = null;
                justCalculated = false;
            }


            if (operator === '') {

                firstNumber += value;
                screenum.textContent = firstNumber;
            }

            else {
                secondNumber += value;
                screenum.textContent = secondNumber;
            }
        }

        else if (['+', '-', 'X', '÷'].includes(value)) {
            if (firstNumber !== '') {
                operator = value;
                justCalculated = false;
                OP.textContent = operator;
            }
        }

        else if (value === '=') {
            if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
                result = calculate(Number(firstNumber), Number(secondNumber), operator);
                screenum.textContent = result;

                firstNumber = result.toString();
                secondNumber = '';
                operator = '';
                justCalculated = true;
                OP.textContent = "";
            }
        }

        else if (value === "C") {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            result = null;
            justCalculated = false;
            screenum.textContent = "";
            OP.textContent = "";
        }



        function calculate(num1, num2, op) {
            switch(op) {
                case '+': return num1 + num2;
                case '-': return num1 - num2;
                case 'X': return num1 * num2;
                case "÷": return num2 !== 0 ? num1 / num2 : "Error";
                default: return 0;
            }
        }


    });
});