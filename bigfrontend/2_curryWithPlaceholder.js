/* 
Problem description: 

This is a follow-up on 1. implement curry()
please implement curry() which also supports placeholder.

Here is an example

const  join = (a, b, c) => {
   return ${a}_${b}_${c}
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(_, 2)(1, 3) // '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
*/

function curry(fn) {
  function helper(...args) {
    const isPlaceholder = args.slice(0, fn.length).includes(curry.placeholder);

    if (args.length >= fn.length && !isPlaceholder) {
      return fn.apply(this, arguments);
    }

    return function (...args2) {
      for (let i = 0; i < args.length; i++) {
        args[i] = args[i] === curry.placeholder && args2.length ? args2.shift() : args[i];
      }

      return helper(...args, ...args2);
    }
  }

  return helper;
}
