/*
32. implement `Promise.all()`
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises

source - MDN

Could you write your own all() ? which should works the same as Promise.all()

note

Do not use Promise.all() directly, it is not helping

*/

function all(promises) {
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      return res([]);
    }
    let result = [];
    let completed = 0;
    let hasError = false;

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
      .then((val) => {
        result[i] = val;
        completed += 1;
        if (completed === promises.length && !hasError) {
          res(result);
        }
      })
      .catch((err) => {
        if (!hasError) {
          hasError = true;
          rej(err);
        }
      })
    });
  });
}

const async1 = (callback) => {
  setTimeout(() => callback(undefined, 1), 300)
}

const async2 = (callback) => {
   setTimeout(() => callback(undefined, 2), 100)
}

const async3 = (callback) => {
  setTimeout(() => callback(undefined, 3), 200)
}

const settledAll = all(
 [
   async1,
   async2,
   async3
 ]
);