//Create an anonymous function and set it equal to a variable.
let myVariable = function(argument1) {
    if (typeof argument1 === "number") {
       return argument1 * 3;
    }
    else if (typeof argument1 === "string"){
        return argument1 = "ARRR!";
    }
 }
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let arrayed = arr.map(myVariable);

console.log(arr.map(myVariable));