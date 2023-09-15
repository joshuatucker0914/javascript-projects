// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7){
    console.log("Seating overcapcity!")
}
else{
    console.log("We're at capacity!")
}
// add logic below to verify all astronauts are ready
if(astronautStatus){
    console.log("Crew Ready!")
}
else{
    console.log("Crew not ready!")
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg >= maximumMassLimit){
    console.log("Maxium mass limit exceeded!")
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius < minimumFuelTemp){
    console.log("Temperature falling below baseline!")
}
else if(fuelTempCelsius >maximumFuelTemp){
    console.log("Fuel temperature is overheating!")
}
else{
    console.log("Fuel Temperature Stable.")
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel === "100%"){
    console.log("Fuel is full. Ready your engines!")
}
else{
    console.log("Fill fuel tanks to max before starting engine.")
}
// add logic below to verify the weather status is clear
if(weatherStatus === "clear"){
    console.log("We are clear for takeoff!")
}
// Verify shuttle launch can proceed based on above conditions
console.log(date);
console.log(time);
console.log("Astronaut Count: " + astronautCount);
console.log("Crew Mass:" + crewMassKg + "Kg");
console.log("Fuel Mass:" + fuelMassKg + "Kg");
console.log("Shuttle Mass:" + shuttleMassKg + "Kg");
console.log("Total Mass:" + totalMassKg + "Kg");
console.log("Fuel Temp:" + fuelTempCelsius + "°C");
console.log("Weather:" + weatherStatus);
console.log("All systems are a go! We are ready for take off!");