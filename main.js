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

const favoriteRecipe = {
  title: 'Lasagna',
  servings: 3,
  ingredients: ['lasagne', 'tomato sauce', 'parsley', 'beef', 'ricotta', 'mozarella']
}

console.log(favoriteRecipe.title)
console.log(`Serves: ${favoriteRecipe.servings}`)

for (item of favoriteRecipe.ingredients) {
  console.log(item);
}


//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa

const books = [{
  title: 'Norwegian Wood',
  author: 'Haruki Murakami',
  alreadyRead: true
},
{
  title: 'War and Peace',
  author: 'Leo Tolstoy',
  alreadyRead: false
},
{
  title: 'The Fault in Our Stars',
  author: 'John Green',
  alreadyRead: true
}
]

for (item of books) {
  if (item.alreadyRead === true) {
    console.log(`You already read ${item.title} by ${item.author}`);
  } else {
    console.log(`You haven't read ${item.title} by ${item.author}`);
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


const favoriteMovie = {
  title: 'The Life of Pi',
  director: 'Ang Lee',
  actors: ['Suraj Sharma', 'Irrfan Khan', 'Tabassum Fatima Hashmi'],
  releaseYear: 2012,
  duration: 127,
  increaseDuraton() {
    this.duration += 30;
  }
}

console.log(favoriteMovie.title)
console.log(favoriteMovie.director)
console.log(favoriteMovie.releaseYear)


//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];

console.log(Array.isArray(arrayList))


//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

let str = "hello";

const countCharacters = str => {
  let obj = {};

  for (letter of str.toLowerCase()) {
    obj[letter] = str.match(new RegExp(letter, "g")).length;
  }

  return obj;
}

console.log(countCharacters(str))

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


const extend = (obj1, obj2) => {
  return { ...obj1, ...obj2 }
}

console.log(extend(object1, object2));
