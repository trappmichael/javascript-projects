// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let entries = [];
  let randomNum = 0;
  while (entries.length < 3) {
    randomNum = Math.floor(Math.random()*arr.length);
    if (entries.includes(arr[randomNum]) === false) {
      entries.push(arr[randomNum]);
    }
  }
  return entries;
}

// Code your buildCrewArray function here:

function buildCrewArray(selectedIds, candidates) {
  let crew = [];
  for (i = 0; i < selectedIds.length; i++) {
    for (j = 0; j < candidates.length; j++) {
      if (candidates[j].astronautID === selectedIds[i]) {
        crew.push(candidates[j]);
      }
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let selectedCrewIds = selectRandomEntry(idNumbers);
let selectedAnimals = buildCrewArray(selectedCrewIds, animals);
console.log(`'${selectedAnimals[0].name}, ${selectedAnimals[1].name}, and ${selectedAnimals[2].name} are going to space!'`)
