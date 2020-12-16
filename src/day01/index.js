const input = require('./input');
const SUM = 2020;

const inputArray = input.split('\n').map(int => parseInt(int));

let answers = null;
const shrinkingArray = inputArray;

for(let i = 0; i < inputArray.length; i++) {
  const input = inputArray[i];
  const possibleTwin = SUM - input;
  if(shrinkingArray.includes(possibleTwin)) {
    answers = [input, possibleTwin];
    break;
  } else {
    shrinkingArray.shift();
  }
}

console.log(answers[0] * answers[1]);
