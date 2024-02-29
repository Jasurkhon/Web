const input1 = document.getElementById('item1')
const input2 = document.getElementById('item2')
const resultElement = document.getElementById('result')
const submitBTn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multipleBtn = document.getElementById('multiple')
const divisionBtn = document.getElementById('division')
const clsBtn = document.getElementById('cls')
let action = ""


plusBtn.onclick = function() {
    action = "+"
}

minusBtn.onclick = function() {
    action = "-"
}


multipleBtn.onclick = function() {
    action = "*"
}

divisionBtn.onclick = function() {
    action = "/"
}

clsBtn.onclick = function() {
    resultElement.textContent = " "
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    }
    else{
        resultElement.style.color = 'green'
    }

    resultElement.textContent = result
}

function calculateNumbers(inp1, inp2, actionSymbol) {
    
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    const symbol = actionSymbol
    
    switch(symbol) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
            break;
    }

    return result

} 


submitBTn.onclick = function(){
 
    if (action == "+"){
        resultElement.textContent = calculateNumbers (input1, input2, "+")
    }

    else if (action == "-"){
        resultElement.textContent = calculateNumbers (input1, input2, "-")
    }

    else if (action == "*"){
        resultElement.textContent = calculateNumbers (input1, input2, "*")
      
    }

    else if (action == "/"){
        resultElement.textContent = calculateNumbers (input1, input2, "/")
    }

  
}


console.log(resultElement)
 