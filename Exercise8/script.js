//Dice result variable
let result = 0;
const d6_even_faces = [[6,1],[4,3],[2,5]];
const d6_odd_faces = [[1,6],[3,4],[5,2]];

const d6_path_start = "assets/d6/";
const d6_path_end = "_face.png"

const d6_faces = 
[
    document.getElementById("result_face"),
    document.getElementById("opposite_face"),
    document.getElementById("left_face"),
    document.getElementById("right_face"),
    document.getElementById("top_face"),
    document.getElementById("bottom_face"),
]

const d6_die = document.querySelector('.dice');

function updateD6Faces(faces)
{
    i=0;
    for (const pair of faces)
    {

        for (const element of pair)
        {
            d6_faces[i].src = `${d6_path_start}${element}${d6_path_end}`
            i++;
        }
    }
}

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
    
    updateD6Faces(current_faces);
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

    d6_die.style.animation = 'dice-roll 2s linear';
    d6_die.addEventListener('animationiteration', () =>
    {
        console.log("I am rolling!!!")
        d6_die.style.animation = 'none';
        cycleD6(result);
    })

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