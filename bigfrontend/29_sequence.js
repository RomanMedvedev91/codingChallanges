/*
 implement async helper - `sequence()`
 This problem is similar to 11. what is Composition? create a pipe().

You are asked to implement an async function helper, sequence() which chains up async functions, like what pipe() does.
All async functions have following interface

type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void
Your sequence() should accept AsyncFunc array, and chain them up by passing new data to the next AsyncFunc through data in Callback.

Suppose we have an async func which just multiple a number by 2

const asyncTimes2 = (callback, num) => {
   setTimeout(() => callback(null, num * 2), 100)
}
Your sequence() should be able to accomplish this

const asyncTimes4 = sequence(
  [
    asyncTimes2,
    asyncTimes2
  ]
)

asyncTimes4((error, data) => {
   console.log(data) // 4
}, 1)
Once an error occurs, it should trigger the last callback without triggering the uncalled functions.

Follow up

Can you solve it with and without Promise?
 */

const sequence = (asyncFuncs) => {
   return (callback, initialData) => {
     const execute = async (data) => {
       try {
         for (let i = 0; i < asyncFuncs.length; i++) {
           data = await new Promise((resolve, reject) => {
             asyncFuncs[i]((error, result) => {
               if (error) {
                 reject(error);
               } else {
                 resolve(result);
               }
             }, data);
           });
         }
         callback(null, data);
       } catch (error) {
         callback(error, null);
       }
     };
 
     execute(initialData);
   };
 };

 const sequence2 = (asyncFuncs) => {
  return function (finalCallback, data) {
    const nextFuncCall = (data) => {
      if (!asyncFuncs.length) {
        finalCallback(undefined, data);
        return;
      }

      const nextFunc = asyncFuncs.shift();
      const cb = (error, newdata) => {
        error ? finalCallback(error) : nextFuncCall(newdata);
      };
      nextFunc(cb, data);
    }
    nextFuncCall(data);
  }
 }

//  * Approach 1c
// * Same as first just using queue/array to pop func

function sequence_withoutPromise(funcs){
    
    const next = (callback, data) => {
        // if there're no more functions to call, call the final function in the queue.
        if(!funcs.length) return callback(undefined, data);
        
        // take out (dequeue) the function entered in the functions queue
        // call it with data and a callback for result
        funcs.shift()((err, newData)=>{
            // If undefined/Error, we don't need to recurse anymore and immediately call the callback
            // Recursively call the the next
            err ? callback(err, undefined) : next(callback, newData);
        }, data);
    }
    return next;
}

console.log('ada'); // 30