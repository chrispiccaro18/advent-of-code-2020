const start = Date.now();
const input = require('./input');
const { isCompletePassport, checkPassportParts } = require('./passportChecks');

const inputArray = input.split(/\n\s*\n/);

// part 1
// const validPassportCount = inputArray.reduce((count, input) => {
//   const splitInput = input.split(/\s+/);
//   if(splitInput.length > 7) return count + 1;
//   else if(splitInput.length > 6) {
//     // is it only missing cid?
//     const hasCid = splitInput.reduce((hasCid, passportPart) => {
//       if(hasCid) return hasCid;
//       else return passportPart.includes('cid');
//     }, false);
//     if(!hasCid) return count + 1;
//     else return count;
//   }
//   else return count;
// }, 0);

// console.log(validPassportCount);
// 190

// part 2
// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

const countValidPassports = inputArray => inputArray.reduce((count, passportString) => {
  if(!isCompletePassport(passportString)) return count;

  const passportParts = passportString.split(/\s+/);
  const passportPartKeys = passportParts.map(passportPart => passportPart.split(':')[0]);
  const passportPartValues = passportParts.map(passportPart => passportPart.split(':')[1]);
  
  if(checkPassportParts(passportPartKeys, passportPartValues)) return count + 1;
  else return count;
}, 0);

const validPassportCount = countValidPassports(inputArray);

console.log(validPassportCount, Date.now() - start);
// 121

module.exports = countValidPassports;
