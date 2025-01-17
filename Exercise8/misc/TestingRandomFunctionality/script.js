//Dice result variable
let result = 0;
const d6_even_faces = [[6,1],[4,3],[2,5]];
const d6_odd_faces = [[1,6],[3,4],[5,2]];

const d6_path_start = "assets/d6/";
const d6_path_end = "_face.png"

const d6_face_ids = ["result_face", "opposite_face", "left_face", "right_face", "top_face", "bottom_face"];

const d6_six_face = "assets/d6/6_face.png";
const d6_one_face = "assets/d6/1_face.png";
const d6_four_face = "assets/d6/4_face.png";
const d6_three_face = "assets/d6/3_face.png";
const d6_two_face = "assets/d6/2_face.png";
const d6_five_face = "assets/d6/5_face.png";

function updateD6Faces(faces)
{
    i=0;
    for (const pair of faces)
    {
        console.log(pair);

        for (const element of pair)
        {
            console.log(element);
            document.getElementById(d6_face_ids[i]).src = `${d6_path_start}${element}${d6_path_end}`
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