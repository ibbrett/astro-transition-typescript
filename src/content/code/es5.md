---
title: 'ES5 ECMAScript 2009'
description: '5th Edition – ECMAScript 2009'
pubDate: 'Dec 03 2009'
---

```js
// block scope
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("The value of i:" + i);
// Expected output ES5: 10
function definedA(flag) {
    a = 10;
    if (flag) {
        var a = 20;
    }
    return a;
}
console.log(definedA(false));
console.log(definedA(true));
// Expected output ES5: 10, 20
function undefinedA(flag) {
    if (flag) {
        var a = 10;
    }
    return a;
}
console.log(undefinedA(true));
// Expected output ES5: 10
```

```js
// additional to ES5: trim, charAt, array methods
var untrimmed = " Memento mori ";
console.log('untrimmed: "' + untrimmed + '"');
var trimmed = untrimmed.trim();
console.log('trimmed: "' + trimmed + '"');
var secondChar = trimmed.charAt(1);
console.log('second char:' + secondChar);
var nums = [1, 2, 3, 4, 5];
console.log('nums is an array: ' + Array.isArray(nums));
console.log('forEach() nums');
nums.forEach(function (num) {
    console.log('num: ' + num);
});
console.log('forEach() nums');
nums.forEach(function (num) {
    console.log('num: ' + num);
});
```
