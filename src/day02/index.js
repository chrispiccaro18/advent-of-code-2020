const input = require('./input');

const inputArray = input.split('\n');

// part 1
// const validPasswords = inputArray.reduce((validCount, input) => {
//   const [min, rest] = input.split('-');
//   const [max, givenLetterWithColon, password] = rest.split(' ');
//   const givenLetter = givenLetterWithColon[0];

//   const letterRegex = new RegExp(givenLetter, 'g');
//   const countLetterAppearsInPassword = [...password.matchAll(letterRegex)].length;

//   if(countLetterAppearsInPassword >= min && countLetterAppearsInPassword <= max)
//     validCount++;

//   return validCount;
// }, 0);

// console.log(validPasswords);
// 383

// part 2
// numbers refer to non-zero index
const validPasswords = inputArray.reduce((validCount, input) => {
  const [firstIndex, rest] = input.split('-');
  const [secondIndex, givenLetterWithColon, password] = rest.split(' ');
  const givenLetter = givenLetterWithColon[0];

  const isFirstIndex = password[firstIndex - 1] === givenLetter;
  const isSecondIndex = password[secondIndex - 1] === givenLetter;

  // logical XOR
  if(isFirstIndex || isSecondIndex) {
    if(isFirstIndex !== isSecondIndex) validCount++;
  }

  return validCount;
}, 0);

console.log(validPasswords);
// 272
