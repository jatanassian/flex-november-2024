# Functions

## Definition

A reusable code, a block of code that performs an action.
A container for code.

## Related terms

- Function **declaration**
- **Arrow** function
- Function **expression**
- **arguments**: the value we pass into a function during its execution, can be [[variables]]
- **parameters**: inputs for our function, placeholders for the arguments
- **callback**: a function passed to another as an argument/parameter
- **return**: output from our function (when we run our function, this value is given back), defaults to `undefined`
- **hoisting**: pushes certain code to the top, scans for functions DECLARATIONS before running our code

## Example

```js
/*
 * Writing functions
 */

// Declaration-based functions are hoisted, we can call them before they are defined in our code
myFunction(3, 'hello'); // Values passed in are arguments

// Declaration
function myFunction(param1, param2) {
  // Placeholder names are parameters
  // Logic goes here
}

// Expression
const myOtherFunction = function () {
  // Logic goes here
};

// Arrow function
const myArrowFunction = () => {
  // Logic goes here
};

// Callback
const myHigherOrderFunction = function (otherFunction) {
  otherFunction();
};
```
