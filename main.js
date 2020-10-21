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

const favRecipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};
console.log(`${favRecipe.title} \nServes: ${favRecipe.servings} \nIngredients: \n${favRecipe.ingredients[0]} \n${favRecipe.ingredients[1]} \n${favRecipe.ingredients[2]}`);


//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa

const bookDetails = [{ title: "Harry Potter", author: "J.K Rowling", alreadyRead: true },
{ title: "Twilight", author: "Stephanie Meyer", alreadyRead: false }]
for (let i = 0; i < bookDetails.length; i++) {
  console.log(`${bookDetails[i].title} by ${bookDetails[i].author}`)
  if (bookDetails[i].alreadyRead == true) {
    console.log(`You already read ${bookDetails[i].title} by ${bookDetails[i].author}`)
  } else {
    console.log(`You have not read ${bookDetails[i].title} by ${bookDetails[i].author} yet`)
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

const shawshank = {
  title: 'Shawshank Redemption',
  director: 'Frank Darabont',
  actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  releaseYear: 1994,
  duration: 142
}
console.log(shawshank.title);
console.log(shawshank.director);
console.log(shawshank.releaseYear);
console.log(shawshank.duration + 30);

//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object

let arrayList = [1, 2, 3];

console.log(`The arrayList an array: ${Array.isArray(arrayList)} `);

//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

const countCharacters = function (str) {
  return str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};
console.log(countCharacters("hello"));

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

function extend(a, b) {
  for (let key in b)
    if (b.hasOwnProperty(key))
      a[key] = b[key];
  return a;
}
console.log(extend(object1, object2));