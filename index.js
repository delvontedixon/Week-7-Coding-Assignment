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

\n creates pace between lines-----
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
*/
console.log("\n2 Create Array of Names & 2A Loop for average letters");
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

/*
2A. Use a loop to iterate through the array and calculate the average number of letters per name.
*/
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
  console.log("name:", names[i], "Total Letters:", totalLetters);
}
let averageName = totalLetters / names.length;
console.log("Average Letters", averageName);
/*
2B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
console.log("\n2B.");
let concatNames = "";
for (let i = 0; i < names.length; i++) {
  concatNames = concatNames.concat(names[i] + " "); //the " " adds spaces to each name
  console.log("Names concatenated", concatNames);
}
/*
3. How do you access the last element of any array?
*/
console.log("\n3. Last element of the ages array:", ages[ages.length - 1]);
/*
4. How do you access the first element of any array?
*/
console.log("\n4. First element of the ages array:", ages[0]);
/* --- Its [0] because in JS the numbers start from 0 instead of 1



5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"]; // starting with this array
let nameLengths = [5, 3, 4];        // create a new array
*/
console.log("\n5. ");
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
  console.log("Name lengths array:", nameLengths);
}
/*
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/
console.log("\n6. ");
let lettersTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
  lettersTotal += nameLengths[i];
  console.log("Letters Total:", lettersTotal);
}
/*
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/
console.log("\n7. ");
function concatWords(word, n) {
  let concat = word.repeat(n);
  console.log(concat);
}
concatWords("Hello", 3);
/*
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/
console.log("\n8. ");
function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName("Delvonte", "Dixon");
/*
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/
console.log("\n9. ");
let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    console.log("Total:", total);
  }
  if (total > 100) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
sumNumbersArray(numbers2);
/*
10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/
console.log("\n10. ");
function calculateNumbersAverage(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
    console.log("Execute Function - total:", total);
  }
  let average = total / array.length;
  console.log("Average:", average);
}
calculateNumbersAverage(numbers2);
/*
11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/
console.log("\n11. ");

let numbers3 = [500, 600, 700];
let numbers4 = [50, 60, 700];

function twoAverages(array1, array2) {
  console.log("Parameters:", array1, array2);
  let total1 = 0;
  let total2 = 0;
  for (const number of array1) {
    total1 += number;
    console.log("Number:", number, "Total1:", total1);
  }
  for (const number of array2) {
    total2 += number;
    console.log("Number:", number, "Total2:", total2);
  }
  let average1 = total1 / array1.length;
  let average2 = total2 / array2.length;
  console.log("Averages", average1, average2);

  if (average1 > average2) {
    console.log(true);
    return true;
  } else if (average1 < average2) {
    console.log(false);
    return false;
  } else {
    console.log("Equal Numbers");
  }
}
twoAverages(numbers3, numbers4);
/*
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
console.log("\n12. ");
function willBuyDrink(isHotOutside, moneyInPocket) {
  console.log("Parameters", isHotOutside, moneyInPocket);
  let buyDrink = isHotOutside === true && moneyInPocket > 90;
  console.log("Buy a drink?", buyDrink);
  return buyDrink;
}
willBuyDrink(true, 100);
