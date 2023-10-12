// launchcode.test.js code:
const launchcodeStuff = require('../index.js');

describe("Testing launchcode object", function(){

  // Write your unit tests here!
  test("Value of 'Organization' should be 'nonprofit'", function() {
    expect(launchcodeStuff.launchcode.organization).toBe("nonprofit");
  });

  test("Value of 'executiveDirector' should be 'Jeff'", function() {
    expect(launchcodeStuff.launchcode.executiveDirector).toBe("Jeff");
  });

  test("Value of 'percentageCoolEmployees' should be 100", function() {
    expect(launchcodeStuff.launchcode.percentageCoolEmployees).toBe(100);
  });

  test("Value of 'programsOffered' should be an array of length 3 with the correct values", function() {
    expect(launchcodeStuff.launchcode.programsOffered.includes('Web Development')).toBe(true);
    expect(launchcodeStuff.launchcode.programsOffered.includes('Data Analysis')).toBe(true);
    expect(launchcodeStuff.launchcode.programsOffered.includes('Liftoff')).toBe(true);
    expect(launchcodeStuff.launchcode.programsOffered.length).toBe(3);
  });

});

describe ("Testing launchOutput() function", function() {
  test("Returns 'Launch!' when passed a number only divisible by 2", function() {
    expect(launchcodeStuff.launchOutput(2)).toBe('Launch!');
  });
})