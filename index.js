console.log("Week 7 Coding Assignment");
/*
Coding Steps:
All questions should be printed to your Browser's console using console.log()
*/

/*
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
*/

// Beginning of code here
console.log("1. Create array called ages");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
//End of code here

/*
1A Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!

\n creates pace between lines
*/

// Beginning of code here
console.log("\n1A. Substracting array");
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);
//End of code here

/*
1B Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
*/
// Beginning of code here
console.log("\n1B. Adding new age to array");
ages.push(43);
console.log("New age added", ages);
let repeatMinusAge = ages[ages.length - 1] - ages[0];
// 43 minus 3 equals 40
console.log("repeatMinusAge", repeatMinusAge);
//End of code here

/*
1C Use a loop to iterate through the array and calculate the average age.
*/
// Beginning of code here
console.log("\n1C. Looping through array");
let sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {
  sumOfAges += ages[i];
  console.log("index:", i, "sumOfAges:", sumOfAges);
}
// Im dividing the sum of all the ages and dividing by the number of ages
let average = sumOfAges / ages.length;
console.log("Average Age", average);
//End of code here
/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

How do you access the last element of any array?

How do you access the first element of any array?

Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array

Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

Write a function that takes an array of numbers and returns the average of all the elements in the array.

Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
