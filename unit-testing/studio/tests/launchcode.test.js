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

  test("Returns 'Code!' when passed a number only divisible by 3", function() {
    expect(launchcodeStuff.launchOutput(3)).toBe('Code!');
  });

  test("Returns 'Rocks!' when passed a number only divisible by 5", function() {
    expect(launchcodeStuff.launchOutput(5)).toBe('Rocks!');
  });

  test("Returns 'LaunchCode!' when passed a number divisible by 2 and 3", function() {
    expect(launchcodeStuff.launchOutput(6)).toBe('LaunchCode!');
  });

  test("Returns 'Code Rocks!' when passed a number divisible by 3 and 5", function() {
    expect(launchcodeStuff.launchOutput(15)).toBe('Code Rocks!');
  });

  test("Returns 'Launch Rocks! (CRASH!!!!)' when passed a number divisible by 2 and 5", function() {
    expect(launchcodeStuff.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("Returns 'LaunchCode Rocks!' when passed a number divisible by 2, 3, and 5", function() {
    expect(launchcodeStuff.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("Returns 'Rutabagas! That doesn't work.' when passed a number not divisible by 2, 3, or 5", function() {
    expect(launchcodeStuff.launchOutput(29)).toBe("Rutabagas! That doesn't work.");
  });

});