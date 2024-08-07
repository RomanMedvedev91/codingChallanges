// Say you need to fetch some data through 100 APIs, and as soon as possible.

// If you use Promise.all(), 100 requests go to your server at the same time, which is a burden to low spec servers.

// Can you throttle your API calls so that always maximum 5 API calls at the same time?

// You are asked to create a general throttlePromises() which takes an array of functions returning promises, and a number indicating the maximum concurrent pending promises.


// throttleAsync(callApis, 5).then((data) => {
   // the data is the same as `Promise.all` 
// }).catch((err) => {
   // any error occurs in the callApis would be relayed here
// })
// By running above code, at any time, no more than 5 APIs are requested, so low spec servers are saved.

function throttlePromises(funcs, max){
  // your code here
  let results = [];

  return new Promise((resolve, reject) => {
    let count = 0;
    let queue = [...funcs];
    function runCb() {
      while(count < max && queue.length > 0) {
        const fn = queue.shift();
        count ++;
        fn().then(v => {
          count--;
          results.push(v);
          runCb();
        }).catch(err => reject(err))
      }
      if (results.length === funcs.length) {
        resolve(results);
      }
    }
    runCb();
  })
}

// second option

function throttlePromise(fn, delay) {
  let lastCall = 0;
  let pendingPromise = null;

  return function(...args) {
    const now = Date.now();

    if(now - lastCall < delay) {
      if (!pendingPromise) {
        pendingPromise = new Promise((resolve) => {
          setTimeout(() => {
            pendingPromise = null;
            lastCall = Date.now();
            resolve(fn(...args));
          }, delay - (now - lastCall));
        });
      }
      return pendingPromise;
    } else {
      lastCall = now;
      return Promise.resolve(fn(...args));
    }
  }
}
