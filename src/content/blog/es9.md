---
title: 'ES9 ECMAScript 2018'
description: '9th Edition – ECMAScript 2018'
pubDate: 'Jun 01 2018'
---

Additions include:
- the spread operator and rest parameters (...) for object literals, 
- asynchronous iteration
- Promise.prototype.finally
- additions to RegExp

```bash
// The spread operator allows for the easy copying of object properties, as shown below.
let object = {a: 1, b: 2}

let objectClone = Object.assign({}, object) // before ES2018
let objectClone = {...object} // ES2018 syntax

let otherObject = {c: 3, ...object}
console.log(otherObject) // -> {c: 3, a: 1, b: 2}
```
