//Used to 'draw' the calculation, or at least return a value for the page to display
function drawCalulation(numOne, numTwo, operation, result)
{ 
    return calculation = numOne + " " + operation + " " + numTwo + " = " + result;
}

//4 functions with the 4 main mathematical operations (+, -, *, /) returning the calculation.
function add(init, mod)
{
    /*Calculates the addition of two numbers

    Args:
        init: The number in input box 1.
        mod: The number in input box 2.

    Returns:
        The addition of the 2 numbers.*/
    console.log("Addition");
    return init + mod;
}

function subtract(init, mod)
{
    /*Calculates the subtraction of two numbers.

    Args:
        init: The number in input box 1.
        mod: The number in input box 2.

    Returns:
        The subtraction of the second number from the first number.*/
    console.log("Subtraction");
    return init - mod;
}

function multiply(init, mod)
{
    /*Calculates the multiplication of two numbers.

    Args:
        init: The number in input box 1.
        mod: The number in input box 2.

    Returns:
        The multiplication of the two numbers*/
    console.log("Multiplication");
    return init * mod;
}

function divide(init, mod)
{
    /*Calculates the division of two numbers.

    Args:
        init: The number in input box 1.
        mod: The number in input box 2.

    Returns:
        The division of number two, from number one*/
    console.log("Division");
    return init / mod;
}

module.exports = {add, subtract, multiply, divide};

//calculate() method that determines the selected operations, and calls the respective calculation method with corresponding values, and prints the result.
function calculate(operation)
{
    /*
    Based on the "operation" parameter received, the function will execute the respective calculate funtion.

    Args:
        operation: the operation selected by the user.
    */

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