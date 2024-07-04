// Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfils, returns a single promise that resolves with the value from that promise

// Can you implement a any() to work the same as Promise.any()?

// note

// AggregateError is not supported in Chrome yet, but you can still use it in your code since we will add the Class into your code. Do something like following:

// new AggregateError(
//   'No Promise in Promise.any was resolved', 
//   errors
// )
function any(promises) {
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      return res([]);
    }
    let errors = [];
    let errorsCount = 0;
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
      .then((val) => {
        res(val);
      })
      .catch((err) => {
        errors[i] = err;
        errorsCount += 1;
        if (errors.length === promises.length) {
          rej(new AggregateError('not resolved', errors));
        }
      })
    });
  })
}