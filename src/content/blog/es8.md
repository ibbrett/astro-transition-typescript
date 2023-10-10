---
title: 'ES8 ECMAScript 2017'
description: '8th Edition – ECMAScript 2017'
pubDate: 'Jun 01 2017'
---

Additions:
- Object methods: values(), entries() 
- Object.getOwnPropertyDescriptors()
  - static method returns all own property descriptors of a given object.
- async / await constructions which use generators and promises
- additional features for concurrency and atomics
- string padding
- shared memory
- trailing commas for function parameters


```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

```js
const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
```
