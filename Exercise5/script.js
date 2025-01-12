const hobbies = 
[
    "Gaming",
    "Game Design",
    "Reading",
    "Electronics",
    "Cooking"
]

//Replacing values of element 1 and 4 in the array
hobbies[0] = "Coding"
hobbies[3] = "Driving"

console.log(hobbies)

//Inserting into the list, at the start of array
hobbies.unshift("Flying")

//Inserting into the list, at the end of array
hobbies.push("Diving")

//Printing the array to the console, and its size
console.log(hobbies, hobbies.length)