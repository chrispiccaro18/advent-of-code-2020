const completePassportParts = ['pid', 'hgt', 'ecl', 'iyr', 'eyr', 'byr', 'hcl'];
const isCompletePassport = passportString => 
  completePassportParts.reduce((isComplete, passportPart) => {
    if(!isComplete) return isComplete;
    else return passportString.includes(passportPart);
  }, true);

const isValidBirthYear = birthYear => birthYear > 1919 && birthYear < 2003;

const isValidIssueYear = issueYear => issueYear > 2009 && issueYear < 2021;

const isValidExYear = exYear => exYear > 2019 && exYear < 2031;

const isValidHeight = height => {
  if(height.includes('cm')) {
    const heightInt = parseInt(height);
    return (heightInt > 149 && heightInt < 194);
  } else if(height.includes('in')) {
    const heightInt = parseInt(height);
    return (heightInt > 58 && heightInt < 77);
  } else return false;
};

const validHairClRegex = /#[a-f0-9]{6}/;
const isValidHairCl = hairCl => validHairClRegex.test(hairCl);

const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
const isValidEyeCl = eyeCl => validEyeColors.includes(eyeCl);

const isValidPid = pid => pid.length === 9;

const passportChecks = {
  byr: isValidBirthYear,
  iyr: isValidIssueYear,
  eyr: isValidExYear,
  hgt: isValidHeight,
  hcl: isValidHairCl,
  ecl: isValidEyeCl,
  pid: isValidPid,
  cid: () => true,
};

const checkPassportParts = (passportPartKeys, passportPartValues) => {
  return passportPartKeys.reduce((isValid, passportKey, i) => {
    if(!isValid) return isValid;
    else return passportChecks[passportKey](passportPartValues[i]);
  }, true);
};

module.exports = {
  isCompletePassport,
  checkPassportParts,
};
