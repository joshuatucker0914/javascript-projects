function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

// Steal some fuel from the shuttle:
 let nonSuspiciousFunction = function(x){
  if (checkFuel(x) === 'green'){
    x - 1000001;
  }
  else if(checkFuel(x) === 'yellow'){
    x - 50001;
  }
  else {
    return x;
  }
 }

 console.log("Collected fuel " + nonSuspiciousFunction());


//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.

// Next, liberate some of that glorious cargo.
let innocentSearch = function(arr) {
  // Check if there are at least two items in the cargo hold
  if (arr.length < 2) {
      console.log("Not enough items in the cargo hold.");
      return
  }

  // Array to store the taken items
  let takenItems = [];

  // Tracker for 'gold' and 'AE-35 Unit' being found
  let foundGold = false;
  let foundAE35Unit = false;

  // Look through the cargo hold
  for (let i = 0; i < arr.length; i++) {
      if (!foundGold && arr[i] === 'gold') {
          takenItems.push(arr[i]);
          foundGold = true;
      } else if (!foundAE35Unit && arr[i] === 'AE-35 unit') {
          takenItems.push(arr[i]);
          foundAE35Unit = true;
      }
  }

  // Replace the taken items with 'clothing' and 'tools'
  if (foundGold) {
      arr[arr.indexOf('gold')] = 'clothing';
  }
  if (foundAE35Unit) {
      arr[arr.indexOf('AE-35 unit')] = 'tools';
  }

  return takenItems;
};

// The call for the "innocentSearch" function to take 'gold' and 'AE-35 unit'  from the cargo hold
let takenItems = innocentSearch(cargoHold);

console.log("Taken items:", takenItems);
console.log("Updated cargo hold:", cargoHold);
console.log("Collected fuel " + nonSuspiciousFunction(20000));


//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

// Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
 function irs(fuelLevel,cargoHold){
console.log(`Raided ${nonSuspiciousFunction(20000)} kg of fuel from the tanks, and stole ${takenItems[0]} and ${takenItems[1]} from the cargo hold.`)
 }
irs(fuelLevel,cargoHold);

//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."
