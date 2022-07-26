class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
}

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }
  let res = this.stack2.pop();
  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }
  return res;
};

MyQueue.prototype.peek = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }
  let res = this.stack2.pop();
  this.stack1.push(res);
  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }
  return res;
};
MyQueue.prototype.empty = function () {
  return !this.stack1.length;
};
