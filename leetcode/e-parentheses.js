// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (string) => {
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      stack.push(string[i]);
    }
    if (string[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    }

    if (string[i] === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      } else {
        return false;
      }
    }

    if (string[i] === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
