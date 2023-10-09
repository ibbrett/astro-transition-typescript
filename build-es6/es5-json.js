"use strict";
// toJSON
const now = new Date();
const nowJSON = now.toJSON();
console.log(now);
console.log(nowJSON);
// JSON object
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;
const jsonObj = JSON.parse(jsonText);
console.log(jsonObj);
console.log(JSON.stringify(jsonObj, null, 4));
// Create an object withn a getter and setter
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    get lang() {
        return this.language;
    },
    set lang(value) {
        this.language = value;
    },
};
// Set an object property using a setter:
person.lang = "en";
// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
