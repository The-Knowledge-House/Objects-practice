// Exercise #1
// Create an object to hold information on your favorite recipe.
//It should have properties for *title* (a string), *servings*(a number)
// and *ingredients*(an array of strings)
// On separate lines (one console.log statement for each), log the 
//recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let favoriteRecipe = {
  title: "mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(favoriteRecipe.title);
console.log(favoriteRecipe.servings);
console.log(favoriteRecipe.ingredients);


//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa

let bookArray = [{ title: "Harry Potter and the Sorcerer's Stone", author: "J. K. Rowling", alreadyRead: true }, { title: "1984", author: "George Orwell", alreadyRead: true }, { title: "The Shawshank Redemption", author: "Stephen King", alreadyRead: false }];

for (let i = 0; i < bookArray.length; i++) {
  if (bookArray[i].alreadyRead === true) {
    console.log(`You already read ${bookArray[i].title} by ${bookArray[i].author}`)
  } else { 
    console.log(`You did not read ${bookArray[i].title} by ${bookArray[i].author}`)
  }
}




//Exercise #3
//Create your object representing your favorite movie, like so
// const shawshank = {
//   title: 'Shawshank Redemption',
//   director: 'Frank Darabont',
//   actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//   releaseYear: 1994, 
//   duration: 142
// }
// After you have crreated your movie object, print the title 
// of your movie using dot notation
// Print the director's name
// Print the release year
// Maybe your favorite came with an extended cut, including deleted scenes. 
// Write a statement that increases your movie object's duration by 30 minutes. 

const dieHard = {
  title: "Die Hard",
  director: "John McTiernan",
  actors: ["Bruce Willis", "Bonnie Bedelia", "Alan Rickman"],
  releaseYear: 1988,
  duration: 132
}

console.log(dieHard.title);
console.log(dieHard.director);
console.log(dieHard.actors);
console.log(dieHard.releaseYear);
console.log(dieHard.duration);
dieHard.duration = dieHard.duration + 30




//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];
 
console.log(typeof arrayList);
console.log(Array.isArray(arrayList));

//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

function countCharacters(str) { //*******
  let freq = {};

  for (let i = 0; i <string.length; i++) {
      let character = string.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }
  return freq;
}


//Exercise #6
// Write a function that accepts two objects
// as arguments and 
// *extends* all of the key/value pairs of the second one to the first one
// function extend(obj1, obj2) {
  
// }
// extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}

object1 = {
  a: 1,
  b: 2,
  c: 3
};

object2 = {
  c: 4,
  d: 5,
  e: 6
};