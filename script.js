const topDisplay = document.getElementById("topDisplay")
const botDisplay = document.getElementById("botDisplay");
const delBtn = document.getElementById("delBtn");
const clearBtn = document.getElementById("clearBtn");

const addBtn = document.getElementById("addBtn");
const minusBtn = document.getElementById("minusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]")

const DEFAULT_DISPLAY_VALUE = "0";

let currentValue = DEFAULT_DISPLAY_VALUE;
let lastValue = DEFAULT_DISPLAY_VALUE;
let currentOperator;

console.log(operatorBtns);

numberBtns.forEach((button) => {
    button.addEventListener(("click"), () => appendBotNumber(button.textContent));
})

operatorBtns.forEach((button) => {
    button.addEventListener(("click"), () => setOperation(button.textContent));
})

operatorBtns.forEach((button) => {
    button.addEventListener(("click"), activateButton);
})

function appendBotNumber(number) {
    if (botDisplay.textContent === "0") {
        botDisplay.textContent = "";
    }
    botDisplay.textContent += number;
    currentValue = botDisplay.textContent
    console.log("LAST VALUE IS " + lastValue)
    console.log("CURRENT VALUE IS " + currentValue)
}

function appendTopNumber(number) {
    topDisplay.textContent = number;
}

function setOperation(operator) {
    if (operator === "=") {
        evaluate();
        return;
    } else if (operator === "DEL") {
        deleteNum();
        return;
    } else if (operator === "C") {
        clearBOTHDisplay();
        return;
    }
    lastValue = currentValue;
    appendTopNumber(lastValue);
    clearBotDisplay();
    // switch (operator)
    // {
    //     case "+":
    //         addNum(lastValue, currentValue);
    //         break;

    //     case "-":
    //         minusNum();
    //         break;

    //     case "*":
    //         multiplyNum();
    //         break;

    //     case "/":
    //         divideNum();
    // }
}

function clearBOTHDisplay() {
    topDisplay.textContent = "";
    botDisplay.textContent = "0";
    deactivateBtns();
}

function clearTopDisplay() {
    topDisplay.textContent = "";
}

function clearBotDisplay() {
    botDisplay.textContent = "";
}

function deleteNum() {
    if (botDisplay.textContent === "0") return;
    botDisplay.textContent = botDisplay.textContent
        .toString()
        .slice(0, -1);
    if (botDisplay.textContent === "") return botDisplay.textContent = "0";
}

function addNum(a, b) {
    clearBOTHDisplay();
    return botDisplay.textContent = +a + +b;
}

function minusNum(a, b) {
    clearBOTHDisplay();
    return botDisplay.textContent = +a - +b;
}

function multiplyNum(a, b) {
    clearBOTHDisplay();
    return botDisplay.textContent = +a * +b;
}

function divideNum(a, b) {
    clearBOTHDisplay();
    return botDisplay.textContent = +a / +b;
}

function evaluate() {
    console.log(currentOperator.id)
    if (currentOperator.id === "addBtn") {
        addNum(lastValue, currentValue);
    }
    if (currentOperator.id === "minusBtn") {
        minusNum(lastValue, currentValue);
    }
    if (currentOperator.id === "multiplyBtn") {
        multiplyNum(lastValue, currentValue);
    }
    if (currentOperator.id === "divideBtn") {
        divideNum(lastValue, currentValue);
    }
}

function activateButton() {
    if (this === delBtn || this === clearBtn || this === equalBtn) return;

    currentOperator = this;
    this.classList.add("activatedBtn")

    console.log("CURRENT OPERATOR ID IS: " + currentOperator.id)

    if (this === addBtn) {
        minusBtn.classList.remove("activatedBtn");
        multiplyBtn.classList.remove("activatedBtn");
        divideBtn.classList.remove("activatedBtn");
    } else if (this === minusBtn) {
        addBtn.classList.remove("activatedBtn");
        multiplyBtn.classList.remove("activatedBtn");
        divideBtn.classList.remove("activatedBtn");
    } else if (this === multiplyBtn) {
        addBtn.classList.remove("activatedBtn");
        minusBtn.classList.remove("activatedBtn");
        divideBtn.classList.remove("activatedBtn");
    } else if (this === divideBtn) {
        addBtn.classList.remove("activatedBtn");
        minusBtn.classList.remove("activatedBtn");
        multiplyBtn.classList.remove("activatedBtn");
    }
}

function deactivateBtns() {
    addBtn.classList.remove("activatedBtn");
    minusBtn.classList.remove("activatedBtn");
    multiplyBtn.classList.remove("activatedBtn");
    divideBtn.classList.remove("activatedBtn");
}

window.onload = () => {
    botDisplay.textContent = DEFAULT_DISPLAY_VALUE;
}