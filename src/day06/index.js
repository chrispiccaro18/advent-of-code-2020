const input = require('./input');

// const input = `abc

// a
// b
// c

// ab
// ac

// a
// a
// a
// a

// b`;

const inputArray = input.split(/\n\s*\n/);

// part 1
// const totalYesCount = inputArray.reduce((yesCount, group) => {
//   const groupsAnswers = [];
//   const groupAnswerArray = group.split('\n');

  
//   for(let i = 0; i < groupAnswerArray.length; i++) {
//     const individualsAnswers = groupAnswerArray[i].split('');
    
//     for(let j = 0; j < individualsAnswers.length; j++) {
//       const answer = individualsAnswers[j];
//       if(!groupsAnswers.includes(answer)) groupsAnswers.push(answer);
//     }
//   }
//   return yesCount + groupsAnswers.length;
// }, 0);

// console.log(totalYesCount);

// part 2
const totalYesCount = inputArray.reduce((yesCount, group) => {
  const groupsAnswers = new Map;
  const groupAnswerArray = group.split('\n');
  const lengthOfGroup = groupAnswerArray.length;
  
  for(let i = 0; i < lengthOfGroup; i++) {
    const individualsAnswers = groupAnswerArray[i].split('');
    
    for(let j = 0; j < individualsAnswers.length; j++) {
      const answer = individualsAnswers[j];
      if(!groupsAnswers.has(answer)) groupsAnswers.set(answer, 1);
      else groupsAnswers.set(answer, groupsAnswers.get(answer) + 1);
    }
  }

  let groupYesCount = 0;
  groupsAnswers.forEach(numberOfYess => {
    if(numberOfYess === lengthOfGroup) groupYesCount++;
  });

  return yesCount + groupYesCount;
}, 0);

console.log(totalYesCount);
