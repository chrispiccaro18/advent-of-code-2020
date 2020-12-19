const input = require('./input');

const inputArray = input.split('\n');

const binaryMap = {
  F: 0,
  B: 1,
  L: 0,
  R: 1,
};

const letterToBinary = (binaryString, letter) => {
  return binaryString + binaryMap[letter];
};

const decodeBoardingPass = boardingPass => {
  const rawRow = boardingPass.slice(0, 7);
  const rawColumn = boardingPass.slice(7);

  const binaryRow = rawRow.split('').reduce(letterToBinary, '');
  const binaryColumn = rawColumn.split('').reduce(letterToBinary, '');

  const row = parseInt(binaryRow, 2);
  const column = parseInt(binaryColumn, 2);
  return [row, column];
};

const calculateSeatId = (row, column) => row * 8 + column;

// const highestSeatId = inputArray.reduce((highestId, boardingPass) => {
//   const [row, column] = decodeBoardingPass(boardingPass);
//   const currentSeatId = calculateSeatId(row, column);
//   if(currentSeatId > highestId) return currentSeatId;
//   else return highestId;
// }, 0);

// console.log(highestSeatId);
// 806

// part 2
// find lowest and highest 
// then find missing in between
// creat seatId array
// loop from lowest to highest making sure each id is in the array
// seatId not in the array must be our seatId

const seatIdInfo = inputArray.reduce(({ lowest, highest, seatIds }, boardingPass) => {
  const [row, column] = decodeBoardingPass(boardingPass);
  const currentSeatId = calculateSeatId(row, column);

  seatIds.push(currentSeatId);
  if(currentSeatId > highest) highest = currentSeatId;
  if(currentSeatId < lowest) lowest = currentSeatId;
  
  return { lowest, highest, seatIds };
}, {
  lowest: 1032,
  highest: 0,
  seatIds: [],
});

const { lowest, highest, seatIds } = seatIdInfo;

for(let i = lowest; i < highest + 1; i++) {
  if(!seatIds.includes(i)) console.log(i);
}
