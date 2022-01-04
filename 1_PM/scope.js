/**
 * Part 1:
 *    What will print and why?
 *      1 because 1 is declared right above the print statement and the "var a" is only in the scope of x().
 *      After that, 2 will print because 2 is the value of the function variable "a", which takes precedent over global a. 
 *      Finally, when x() is called, nothing/undefined will print since local a takes precedent, and local a has not been assigned a value
 *    What will change if we delete line 15? Why?
 *      You will get an error because a has not been declared yet
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 *      ok.
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  let a = 2;
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
