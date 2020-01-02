// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE


// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check with several words
assert.strictEqual(capitalizeFirstLetters('I am a pro dev !'), 'I Am A Pro Dev !');
// Check with only one word
assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
// Check with an empty input
assert.strictEqual(capitalizeFirstLetters(''), '');
