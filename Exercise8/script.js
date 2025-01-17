//Dice result variable
let d6result = 0;
let d10result = 0;
const d6_even_faces = [[6,1],[4,3],[2,5]];
const d6_odd_faces = [[1,6],[3,4],[5,2]];
const d10_even_faces = [[10,1],[8,7],[4,3],[2,5],[6,9]];
const d10_odd_faces = [[1,10],[7,8],[3,4],[5,2],[9,6]];

const d6_path_start = "assets/d6/";
const d10_path_start = "assets/d10/";
const dice_path_end = "_face.png"

const d6_dialog = "Your D6 dice rolled a ";
const d10_dialog = "Your D10 dice rolled a ";

const d6_faces = 
[
    document.getElementById("result_face"),
    document.getElementById("opposite_face"),
    document.getElementById("left_face"),
    document.getElementById("right_face"),
    document.getElementById("top_face"),
    document.getElementById("bottom_face"),
]

const d10_faces = 
[
    document.getElementById("result_top_face"),
    document.getElementById("front_bottom_face"),
    document.getElementById("left_top_face"),
    document.getElementById("left_bottom_face"),
    document.getElementById("right_top_face"),
    document.getElementById("right_bottom_face"),
    document.getElementById("left-back_top_face"),
    document.getElementById("left-back_bottom_face"),
    document.getElementById("right-back_top_face"),
    document.getElementById("right-back_bottom_face"),
]

const d6_die = document.querySelector('.dice');
const d10_die = document.querySelector('.d10');

function updateD6Faces(faces)
{
    i=0;
    for (const pair of faces)
    {

        for (const element of pair)
        {
            d6_faces[i].src = `${d6_path_start}${element}${dice_path_end}`
            i++;
        }
    }
    d6_die.style.animation = 'dice-roll-full 0.5s ease-out';
}

function updateD10Faces(faces)
{
    i=0;
    for (const pair of faces)
    {

        for (const element of pair)
        {
            d10_faces[i].src = `${d10_path_start}${element}${dice_path_end}`
            i++;
        }
    }
    d10_die.style.animation = 'd10-roll-full 0.5s ease-out';
}

function cycleD6(dice_result)
{
    let current_faces;
    if (dice_result % 2 === 0)
    {
        current_faces = d6_even_faces;
    }
    else
    {
        current_faces = d6_odd_faces;        
    }

    while (dice_result != parseInt(current_faces[0][0]))
    {
        const lastPair = current_faces.pop();
        current_faces.unshift(lastPair);
    }
    
    updateD6Faces(current_faces);
}

function cycleD10(dice_result)
{
    let current_faces;
    if (dice_result % 2 === 0)
    {
        current_faces = d10_even_faces;
    }
    else
    {
        current_faces = d10_odd_faces;        
    }

    while (dice_result != parseInt(current_faces[0][0]))
    {
        const lastPair = current_faces.pop();
        current_faces.unshift(lastPair);
    }
    
    updateD10Faces(current_faces);
}


function rollD6()
{
    //Declaring the constants of the dices minimum and maximum roll.
    minRoll = Math.ceil(1);
    maxRoll = Math.floor(6);

    console.log("Rolling d6 die!");
    
    //Generating number between and including the minRoll and maxRoll
    d6result = Math.floor(Math.random() * (maxRoll - minRoll +1)) + minRoll;
    
    console.log(d6result)

    d6_die.style.animation = 'dice-roll-mid 0.5s ease-in';
    d6_die.addEventListener('animationend', () =>
    {
        cycleD6(d6result);
    });

    //Updating the result on the html page
    updateD6Result(d6result);
}

function rollD10()
{
    //Declaring the constants of the dices minimum and maximum roll
    minRoll = Math.ceil(1);
    maxRoll = Math.floor(10);

    console.log("Rolling d10 die!")

    //Generating number between and including the minRoll and maxRoll
    d10result = Math.floor(Math.random() * (maxRoll - minRoll +1)) + minRoll;

    console.log(d10result)

    d10_die.style.animation = 'd10-roll-mid 0.5s ease-in';
    d10_die.addEventListener('animationend', () =>
    {
        cycleD10(d10result);
    });

    //Updating the result on the html page
    updateD10Result(d10result);
}

function updateD6Result(dice_result)
{
    d6_die.addEventListener('animationend', () =>
    {
        //Updating the result on the html page
        document.getElementById("d6-result").innerHTML = `${d6_dialog}${dice_result}!`;;
    });
}

function updateD10Result(dice_result)
{
    d10_die.addEventListener('animationend', () =>
    {
        //Updating the result on the html page
        document.getElementById("d10-result").innerHTML = `${d10_dialog}${dice_result}!`;;
    });
}