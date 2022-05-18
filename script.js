const display = document.getElementById("display");
const delBtn = document.getElementById("delBtn");
const clearBtn = document.getElementById("clearBtn");

const addBtn = document.getElementById("addBtn");
const minusBts = document.getElementById("minusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]")

const DEFAULT_DISPLAY_VALUE = 0;

let currentValue = DEFAULT_DISPLAY_VALUE;
let currentOperator;


console.log(numberBtns);

numberBtns.forEach((button) => {
    button.addEventListener(("click"), () => appendNumber(button.textContent))
})

operatorBtns.forEach((button) => {
    button.addEventListener(("click"), () => setOperation(button.textContent))
})

operatorBtns.forEach((button) => {
    button.addEventListener(("click"), () => this.classList.add("activatedBtn"))
})

function appendNumber(number) {
    display.textContent += number;
    currentValue = display.textContent
}

function setOperation(operator) {
    switch (operator)
    {
        case "C":
            clearDisplay();
            break;
            
        case "DEL":
            deleteNum();
            break;

        case "+":
            activateButton(operator);
            addNum();
            break;

        case "-":
            minusNum();
            break;
    }
    currentOperator = operator;
}

function clearDisplay() {
    display.textContent = "";
}

function deleteNum() {
    display.textContent = display.textContent
        .toString()
        .slice(0, -1)
}

function addNum() {
}

function activateButton() {
    this.classList.add("activatedBtn")
}