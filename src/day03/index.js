const input = require('./input');

const TREE = '#';

const inputArray = input.split('\n');
const patchWidth = inputArray[0].length;

// let treesHit = 0;

// part 1
// for(let i = 1, j = 3; i < inputArray.length; i++, j = j + 3) {
//   const verticalTreeLine = inputArray[i];
//   if(verticalTreeLine[j % patchWidth] === TREE) treesHit++;
// }

// console.log(treesHit);
// 145

// part 2
const multiplyArray = arrayOfNumbers => {
  return arrayOfNumbers.reduce((product, number) => {
    if(!product) return number;
    else return product * number;
  }, null);
};

const slopes = [
  // right, down
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const totalTreesHit = [];

for(let i = 0; i < slopes.length; i++) {
  const [rightSlope, downSlope] = slopes[i];
  let treesHit = 0;
  
  for(let j = downSlope, k = rightSlope;
    j < inputArray.length;
    j = j + downSlope, k = k + rightSlope)
  {
    const verticalTreeLine = inputArray[j];
    if(verticalTreeLine[k % patchWidth] === TREE) treesHit++;
  }

  totalTreesHit.push(treesHit);
}

console.log(multiplyArray(totalTreesHit));
// 3424528800
