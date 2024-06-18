/*
what is Composition? It is actually not that difficult to understand, see @dan_abramov 's explanation.

Here you are asked to create a pipe() function, which chains multiple functions together to create a new function.

Suppose we have some simple functions like this

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y
Your pipe() would be used to generate new functions

pipe([
  times(2),
  times(3)
])  
// x * 2 * 3

pipe([
  times(2),
  plus(3),
  times(4)
]) 
// (x * 2 + 3) * 4

pipe([
  times(2),
  subtract(3),
  divide(4)
]) 
// (x * 2 - 3) / 4
notes

to make things simple, functions passed to pipe() will all accept 1 argument
*/
const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

// option 1
// function pipe(funcs) {
// 	return function runFuncs(init) {
// 		let result = init;
// 		for (let i = 0; i < funcs.length; i++) {
// 			let step = funcs[i];
// 			result = step(result);
// 		}
// 		return result;
// 	}
// }
// Options 2 - refactoring
function pipe(funcs) {
	// your code here
	return (init) => {
		return funcs.reduce((acc, val) => {
			return val(acc);
		}, init);
	}
}

const pipedFunction1 = pipe([
  times(2),
  times(3)
]);
// Equivalent to x * 2 * 3
console.log(pipedFunction1(5)); // 30