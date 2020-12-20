const input = require('./input');

const inputArray = input.split(/\n\s*\n/);

const totalYesCount = inputArray.reduce((yesCount, group) => {
  const groupsAnswers = [];
  const groupAnswerArray = group.split('\n');

  
  for(let i = 0; i < groupAnswerArray.length; i++) {
    const individualsAnswers = groupAnswerArray[i].split('');
    
    for(let j = 0; j < individualsAnswers.length; j++) {
      const answer = individualsAnswers[j];
      if(!groupsAnswers.includes(answer)) groupsAnswers.push(answer);
    }
  }
  return yesCount + groupsAnswers.length;
}, 0);

console.log(totalYesCount);
