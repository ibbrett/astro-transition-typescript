"use strict";
/* src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class */
var Polygon = /** @class */ (function () {
    function Polygon(height, width) {
        this.area = height * width;
    }
    return Polygon;
}());
console.log(new Polygon(4, 3).area);
// Expected output: 12
