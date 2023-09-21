const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuelLevel;
let numAstronauts;
let shuttleAltitude;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = input.question("Please enter fuel level: ");
startingFuelLevel = Number(startingFuelLevel);

while ((startingFuelLevel <= 5000) || (startingFuelLevel >= 30000)) {
  startingFuelLevel = input.question("Invalid input. Please enter fuel level greater than 5000 but less than 30000: ");
  startingFuelLevel = Number(startingFuelLevel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numAstronauts = input.question("Please enter the number of astronauts: ");
numAstronauts = Number(numAstronauts);

while ((numAstronauts < 1) || (numAstronauts > 7)) {
  numAstronauts = input.question("Invalid input. Please enter number greater than 0 and less than 8: ");
  numAstronauts = Number(numAstronauts);
}

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let actualFuelLevel = startingFuelLevel;
shuttleAltitude = 0;

while (actualFuelLevel > 0) {
  shuttleAltitude = shuttleAltitude + 50;
  actualFuelLevel = actualFuelLevel - (numAstronauts * 100);
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (shuttleAltitude >= 2000) {
  console.log(`The shuttle gained an altitude of ${shuttleAltitude} km. Orbit achieved!`);
} else {
  console.log(`The shuttle gained an altitude of ${shuttleAltitude} km. Failed to reach orbit.`);
}