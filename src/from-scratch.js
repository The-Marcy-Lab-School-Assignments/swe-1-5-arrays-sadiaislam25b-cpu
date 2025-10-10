const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) arr.unshift(value);
  else arr.push(value);
};

const reverseString = (str) => str.split('').reverse().join('');

const newArrayFullOf = (value, numOfValue) => new Array(numOfValue).fill(value);

const insertIntoMiddle = (arr, value) => {
  const middle = Math.floor(arr.length / 2);
  arr.splice(middle, 0, value);
};

const deleteFromMiddle = (arr) => {
  const middle = Math.floor(arr.length / 2);
  arr.splice(middle, 1);
};

const isRightIndex = (arr, value, index) => arr[index] === value;

const roundAllNumsDown = (arr) => arr.map(num => Math.floor(num));

const getAllYCoordinates = (arrOfCoords) => arrOfCoords.map(coord => coord[1]);

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
