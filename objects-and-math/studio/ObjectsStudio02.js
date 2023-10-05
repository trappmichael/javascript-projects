// Code your orbitCircumference function here:

function orbitCircumference(altitude = 2000) {
  return Math.round(2 * Math.PI * altitude);
}

console.log(orbitCircumference(2000));

// Code your missionDuration function here:

function missionDuration(numOrbits, radiusOrbit = 2000, speedOrbit = 28000) {
  return Math.round(((numOrbits * orbitCircumference(radiusOrbit)) / speedOrbit)*100)/100;
}

console.log(missionDuration(3));

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let entries = [];
  let randomNum = 0;
  while (entries.length < 1) {
    randomNum = Math.floor(Math.random()*arr.length);
    if (entries.includes(arr[randomNum]) === false) {
      entries.push(arr[randomNum]);
    }
  }
  return entries[0];
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate, spacewalkOrbits = 3, radiusOrbit = 2000, speedOrbit = 28000) {
  let oxygenUsed = Math.round(candidate.o2Used(missionDuration(spacewalkOrbits))*1000)/1000;
  let durationSpacewalk = missionDuration(spacewalkOrbits, radiusOrbit, speedOrbit);
  return console.log(`${candidate.name} will perform the spacewalk, which will last ${durationSpacewalk} hours and require ${oxygenUsed} kg of Oxygen.`);
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let numOrbits = 5

 console.log(`The mission will travel ${orbitCircumference() * numOrbits} km around the planet, and it will take ${missionDuration(numOrbits)} hours to complete.`);

 // Spacewalker chosen randomly
 let randomSpacewalker = selectRandomEntry(crew);
 oxygenExpended(randomSpacewalker);

 // Bonus: spacewalker chosen by lowest oxygen usage
 
 function selectEfficientSpacewalker(candidates) {
    let mostEfficient = candidates[0];
    for (i = 0; i < candidates.length; i++) {
      if (mostEfficient.o2Used(1) > candidates[i].o2Used(1)) {
        mostEfficient = candidates[i];
      }
    }
    return mostEfficient;
 }
 
 let efficientSpacewalker = selectEfficientSpacewalker(crew);
 oxygenExpended(efficientSpacewalker);
