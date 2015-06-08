//1: Translator
/*
Write a function named helloWorld that: takes 1 argument, a language code (e.g. "es", "de", "en") returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.
*/
var lang = prompt("What language? Your options are: en, fr, es") // gets user input before running the function

function helloWorld(lang) {
	if(lang == "en") {
		console.log("Hello World");
	}
	else if(lang == "fr") {
		console.log("Bonjour le monde");
	}
	else if(lang == "es") {
		console.log("Hola mundo");
	}
	else {
		console.log("I don't know this language");
	}
}

console.log(helloWorld(lang));
console.log(helloWorld("fr"));
console.log(helloWorld("ar"));

//2: Grade Assigner
/*
Write a function named assignGrade that: takes 1 argument, a number score. returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

var score = prompt("What did you score on that test?");

function gradeAssigner(score) {
	if(score > 89) {
		return "A";
	}
	else if(score > 79) {
		return "B";
	}
	else if(score > 69) {
		return "C";
	}
	else if(score > 59) {
		return "D";
	}
	else if(score > 69) {
		return "F";
	}
}

console.log("Your grade is " + gradeAssigner(score));

//3: Pluralizer
/*
Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/
var word = prompt("Word please!");

function pluralizer(word){
	if(word == "sheep" || word == "moose"){
		return word;
	}
	else if(word == "mouse"){
		return "mice";
	}
	else if(word == "goose") {
		return "geese";
	}
	else {
		return word + "s"
	}
}

console.log("The plural of that word is " + pluralizer(word));













