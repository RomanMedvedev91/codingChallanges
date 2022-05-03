function calcMinutes(timeStr) {
  return timeStr.split("-").map((time) => {
    //10:15PM   12:15AM
    const [hour, minutes] = time
      .slice(0, 5)
      .split(":")
      .map((string) => parseInt(string));
    return time.includes("PM") && hour !== 12
      ? (12 + hour) * 60 + minutes
      : hour * 60 + minutes;
  });
}

function sortArr(input) {
  return input.sort((a, b) => {
    const [start1] = calcMinutes(a);
    const [start2] = calcMinutes(b);
    return start1 - start2;
  });
}

function calcSum(input) {
  let sum = [];
  for (let i = 1; i < input.length; i++) {
    const [, end] = calcMinutes(input[i - 1]);
    const [start] = calcMinutes(input[i]);
    if (start < end) {
      throw new Error(`invalid input range: ${input[i - 1]}, ${input[i]}`);
    }
    sum.push(start - end);
  }
  const maxSum = sum.reduce((acc, curr) => (acc > curr ? acc : curr), "");

  let h = Math.floor(maxSum / 60);
  let m = maxSum % 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  return `${h}:${m}`;
}

const input5 = ["12:15PM-02:00PM", "09:00AM-10:00AM", "11:30AM-12:00PM"];
console.log("=>>>", calcSum(sortArr(input5))); //  01:30

const input4 = ["12:15-02:00", "09:00-10:00", "10:30-12:00"];
const input1 = ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"];

console.log("calcMinutes", calcMinutes("12:10PM-00:10AM")); // [720, 10]
console.log("sortARR", sortArr(input1)); //  [ '09:00AM-10:00AM', '10:30AM-12:00PM', '12:15PM-02:00PM' ]
console.log("=>>>", calcSum(sortArr(input1))); // 30

const input2 = [
  {
    start: "9:10",
    end: "10:40",
  },
  {
    start: "12:35",
    end: "15:20",
  },
  {
    start: "15:35",
    end: "16:20",
  },
];

const input3 = [
  {
    start: "12:35",
    end: "15:20",
  },
  {
    start: "10:50",
    end: "11:45",
  },
  {
    start: "15:35",
    end: "16:20",
  },
  {
    start: "9:10",
    end: "10:40",
  },
];

// console.log(ArrayChallenge(input2));
