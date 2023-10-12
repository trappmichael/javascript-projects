
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"]
}

function launchOutput(num) {
    if (((num % 2) === 0) && (num < 3)) {
        return 'Launch!';
    }
    return '';
}

module.exports = {
    launchcode: launchcode,
    launchOutput: launchOutput
}

