/*
The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

from MDN
Different from Promise.all() which rejects right away once an error occurs, Promise.allSettled() waits for all promises to settle.

Now can you implement your own allSettled() ?

note

Do not use Promise.allSettled() directly, it helps nothing.
*/
function allSettled(funcs) {
  return new Promise((res, rej) => {
    if (funcs.length === 0) { return res([]) };

    let results = [];
    let completed = 0;

    funcs.forEach((promise, i) => {
      Promise.resolve(promise)
      .then((value) => {
        results[i] = { status: 'fulfilled', value };
      })
      .catch((reason) => {
        results[i] = { status: 'rejected', reason }
      })
      .finally(() => {
        completed++;
        if (completed === funcs.length) {
          res(results);
        }
      })
    });
  });
}