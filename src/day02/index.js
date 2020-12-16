const input = require('./input');

const inputArray = input.split('\n');

const validPasswords = inputArray.reduce((validCount, input) => {
  const [min, rest] = input.split('-');
  const [max, givenLetterWithColon, password] = rest.split(' ');
  const givenLetter = givenLetterWithColon[0];

  const letterRegex = new RegExp(givenLetter, 'g');
  const countLetterAppearsInPassword = [...password.matchAll(letterRegex)].length;

  if(countLetterAppearsInPassword >= min && countLetterAppearsInPassword <= max)
    validCount++;

  return validCount;
}, 0);

console.log(validPasswords);
// 383
