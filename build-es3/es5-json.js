"use strict";
// toJSON
var now = new Date();
var nowJSON = now.toJSON();
console.log(now);
console.log(nowJSON);
// JSON object
var jsonText = "{\n  \"browsers\": {\n    \"firefox\": {\n      \"name\": \"Firefox\",\n      \"pref_url\": \"about:config\",\n      \"releases\": {\n        \"1\": {\n          \"release_date\": \"2004-11-09\",\n          \"status\": \"retired\",\n          \"engine\": \"Gecko\",\n          \"engine_version\": \"1.7\"\n        }\n      }\n    }\n  }\n}";
var jsonObj = JSON.parse(jsonText);
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
    }
};
// Set an object property using a setter:
person.lang = "en";
// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
