//1: What number is bigger?
/*
Write a function named greaterNum that: takes 2 arguments, both numbers. 
Return whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works 
(e.g. "The greater number of 5 and 10 is 10.").
*/

function greaterNum(x,y){
	if (x > y){
		return x + " is greater than " + y;
	}
	else if (y > x){
		return y + " is greater than " + x;
	}
	else if (x === y){
		return "The values are equal!";
	}
	else {
		return "These values cannot be compared";
	}
}

console.log(greaterNum(5,16));
console.log(greaterNum(13,7));
console.log(greaterNum("apples", 9));
console.log(greaterNum(10,10));


//2: Even/Odd reporter
/*
Write a for loop that will iterate from 0 to 20. 
For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
*/
for(var i = 0; i < 21; i++) {
	if(i % 2 === 0) { //always compare to 0 with ===
		console.log(i + " is even");
	}
	else {
		console.log(i + " is odd");
	}
}

//3: Multiplication tables
/*Write a for loop that will iterate from 0 to 10. 
For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

for(var i = 0; i < 11; i++) {
	console.log(i + " x 9 = " + (i*9));
}

for(var i = 0; i < 101; i++) {
	for(var j = 0; j < 101; j++) {
		console.log(i + " x " + j + " = " + (i * j));
	}
}

/* Thinkful Answer:
// Multiplication tables
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}


for (var multiplier = 0; multiplier <= 10; multiplier++) {
 for (var i = 0; i <= 10; i++) {
   var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}
/*

//4: Grade Assigner
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

alert("Your grade is " + gradeAssigner(score));

/*
Check the results of assignGrade function from the conditionals exercise 
for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
*/

for(score = 60; score < 101; score++) {
	console.log("For a score of " + score + " you would recieve a " + gradeAssigner(score));
}



