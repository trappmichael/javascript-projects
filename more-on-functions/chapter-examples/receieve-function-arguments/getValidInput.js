const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

// let startsWithA = function(str) {
//   return str[0].toLowerCase() === 'a';
// };

// console.log(getValidInput(`Input word that starts with 'a': `,startsWithA));

// TODO 2: write a validator 
// that ensures input is a vowel

let isVowel = function(letter) {
  return letter === 'e'||'a'||'i'||'o'||'u';
};

console.log(getValidInput(`Input a vowel: `, isVowel));

// Be sure to test your code!
