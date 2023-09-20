const input = require('readline-sync');
let str = "LaunchCode";
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//Use a template literal to print the original and modified string in a descriptive phrase.
let firstHalf = str.slice(0,3);
let secondHalf = str.slice(3,10);
let newString = secondHalf.concat(firstHalf);
console.log(`${newString} is ${str} with the first 3 letters moved to the end.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("How many letters are moved?")
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput === 3 || userInput === "3"){
    let firstHalf = str.slice(0,3);
    let secondHalf = str.slice(3,10);
    let newString = secondHalf.concat(firstHalf);
    console.log(`Correct! the result would be ${newString}`);  
}
else{
    console.log(`Sorry, but the answer we were looking for is 3 which results in ${newString}`);
}