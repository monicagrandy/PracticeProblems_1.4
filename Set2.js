//1: Car Dealership
/* 
Create an array of car names. Use a while loop to collect car names from said array. 
Basically just write a loop that will print each item in the array
*/
cars = ["Jeep Wrangler", "Mercedes G Wagon", "Range Rover"];
var i = 0;
	 text = "";
while(cars[i]) {
	console.log(cars[i]);
	i++;
}

//2: Backward Loop
/*
Fix the loop below so it starts counting downwards from 10 and stop at 1. 
The output should be 10 9 8 7 6 5 4 3 2 1 with line breaks.
var i = 0;
while (i < 10) {
    document.getElementById("demo").innerHTML += i + "<br>";
    i++;
}
*/
var i = 10;
while (i > 0) {
	console.log(i);
	i--;
}

//3: Addition
// Use a while loop to print out the numbers 1-20

var i = 1
while(i < 21) {
	if(i % 2 == 0) {
	console.log(i);
	}
	i++;
}

