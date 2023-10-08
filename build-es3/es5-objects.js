"use strict";
/**
Object.defineProperty()
Object.defineProperty() is a new Object method in ES5.

It lets you define an object property and/or change a property's value and/or metadata.
**/
// Create an Object:
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO"
};
// Change a Property:
Object.defineProperty(person, "language", {
    value: "EN",
    writable: true,
    enumerable: true,
    configurable: true
});
// Enumerate Properties
var txt = "";
for (var x in person) {
    txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
