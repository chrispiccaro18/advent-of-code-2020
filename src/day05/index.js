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

const highestSeatId = inputArray.reduce((highestId, boardingPass) => {
  const [row, column] = decodeBoardingPass(boardingPass);
  const currentSeatId = calculateSeatId(row, column);
  if(currentSeatId > highestId) return currentSeatId;
  else return highestId;
}, 0);

console.log(highestSeatId);
