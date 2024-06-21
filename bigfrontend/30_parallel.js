/*
You are asked to implement an async function helper, parallel() which works like Promise.all(). Different from sequence(), the async function doesn't wait for each other, rather they are all triggered together.

All async functions have following interface
*/

// type Callback = (error: Error, data: any) => void

// type AsyncFunc = (
//    callback: Callback,
//    data: any
// ) => void

// Your parallel() should accept AsyncFunc array, and return a new function which triggers its own callback when all async functions are done or an error occurs.

function parallel(funcs){
  return function(finalCb, data) {
   let result = [];
   let count = 0;
   let hasError = false;

   funcs.forEach((fn, i) => {
     fn((err, cbData) => {
       if(hasError) {
         return;
       }
       if (err) {
         hasError = true;
         finalCb(err, undefined);
         return;
       }

       result[i] = cbData;
       count++;

       if (count === funcs.length) {
         finalCb(undefined, result);
       }
     }, data);
   })
 }
}

const async1 = (callback) => {
  callback(undefined, 1)
}
const async2 = (callback) => {
  callback(undefined, 2)
}
const async3 = (callback) => {
  callback(undefined, 3)
}

const all = parallel(
  [
    async1,
    async2,
    async3
  ]
)

all((error, data) => {
  if (error) {
    console.log('error ', error);
    return;
  }
   console.log(data) // [1, 2, 3]
}, 1)

// When error occurs, only first error is passed down to the last. Later errors or data are ignored.