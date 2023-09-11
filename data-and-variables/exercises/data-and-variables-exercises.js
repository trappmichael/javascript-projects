// Declare and assign the variables below

let nameSpaceShuttle = "Determination";
let speedMphSpaceShuttle = 17500;
let distanceKmToMars = 225000000;
let distanceKmToMoon = 384400;
let conversionMilesPerKm = .621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log (typeof nameSpaceShuttle);
console.log (typeof speedMphSpaceShuttle);
console.log (typeof distanceKmToMars);
console.log (typeof distanceKmToMoon);
console.log (typeof conversionMilesPerKm);

// Calculate a space mission below

let distanceMilesToMars = distanceKmToMars * conversionMilesPerKm;
let durationHrsToMars = distanceMilesToMars / speedMphSpaceShuttle;
let durationDaysToMars = durationHrsToMars / 24;

// Print the results of the space mission calculations below

console.log (nameSpaceShuttle + " will take " + durationDaysToMars + " days to reach Mars.");

// Calculate a trip to the moon below

let distanceMilesToMoon = distanceKmToMoon * conversionMilesPerKm;
let durationHrsToMoon = distanceMilesToMoon / speedMphSpaceShuttle;
let durationDaysToMoon = durationHrsToMoon / 24;

// Print the results of the trip to the moon below

console.log (nameSpaceShuttle + " will take " + durationDaysToMoon + " days to reach the Moon.");