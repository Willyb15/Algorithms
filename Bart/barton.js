//////////////////////////////////////////////////////////////////
///////////////DIGITALCRAFTS ADMISSIONS CHALLENGE/////////////////
//////////////////////////////////////////////////////////////////
// INSTRUCTIONS: 
// - Please write the code for each question directly below the question itself.
// - Hit Run at the top of the page to test your code and execute any functions you've called.
// - Press "Save" when finished. Press "Share", copy the URL, and return it to hello@digitalcrafts.com.
// - For this challenge, consider the words "argument" and "parameter" to be interchangable.
// - PLEASE NOTE: You should also take a screenshot of your work (or copy it elsewhere) just in case!!


// 1) Declare two variables, a string and an integer named "fullName" and "age". Set them equal to your name and age.
	//Declaring a variable as a string
	var fullName = "Bart Young";
	//declaring variable as an integer or number
	var age = 30;
	



// 2) Declare an empty array called "myArray". 
// Add the variables from #1 (fullName and age) to the empty array using the push method.
// Print to the console.
 //defining an variable as an empty array
 var myArray = [];
 //using "push" method to put variables defined earlier into array
 myArray.push (fullName, age);
 //could also do it this way
    //myArray.push(fullName)
    //myArray.push(age)
 
 console.log(myArray);
 
 //arrays are variables that hold multiple variables. They start with an index of zero. So the index 0 of my array is the string "Bart Young"
 console.log(myArray[0]);
//the value stored at index 1 of myArray should be the age variable which has a value of 30
console.log(myArray[1]);

// 3) Write a simple function that takes no parameters called "sayHello". 
// Make it print "Hello!" to the console when called.
// Call the function.
//defining the function
function sayHello (){
	//script for the function to run
	console.log("Hello!");
}
//calling the function
sayHello();




// 4) Declare a variable named splitName and set it equal to
// fullName split into two seperate objects in an array.
// (In other words, if the variable fullName is equal to "John Smith", then splitName will 
// equal ["John", "Smith"] when run.)
// Print splitName to the console.
// HINT: Remember to research the methods and concepts listed in the instructions PDF.

//set parameter for array at 2

//This says whenever you see a space (" ") seperate that shit using the inherent "split method"
var splitName = fullName.split(" ",2);

console.log(splitName);




// 5) Write another simple function that takes no parameters called "sayName".
// When called, this function should print "Hello, ____!" to the console, where the blank is 
// equal to the first value in the splitName array from #4. Don't forget the "!"
// Call the function.  (In our example, "Hello, John!" would be printed to the console.)

function sayName(){ 
    var hello = 'Hello, ';
    //take the variable from at index 0 of splitname ("bart") and set it equal to a variable name "first"
    var first = splitName[0];
    var ex = '!';
    //concatanate all that shit togther and print it
    console.log(hello+first+ex);
}


// 6) Write another function named myAge.  This function should take one parameter: the year you 
// were born, and it should calculate and print the implied age to the console.
// Call the function, passing the year you were born as the argument/parameter.
// HINT: http://www.w3schools.com/js/js_functions.asp
//function that ta
function myAge(yearYouWereBorn) { 
    var age = (2016-yearYouWereBorn);
    console.log(age);
    }

myAge(1986);


// 7) Using the basic function given below, add code so that sum_odd_numbers will print to the console the sum of all the odd numbers from 1 to 5000.
// HINT: Consider using a 'for loop'.

//can solve like this
function sum_odd_numbers() {
    var sum = 0;

    for (i = 1; i <= 5000; i=i+2) { 
        sum = sum + i;
        }
   
    return sum;
}
console.log(sum_odd_numbers());


//or solve using the modulus (%)
function sumOdd(){
	var sum = 0;
	for (var i=0; i<5000;i++){
		if(i%2==1){
			sum+=i;
		}
	}
	return sum;
}
console.log(sumOdd());



//////////////////////////////////////////////////////////////////
/////////////////////////////THE END!/////////////////////////////
//////////////////////////////////////////////////////////////////