/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    //[21, "aefs"]
    if (!obj[arr1[i][1]]) {
      obj[arr1[i][1]] = arr1[i][0];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i][1])
    if (obj[arr2[i][1]]) {
      obj[arr2[i][1]] += arr2[i][0];
    } else {
      obj[arr2[i][1]] = arr2[i][0];
    }
  }

  let result = [];

  for (let el in obj) {
    result.push([obj[el], el]);
  }

  result.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
  });
  console.log(result);
  return result;
}

//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
