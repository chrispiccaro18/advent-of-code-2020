const input = require('./input');

const TREE = '#';

const inputArray = input.split('\n');
const patchWidth = inputArray[0].length;

let treesHit = 0;

for(let i = 1, j = 3; i < inputArray.length; i++, j = j + 3) {
  const verticalTreeLine = inputArray[i];
  if(verticalTreeLine[j % patchWidth] === TREE) treesHit++;
}

console.log(treesHit);
// 145
