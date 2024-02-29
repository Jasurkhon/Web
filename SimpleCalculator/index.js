// console.log("Hello Wolrd!");
// console.log("Hello, Pizza I like you...");

//window.alert("lknbdlsdmvnc")


// document.getElementById("MyH1").textContent = "This is my firts H1'"
// document.getElementById("MyP1").textContent = "This is my first P1" 


//variables
    //- numbers
// let x;
// x = 100;
// console.log(x*200);

// let age = 25;
// console.log(`I am ${age} years old`);

// let name = "John";
// console.log(`My name is ${name} and I am ${age} years old`);

//     // -string

//let firstName = "Bro";
// let lastName = "Code"
// let email = "bro@gmail.com"

// console.log(`Your name is ${firstName} and the datatype of the variable: ${typeof firstName}`)
// console.log(`Your last name is ${lastName} and the datatype of the variable: ${typeof lastNameName}`)
// console.log(`Your email is ${email} and the datatype of the variable: ${typeof email}`)

// let isOnline = true;
// console.log(isOnline);

// let forSale = false;
// console.log(`Does this car is for Sale or Not- ${forSale}`);

// if (isOnline){
//     console.log("yes")
// }


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
 