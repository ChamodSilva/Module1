//Book object:
const book =
{
    title: "The Lion, the Witch and the Wardrobe",
    description: "A fantasy book written by C.S. Lewis",
    author: "C.S. Lewis",
    pages: 172
};

//Printing individual properties of the book object & and entire object
console.log("--------Individually printed values of object--------")
console.log("Title:", book.title)
console.log("Description:", book.description)
console.log("Author:", book.author)
console.log("Pages:", book.pages)

console.log("\n--------Printed as a whole object--------\n")
console.log("Book: ", book)

//Updating book description
book.description = "Just a story about a witch, a lion, and a wardrobe!"
console.log("Updated description of book: ", book.description)

const library = [];

console.log("This should be empty:", library);

library.push(book);

console.log("This should have 1 book:", library);


//Defining book objects to be pushed into library.
const book2 =
{
    title: "The Great Gatsby",
    description: "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with Jay Gatsby.",
    author: "F.Scott Fitzgerald",
    pages: 192
}

const book3 =
{
    title: "Sapiens",
    description: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, based on a series of lectures he taught at The Hebrew University of Jerusalem.",
    author: "Yuval Noah Harari",
    pages: 464
}

const book4 =
{
    title: "Atomic Habits",
    description: "James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.",
    author: "James Clear",
    pages: 320
}

const book5 =
{
    title: "The Kite Runner",
    description: "Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul.",
    author: "Khaled Hosseini",
    pages: 371
}

const book6 =
{
    title: "C++ for Dummies",
    description: "Enter the world of computer programming with this setp-by-step guide to the C++ language",
    author: "Stephen Randy Davis, Dan Gookin",
    pages: 480
}

library.push(book2)
library.push(book3)
library.push(book4)
library.push(book5)
library.push(book6)

console.log("The library has " + library.length + ". The books are as follows: ", library);

