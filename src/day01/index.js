const input = require('./input');
const SUM = 2020;

const inputArray = input.split('\n').map(int => parseInt(int));

let answers = null;

// part 1
// const shrinkingArray = inputArray;

// for(let i = 0; i < inputArray.length; i++) {
//   const input = inputArray[i];
//   const possibleTwin = SUM - input;
//   if(shrinkingArray.includes(possibleTwin)) {
//     answers = [input, possibleTwin];
//     break;
//   } else {
//     shrinkingArray.shift();
//   }
// }

// console.log(answers[0] * answers[1]);
// 996996

// part 2
answers = {
  firstNumber: null,
  secondNumber: null,
  thirdNumber: null,
};

const shrinkingArray = inputArray;

const start = Date.now();

for(let i = 0; i < shrinkingArray.length; i++) {
  if(answers.thirdNumber) break;
  const firstNumber = shrinkingArray[i];
  const firstSubtraction = SUM - firstNumber;
  
  for(let j = i + 1; j < shrinkingArray.length; j++) {
    const secondNumber = shrinkingArray[j];
    const thirdNumber = firstSubtraction - secondNumber;

    for(let k = 0; k < shrinkingArray.length; k++) {
      const possibleThirdNumber = shrinkingArray[k];
      
      if(possibleThirdNumber === thirdNumber) {
        answers = {
          firstNumber,
          secondNumber,
          thirdNumber,
        };
      }
    }
  }
  shrinkingArray.shift();
}

console.log(answers.firstNumber * answers.secondNumber * answers.thirdNumber, Date.now() - start);
// 9210402
