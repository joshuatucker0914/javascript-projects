let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require('readline-sync');

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinetArray = food.split(",");
foodCabinetArray = foodCabinetArray.sort();

let equipCabinetArray = equipment.split(",");
equipCabinetArray = equipCabinetArray.sort();

let petsCabinet = pets.split(',');
petsCabinet = petsCabinet.sort();

let sleepCabinet = sleepAids.split(",");
sleepCabinet = sleepCabinet.sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinetArray,equipCabinetArray,petsCabinet,sleepCabinet];


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userinput = input.question(`Select a cabinet from the cargo hold. `);
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

//Food
if (userinput === "1" || userinput === 1) {
    console.log(`The contents of the cargo: ${cargoHold[0]}`);
}
//Equipment
else if(userinput  === "2" || userinput === 2){ 
    console.log(`The contents of the cargo: ${cargoHold[1]}`);
}
//Pets
else if(userinput  === "3" || userinput === 3){
    console.log(`The contents of the cargo: ${cargoHold[2]}`);
}
//Sleep
else if(userinput  === "4" || userinput === 4){
    console.log(`The contents of the cargo: ${cargoHold[3]}`);
}

else{
    console.log("INVALID ENTRY! \nUse a number between 1 and 4");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
    let userinput2 = input.question("State the item you are looking for.");
    if (foodCabinetArray.includes(userinput2)){
        console.log(`Food Cabinet does contain ${foodCabinetArray[0]}`);
    }
    else{
        console.log(`INVAILD ENTRY! Cabinet does not contain ${userinput2}`);
    }