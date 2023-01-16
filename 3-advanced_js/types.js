
// Primitive: All non objects - represents only one value in memory and are imutable
typeof 5;
typeof true;
typeof 'hi';
typeof undefined;
typeof undefined;
typeof null;
typeof Symbol('Me');

// Non-Primitive: All objects types - has a reference to where the values are held in memory
typeof {};
typeof [];
typeof function() {};

let five = Number('5');
console.log(typeof five);


// Pass by Value: primitive types are passed by value
var a = 5;
var b = a;
b++;



// Pass by reference: non-primitive types
