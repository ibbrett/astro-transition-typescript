---
title: 'ES3 ECMAScript 1999'
description: '3th Edition – ECMAScript 1999'
pubDate: 'Dec 01 1999'
---

<a href="https://exploringjs.com/impatient-js/ch_regexps.html#creating-regular-expressions" target="_blank">creating regular expressions</a>
```js
// ES3 supported flags: m, i, g
var reg = /pro/ig; // new RegExp('pro', 'ig');
var str = 'Quid Pro Quo, Pro Bono';
var subStr = 'In Exchange For';

// returns boolean - is there a match?
reg.test(str);

// returns a match object for the first match of regExp in str
// run a second time it returns the second match found, and so on
reg.exec(str);

// returns matched values
str.match(reg);

// returns index of first match found
str.search(reg);

// string replace
str.replace(reg, subStr);

// properties
reg.source
reg.flags
reg.lastIndex
```

```js
// the try statement

try {
  nonExistentFunction();
}
catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
} finally {
  console.error("This occurs regardless of whether an exception was thrown or caught.");
} 
```
