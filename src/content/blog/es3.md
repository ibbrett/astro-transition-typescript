---
title: 'ES3 ECMAScript 1999'
description: '3th Edition – ECMAScript 1999'
pubDate: 'Dec 01 1999'
---

- <a href="https://exploringjs.com/impatient-js/ch_regexps.html" target="_blank">regular expressions</a>
  - <a href="https://exploringjs.com/impatient-js/ch_regexps.html#reg-exp-flags" target="_blank">flag support</a>: g (global), i (ignoreCase), m (multiline)
  - support for unicode and sticky to come in ES6, dotAll in ES9, hasIndices in ES13
- <a href="https://exploringjs.com/impatient-js/ch_exception-handling.html#the-try-statement" target="_blank">try/catch</a> exception handling
- new control statements
  - switch statement
  - do-while loop
- better string handling
- tighter definition of errors
- formatting for numeric output

```bash
A regular expression literal is an input element that is converted to a RegExp object 
A RegExp object may also be created at runtime by new RegExp or calling
the RegExp constructor as a function

Regular expression literals may not be empty
To specify an empty regular expression, use /(?:)/

A regular expression literal stands for a value of the Object type. This value is determined in two steps: first, the
characters comprising the regular expression's RegularExpressionBody and RegularExpressionFlags production
expansions are collected uninterpreted into two strings Pattern and Flags, respectively. Then the new RegExp
constructor is called with two arguments Pattern and Flags and the result becomes the value of the
RegularExpressionLiteral.

A RegExp object contains a regular expression and the associated flags.
```