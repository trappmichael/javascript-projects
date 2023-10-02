let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let bug = {
   name: "Almina",
   species: "Tardigrade",
   mass: .0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let crew = [superChimpOne, salamander, superChimpTwo, dog, bug];

function crewReports(animal) {
   return console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
} 

function fitnessTest(crewCandidates) {
   let testResults = [];
   for (i = 0; i < crewCandidates.length; i++) {
      let steps = 0;
      let turns = 0;
      while (steps <= 20) {
         steps += crewCandidates[i].move();
         turns++;
      }
      testResults.push(`${crewCandidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return testResults;
};

raceResults = fitnessTest(crew);

for (i = 0; i < crew.length; i++) {
   console.log(raceResults[i]);
}

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!