
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"]
}

function launchOutput(num) {
    if (((num % 2) === 0) && ((num % 3) === 0) && ((num % 5) === 0)) {
        return 'LaunchCode Rocks!';
    } else if (((num % 2) === 0) && ((num % 5) === 0)) {
        return 'Launch Rocks! (CRASH!!!!)';
    } else if (((num % 3) === 0) && ((num % 5) === 0)) {
        return 'Code Rocks!';
    } else if (((num % 2) === 0) && ((num % 3) === 0)) {
        return 'LaunchCode!';
    } else if (((num % 5) === 0) && (num < 6)) {
        return 'Rocks!';
    } else if (((num % 3) === 0) && (num < 4)) {
        return 'Code!';
    } else if (((num % 2) === 0) && (num < 3)) {
        return 'Launch!';
    } else if (!(((num % 2) === 0) && ((num % 3) === 0) && ((num % 5) === 0))) {
        return `Rutabagas! That doesn't work.`;
    }

}

module.exports = {
    launchcode: launchcode,
    launchOutput: launchOutput
}

