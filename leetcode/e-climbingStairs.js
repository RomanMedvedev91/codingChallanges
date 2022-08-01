const climbStairs = (n) => {
  let prev = 0;
  let curr = 1;

  for (let i = 1; i <= n; i++) {
    curr += prev;
    prev = curr - prev;
  }
  return curr;
};

module.exports = climbStairs;
