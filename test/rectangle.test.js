const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {

  it('is a square', () => {
    const rectangle1 = new Rectangle(2,2);
    assert.strictEqual(rectangle1.isSquare(), true);
  });
  
  it('is not a square', () => {
    const rectangle2 = new Rectangle(3,4);
    assert.strictEqual(rectangle2.isSquare(), false);
  });

  it('returns the right area', () => {
    const rectangle3 = new Rectangle(5, 2);
    assert.strictEqual(rectangle3.getArea(), 10);
  });

  it('returns the right perimeter', () => {
    const rectangle4 = new Rectangle(6, 7);
    assert.strictEqual(rectangle4.getPerimeter(), 26);
  });
});