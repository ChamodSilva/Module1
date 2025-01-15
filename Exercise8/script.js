//Dice result variable
let result = 0;
const d6_even_faces = [[6,1],[4,3],[2,5]];
const d6_odd_faces = [[1,6],[3,4],[5,2]];

function cycleD6(result)
{
    let current_faces;
    if (result % 2 === 0)
    {
        current_faces = d6_even_faces;
    }
    else
    {
        current_faces = d6_odd_faces;        
    }

    while (result != parseInt(current_faces[0][0]))
    {
        const lastPair = current_faces.pop();
        current_faces.unshift(lastPair);
    }
    
    

}

function rollD6()
{
    //Declaring the constants of the dices minimum and maximum roll.
    minRoll = Math.ceil(1);
    maxRoll = Math.floor(6);

    console.log("Rolling d6 die!");
    
    //Generating number between and including the minRoll and maxRoll
    result = Math.floor(Math.random() * (maxRoll - minRoll +1)) + minRoll;
    
    console.log(result)

    //Updating the result on the html page
    updateResult(result);
    cycleD6(result);
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