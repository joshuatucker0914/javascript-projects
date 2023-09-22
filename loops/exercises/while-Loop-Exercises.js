//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let input = require("readline-sync");
let fuel = 0;
let astronautsAboard = 0;
let shipAltitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  while(fuel < 5000){
    userInput = input.question("Input a value equal to or greather than 5000 & Less than or equal to 30000: ");
    fuel = userInput;
    if (fuel >= 5000 && fuel <= 30000){
      console.log("Suffecient fuel.");
      break;
    }
    else{
      console.log("Invaild Entry!")
    }
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while(astronautsAboard <7){
  userInput = input.question("Input a value less than or equal to 7: ");
  astronautsAboard = userInput;
  if (astronautsAboard <=7){
    console.log("Suffecient number of astronauts");
    break;
  }
  else if (astronautsAboard === 0) {
    console.log("Not enough astronauts to start mission.")
  }
  else {
    console.log("Invaild Entry!");
  }
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while(fuel > 0){
  shipAltitude = shipAltitude + 50;
  fuel = fuel - (astronautsAboard * 100);
  console.log(`${fuel} Gallons of fuel left`);
  console.log(`Shuttle altitude has reached ${shipAltitude}`);
  if (shipAltitude >= 2000){
    break;
  }
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (shipAltitude >= 2000){
  console.log("Orbit achieved!");
}
else{
  console.log("Failed to reach orbit.");
}
