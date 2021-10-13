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
	title: "Mac & Cheese",
	servings: 8,
	ingredients: ["pasta", "butter", "milk", "cheese"],
};

console.log(`${favoriteRecipe.title}`);
console.log(`Serves: ${favoriteRecipe.servings}`);
console.log(`Ingredients: ${favoriteRecipe.ingredients}`);
//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa

let books = [
	{
		title: "In Search of Lost Time",
		author: "Marcel Proust",
		alreadyRead: false,
	},
	{
		title: "The Great Gatsby",
		author: "F.Scott Fitzgerald",
		alreadyRead: true,
	},
	{
		title: "Moby Dick",
		author: "Herman Melville",
		alreadyRead: true,
	},
];

for (i = 0; i < books.length; i++) {
	if (books[i].alreadyRead === true) {
		console.log(`You already read ${books[i].title} by ${books[i].author}`);
	} else {
		console.log(`You didn't read ${books[i].title} by ${books[i].author}`);
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

const theAvengers = {
	title: "The Avengers",
	director: "Joss Whedon",
	actors: [
		"Robert Downey Jr",
		"Chris Evans",
		"Scarlett Johansson",
		"Mark Ruffalo",
		"Chris Hemsworth",
	],
	releaseYear: 2012,
	duration: 153,
};
console.log(theAvengers.title);
console.log(theAvengers.director);
console.log(theAvengers.releaseYear);
console.log((theAvengers.duration += 30));

//Exercise #4
//using the array provided below,
// How do you check if an object is an array or not?
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];

//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in
// the string
// function countCharacters(){
//
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}
function countCharacters(str) {
	let stringObject = {};
	for (let i = 0; i < str.length; i++) {
		let char = str.charAt(i);
		if (stringObject[char]) {
			stringObject[char]++;
		} else {
			stringObject[char] = 1;
		}
	}
	console.log(stringObject);
}
countCharacters("hello");

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
	c: 3,
};

object2 = {
	c: 4,
	d: 5,
	e: 6,
};
