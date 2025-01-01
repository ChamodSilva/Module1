//4 functions with the 4 main mathematical operations (+, -, *, /) returning the calculation.


function drawCalulation(numOne, numTwo, operation)
{ 
    return calculation = numOne + " " + operation + " " + numTwo;
}

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

function calculate(operation)
{
    let numOne = document.getElementById("numOne");
    let numTwo = document.getElementById("numTwo");

    let result
   
    console.log(numOne)

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
    console.log(result)
    return result;
}