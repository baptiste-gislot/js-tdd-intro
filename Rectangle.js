// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    return this.b === this.a ? true : false;
  }

  getArea() {
    return this.b * this.a;
  }

  getPerimeter() {
    return ((this.b * 2) + (this.a * 2));
  }
}

module.exports = Rectangle;
