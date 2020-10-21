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

const recipe = {
  title: "flan",
  servings: 4,
  ingredients: ["sugar", "egg", "milk"] 
}

console.log(recipe.title);
console.log("Serves:", recipe.servings);
console.log("Ingredients: \n", recipe.ingredients)


//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa
const arrOfBooks = [
  {
    title: "Kitchen",
    author: "Banana Yoshimoto",
    alreadyRead: true
  },
  {
    title: "Finish",
    author: "Jon Acuff",
    alreadyRead: false
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    alreadyRead: false
  },
  {
    title: "Code",
    author: "Charles Petzold",
    alreadyRead: false
  },
  {
    title: "Better",
    author: "Charles Duhigg",
    alreadyRead: true
  },
]
for(let key in arrOfBooks){
  let book = arrOfBooks[key]
  if(book.alreadyRead){
    console.log(`You already read ${book.title} by ${book.author}.`);
  }else {
    console.log(`You have not read ${book.title} by ${book.author}.`);
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

const faveMovie = {
  title: "Howl's Moving Castle",
  director: "Hayao Miyazaki",
  actors: ["Chieko Baisho", "Takuya Kimura", "Akihiro Miwa"], 
  releaseYear: 2004,
  duration: 119,
}

console.log(faveMovie.title);
console.log(faveMovie.director);
console.log(faveMovie.releaseYear);
console.log(faveMovie.duration+30);

//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];
if(Array.isArray(arrayList)){
  console.log(`ArrayList is an array`);
}else if (Object.prototype.toString.call(arrayList)){
  console.log(`It's an object`)
}

//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

function countCharacters(str){
  let result = {};
  for(let char of str){
    !result[char] ? result[char]=1 : result[char]++;
  }
  return result;
}

console.log(countCharacters("Hello World"))

//Exercise #6
// Write a function that accepts two objects
// as arguments and 
// *extends* all of the key/value pairs of the second one to the first one
function extend(obj1, obj2) {
  for(let key in obj2){
    if(!obj1[key]) obj1[key] = obj2[key];
  }
  return obj1
}
console.log(extend({a: 1, c: 3}, {b: 2, c: 4})) //=> {a: 1, b:2, c:4}

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