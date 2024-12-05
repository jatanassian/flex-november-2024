# Variables

## Definition
- A storage, a container for data, for a value
- A way to assign data, assign a value

## Related terms
- `var`: can be re-assigned (like `let`), function-scoped
- `let`:  a variable that can be re-assigned, block-scoped
- `const`: a variable that doesn't change, block-scoped
- **block-scoped** : within a set of curly braces `{ }`
- **function-scoped**: only accessible in the function it is defined in

## Examples
```js
/*
* Writing variables
*/

// Can be re-assigned, function-scoped
var myBool = true;

// Can be re-assigned, block-scoped
let myNum = 3;

// Can't be re-assigned, block-scoped
const name = 'julien';
```