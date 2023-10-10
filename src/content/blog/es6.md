---
title: 'ES6 ECMAScript 2015'
description: '6th Edition – ECMAScript 2015, aka ES6 Harmony'
pubDate: 'Jun 17 2015'
---

Additions:
- let, const
- arrow functions
- Promises
- Classes
- Spread Operator (...)
- for ... in loop
- import/export
- template literals using backticks (`), and for multi-line strings without escape characters
- Python-style generators
- binary data
- typed arrays
- new collections (maps, sets and WeakMap)
- number and math enhancements
- reflection
- proxies (metaprogramming for virtual objects and wrappers)

```js
// the spread operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
```
