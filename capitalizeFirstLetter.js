// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
const capitalizeFirstLetters = (input) => {
  let output = '';
  if (input.length > 0) {
    let splitted = input.split(' ');
    for (let i = 0; i < splitted.length; i++) {
      let capitalized = '';
      for (let j = 0; j < splitted[i].length; j++) {
        capitalized = splitted[i][0].toUpperCase() + splitted[i].slice(1);
      }
      if (i === splitted.length - 1) {
        output += capitalized;
      } else {
        output += capitalized + ' ';
      }
    }
    return output;
  } else {
    return '';
  }
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check with several words
assert.strictEqual(capitalizeFirstLetters('I am a pro dev !'), 'I Am A Pro Dev !');
// Check with only one word
assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
// Check with an empty input
assert.strictEqual(capitalizeFirstLetters(''), '');
