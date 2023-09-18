//String methods can be combined in a process called method chaining.

// let word = 'JavaScript';

// console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?

// console.log(word.slice(4).toUpperCase())

//Experiment with other combinations (chains) of string methods.

// console.log(word.replace("Java","Script").toUpperCase())

// console.log(word.slice(word.length - 3))

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);