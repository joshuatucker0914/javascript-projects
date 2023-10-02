let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautId: 1,
   move: function(){return Math.round(Math.random()*10);}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautId: 7,
   move: function(){return Math.round(Math.random()*10);}
};
let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautId: 3,
   move: function(){return Math.round(Math.random()*10);}
};
let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautId: 4,
   move: function(){return Math.round(Math.random()*10);}
};
let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautId: 2,
   move: function(){return Math.round(Math.random()*10);}
};

let crew = [superChimpOne,salamander,superChimpTwo,beagle,tardigrade];

function crewReports(x){
   let crew = x
   for(i = 0; i < crew.length; i++){
      console.log(`${x[i].name} is a ${x[i].species}. They are ${x[i].age} years old and ${x[i].mass} kilograms. Their ID is ${x[i].astronautId}. \n`)
   }
}

function fitnessTest(select){
 let results = [], steps, turns;
 for (let i = 0; i < select.length; i++){
     steps = 0;
     turns = 0;
     while(steps < 20){
     steps += select[i].move();
     turns++;
     }
     results.push(`${select[i].name} took ${turns} turns to take 20 steps.\n`);
 }
 return results;
}
console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!