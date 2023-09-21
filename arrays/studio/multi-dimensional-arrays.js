const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let cabinetFood = food.split(",").sort();
let cabinetEquip = equipment.split(",").sort();
let cabinetPets = pets.split(",").sort();
let cabinetSleepAids = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [cabinetFood, cabinetEquip, cabinetPets, cabinetSleepAids];

console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let cabinetSelect = input.question("Input a cabinet # (1 - 4) to learn its contents: ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if ((cabinetSelect > 0) && (cabinetSelect < 5)) {
    console.log(`Cabinet ${cabinetSelect} contains ${cargoHold[cabinetSelect - 1]}.`);
} else {
    console.log(`Invalid cabinet # entered.`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

cabinetSelect = input.question("Input a cabinet # (1 - 4) to learn its contents: ");
let itemSelect = ""

if ((cabinetSelect > 0) && (cabinetSelect < 5)) {

    itemSelect = input.question("Input an item name to check for it in the selected cabinet: ");
    
    if (cargoHold[cabinetSelect - 1].includes(itemSelect)) {
        console.log(`Cabinet ${cabinetSelect} DOES contain ${itemSelect}.`);
    } else {
        console.log(`Cabinet ${cabinetSelect} DOES NOT contain ${itemSelect}.`);
    }
} else {
    console.log(`Invalid cabinet # entered.`);
}