const InputA = document.querySelector(".number-a");
const InputB = document.querySelector(".number-b");
const SelectOperation = document.querySelector(".select-operation")
const btnResult= document.querySelector(".btn-result");
const Output = document.querySelector(".output");

btnResult.addEventListener('click', function(){
    const a = Number (InputA.value);
    const b = Number (InputB.value);
    const operation = SelectOperation.value;
    const result = calculator ({a, b, operation})
    Output.innerHTML = result;
})

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divine(a, b) {
    return a / b;
}


const OPERATIONS = {
    sum: "+",
    substract: "-",
    multiply: "*",
    divine:"/",
}

function calculator({a, b, operation}){
    let result = null;
    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
    
        case OPERATIONS.substract:
            result = substract(a, b);
            break;

        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;

        case OPERATIONS.divine:
            result = divine(a, b);
            break;

        default:
            break;
    }
    return result;
}