/* src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class */
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
// Expected output: 12
