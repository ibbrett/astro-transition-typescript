# Astro Transition TypeScript Blog References 

## sources used in this blog 
| Site                   | Link                                                                                                                                    |
| -------------          | -------------                                                                                                                           |
| wikipedia.org          | [ECMAScript version history](https://en.wikipedia.org/wiki/ECMAScript_version_history)                                                  |
| w3schools.com          | [JavaScript Versions](https://www.w3schools.com/js/js_versions.asp)                                                                     |
| ecma-international.org | [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)                                           |
| webreference.com       | [ECMAScript Versions](https://webreference.com/javascript/basics/versions/)                                                             |
| logismiko.medium.com   | [ECMAScript 1](https://logismiko.medium.com/javascript-versions-ecmascript-1-1997-391b631c0e3c)                                         |
| exploringjs.com        | [Control flow statements](https://exploringjs.com/impatient-js/ch_control-flow.html)                                                    |
| x-team.com             | [ES5 Array Iteration Methods](https://x-team.com/blog/javascript-es5-array-iteration-methods-explained/)                                |
| developer.mozilla.org  | [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)                                               |
| linkedin.com           | [Game-Changing Features in ES10](https://www.linkedin.com/pulse/javascript-evolution-tour-game-changing-features-es10-abdulmoiz-ahmer/) |


## e262 v3 reference
[ECMAScript Language Specification Edition 3, March 24 2000](https://www-archive.mozilla.org/js/language/e262-3.pdf)

### notes
- ECMAScript defines a collection of built-in objects that round out the definition of ECMAScript entities. These builtin objects include the Global object, the Object object, the Function object, the Array object, the String object, the
Boolean object, the Number object, the Math object, the Date object, the RegExp object and the Error objects
Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError and URIError. 

- ECMAScript supports prototype-based inheritance. Every constructor has an associated prototype, and every
object created by that constructor has an implicit reference to the prototype (called the object’s prototype)
associated with its constructor. 

- A value is an entity that takes on one of nine types. There are nine types (Undefined, Null, Boolean, String,
Number, Object, Reference, List, and Completion).

- A Reference is a reference to a property of an object. A Reference consists of two components, the base object
and the property name.

- Values of the List type are simply ordered sequences of values. These sequences may be of any length.

- The Completion type is used to explain the behaviour of statements (break, continue, return and throw) that
perform nonlocal transfers of control. 

- A primitive value is a member of one of the types Undefined, Null, Boolean, Number, or String.

- The undefined value is a primitive value used when a variable has not been assigned a value. The type Undefined has exactly one value, called undefined. 

- The null value is a primitive value that represents the null, empty, or non-existent reference. The type Null has exactly one value, called null. 

- A boolean value is a member of the type Boolean and is one of two unique values, true and false. 

- A string value is a member of the type String and is a finite ordered sequence of zero or more 16-bit unsigned
integer values. 

- A number value is a member of the type Number and is a direct representation of a number. 
