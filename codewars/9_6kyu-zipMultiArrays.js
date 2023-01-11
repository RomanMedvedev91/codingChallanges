/*
Create function that accept multi arrays as arguments and return zipped array
zipNth([1, 2, 3, 4], ['a', 'b', 'c', 'd'], [10, 20, 30]) => 
[
  [ 1, 'a', 10 ],
  [ 2, 'b', 20 ],
  [ 3, 'c', 30 ],
  [ 4, 'd', undefined ]
];
*/
function zipNth(...arr) {
  const length = Math.max(...arr.map(a => a.length));
  const resultArray = Array.from({ length }, (el, i) => {
    return arr.map(a => a[i]);
  });
  return resultArray;
}

// console.log(zip([1, 2, 3], ['a', 'b', 'c', 'd']))
console.log(zipNth([1, 2, 3, 4], ['a', 'b', 'c', 'd'], [10, 20, 30]))
module.exports = zipNth;