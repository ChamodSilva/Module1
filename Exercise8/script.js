//Dice result variable
let result = 0;

function rollD6()
{
    //Declaring the constants of the dices minimum and maximum roll.
    minRoll = Math.ceil(1);
    maxRoll = Math.floor(6);

    console.log("Rolling d6 die!");
    
    //Generating number between and including the minRoll and maxRoll
    result = Math.floor(Math.random() * (maxRoll - minRoll +1)) + minRoll;
    
    //Updating the result on the html page
    updateResult(result);
}

function rollD10()
{
    //Declaring the constants of the dices minimum and maximum roll
    minRoll = Math.ceil(1);
    maxRoll = Math.floor(10);

    console.log("Rolling d10 die!")

    //Generating number between and including the minRoll and maxRoll
    result = Math.floor(Math.random() * (maxRoll - minRoll +1)) + minRoll;

    //Updating the result on the html page
    updateResult(result);
}

function updateResult(result)
{
    document.getElementById("results").innerHTML = result;
}