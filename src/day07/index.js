// const input = require('./input');

const myBag = 'shiny gold';

const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;
const inputArray = input.split('\n');

const rules = inputArray.reduce((rules, ruleString) => {
  const [bagKey, fullRule] = ruleString
    .replace(/bags*/g, '')
    .split('contain');

  let ruleObject = null;
  if(!fullRule.includes('no other')) {
    ruleObject = fullRule
      .split(',')
      .reduce((ruleObject, individualRule) => {
        const [, bagName] = individualRule
          .replace('.', '')
          .trim()
          .split(/\d/);
    
        const bagNumber = parseInt(individualRule);
        return { ...ruleObject, [bagName.trim()]: bagNumber };
      }, {});
  }

  return { ...rules, [bagKey.trim()]: ruleObject };
}, {});

console.log(rules);

const findBags = (rules, bagKey) => {
  // console.log(rules[bagKey]);
  if(!rules[bagKey]) return false;

  const containedBags = rules[bagKey];
  if(containedBags[myBag]) return true;

  else {
    console.log(containedBags, Object.keys(containedBags).map(containedBagKey => {
      console.log(rules[containedBagKey]);
      if(!rules[containedBagKey]) return false;

      const containedBags = rules[containedBagKey];
      if(containedBags[myBag]) return true;
  
      return findBags(rules, containedBagKey);
    }));

  }
};

const baseBags = Object.keys(rules);

// for each bag key can it hold my bag?
const count = baseBags.reduce((count, bagKey) => {
  // console.log(rules[bagKey])
  if(findBags(rules, bagKey)) return count + 1;
  else return count;
}, 0);

console.log(count);

// which bags have my bag in it? which bags have that bag in it and repeat 
