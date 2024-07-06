/*
Suppose we have a Callback type

type Callback = 
  (error: Error, result: any | Thunk) => void
A Thunk is a function that take a Callback as parameter

type Thunk = (callback: Callback) => void
Like following three thunks

in above example, three functions are kind of chained up, func3 → func2 → func1, but it don't work without some glue.

OK, now you are asked to implement a flattenThunk() which glue them up and returns a new thunk.


note

Once error occurs, the rest uncalled functions should be skipped
*/

function flattenThunk(thunk) {
  // we need to open each thunk until we get the value
  // it should return last thunk
  return (cb) => {
    const wrap = ((err, data) => {
      if (err) {
        cb(err);
      } else if (typeof data === 'function') {
        data(wrap);
      } else {
        cb(err, data);
      }
    })
    thunk(wrap);
  }
}

// 2nd solution

function flattenThunk2(thunk) {
  return (cb) => {
    thunk((err, data) => {
      if (err) {
        cb(err);
      }
      typeof data === 'function' ? flattenThunk2(data)(cb) : cb(err, data);
    })
  }
}

const func1 = (cb) => {
  setTimeout(() => cb(null, 'ok'), 10)
}

const func2 = (cb) => {
  setTimeout(() => cb(null, func1), 10)
}

const func3 = (cb) => {
  setTimeout(() => cb(null, func2), 10)
}

flattenThunk(func3)((error, data) => {
  console.log(data) // 'ok'
});