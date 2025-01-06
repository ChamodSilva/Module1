//Used to 'draw' the calculation, or at least return a value for the page to display
function drawCalulation(numOne, numTwo, operation, result)
{ 
    return calculation = numOne + " " + operation + " " + numTwo + " = " + result;
}

//4 functions with the 4 main mathematical operations (+, -, *, /) returning the calculation.
function add(init, mod)
{
    console.log("Addition");
    return init + mod;
}

function subtract(init, mod)
{
    console.log("Subtraction");
    return init - mod;
}

function multiply(init, mod)
{
    console.log("Multiplication");
    return init * mod;
}

function divide(init, mod)
{
    console.log("Division");
    return init / mod;
}

//calculate() method that determines the selected operations, and calls the respective calculation method with corresponding values, and prints the result.
function calculate(operation)
{
    let numOne = parseFloat(document.getElementById("numOne").value);
    let numTwo = parseFloat(document.getElementById("numTwo").value);
    let calVisual = document.getElementById("calculations");

    let result;

    switch (operation)
    {
        case '+':
            result = add(numOne, numTwo)
            break
        case '-':
            result = subtract(numOne, numTwo)
            break
        case '*':
                result = multiply(numOne, numTwo)
                break
        case '/':
            result = divide(numOne, numTwo)
            break
    }
    calVisual.innerHTML = drawCalulation(numOne, numTwo, operation, result);
}

//greet() method that takes in value from input box and greets the name entered.
function greet()
{
    let name = document.getElementById("name").value;
    let strGreeting = "Hello " + name;
    document.getElementById("greetings").innerHTML = strGreeting;
}