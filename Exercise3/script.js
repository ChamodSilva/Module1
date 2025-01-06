//Setting predefined array of colours to be randomized from.
const colours = ["goldenrod", "blue", "red", "green", "purple", "pink"]

//Change background colour function that can be used on any column and its respective headings.
function changeBackgroundColour(columnId, headingId)
{
    //setting the relevent ids
    const column = document.getElementById(columnId);
    const heading = document.getElementById(headingId);
    
    //Assigning a newColour variable by calling the changeCurrentColour.
    newColour = changeCurrentColour(column.style.backgroundColor);
    column.style.backgroundColor = newColour;
    heading.innerHTML = newColour;

}

//Returns a new colour from the array of colours, that is different to the current colour.
function changeCurrentColour(currentColour)
{
    let newColour;
    do
    {
        randomColour = Math.floor(Math.random() * colours.length);
        newColour = colours[randomColour];
    }while (currentColour == newColour)
    return newColour;
}