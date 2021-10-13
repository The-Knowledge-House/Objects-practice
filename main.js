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

const steakRecipe = {
  title: 'Steak with Rosemary',
  servings: 2,
  ingredients: ['steak','butter','salt','pepper','rosemary'],

};
console.log(steakRecipe)




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
  title: 'The Bible',
  author: 'God',
  alreadyRead: false
},
{
  title: 'The BFG',
  author: 'Roald Dahl',
  alreadyRead: true
},
{
  title: 'Fantastic Mr. Fox',
  author: 'Roald Dahl who is pretty much, God',
  alreadyRead: true
}];

for(let obj in books){
  if (books[obj].alreadyRead == true){
    console.log(`You already read ${books[obj].title} by ${books[obj].author}.`)
  }else{
    console.log(`You need to read ${books[obj].title} by ${books[obj].author}.`)
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

const favMovie = {
  title: 'Pulp Fiction',
  director: 'Quentin Tarantino',
  actors: ['Samuel Jackson','Uma Thurman','Jon Travolta'],
  releaseYear: 1994,
  duration:154
};
console.log(favMovie.title)
console.log(favMovie.director)
console.log(favMovie.releaseYear)
favMovie.duration += 30;
console.log(favMovie.duration)




//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];
const arrayOrNah = Array.isArray(arrayList);
console.log(arrayOrNah)


//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

function countCharacters (str){
  let occurenceCount = {};
  for (let i = 0; i < str.length; i++){
    let origin = str.charAt(i);
    if (occurenceCount[origin]){
      occurenceCount[origin]++
    }else{
      occurenceCount[origin] = 1 
    }
  }
  console.log(occurenceCount)
}
countCharacters("Lasagna")
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