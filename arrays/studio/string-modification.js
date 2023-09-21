const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThreeLetters = str.slice(0,3);
let modifiedStr = str.slice(3);
console.log(`${modifiedStr}${firstThreeLetters}`);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`When the first 3 letters are removed from "${str}", the result is: "${modifiedStr}${firstThreeLetters}."`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numLetters = input.question("How many letters (3-10) do you want to relocate? ");
let userNumLetters = str.slice(0, numLetters);
let remainingLetters = str.slice(numLetters);

console.log(`When the first ${numLetters} letters are removed from "${str}", the result is: "${remainingLetters}${userNumLetters}."`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if ((numLetters < 3) || (numLetters > str.length)) {
    numLetters = 3
    userNumLetters = str.slice(0, numLetters);
    remainingLetters = str.slice(numLetters);
    console.log(`Invalid number entered. Default to 3. When the first ${numLetters} letters are removed from "${str}", the result is: "${remainingLetters}${userNumLetters}."`);
} else {
    console.log(`When the first ${numLetters} letters are removed from "${str}", the result is: "${remainingLetters}${userNumLetters}."`);
}
