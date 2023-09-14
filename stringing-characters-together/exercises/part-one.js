let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = num.toString();
console.log(num.length)
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45;
num = num.toString();
console.log(num.length);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 123.45;
num = num.toString();
if(num === 123.45 || num === "123.45"){
    console.log("Test 1 done")
}