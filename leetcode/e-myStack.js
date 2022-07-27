class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
}

MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  const res = this.queue1.shift();
  [this.queue1, this.queue2] = [this.queue2, this.queue1];
  return res;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  let res = this.queue1[0];
  this.queue2.push(this.queue1.shift());
  [this.queue1, this.queue2] = [this.queue2, this.queue1];

  return res;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};
