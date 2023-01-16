
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

console.log(a);
console.log(b);

// Pass by reference: non-primitive types
let obj1 = {name: 'abc', pwd: 1234}
let obj2 = obj1;
obj2.pwd = 6543;

console.log(obj1);
console.log(obj2);

var c = [1,2,3,4 ,5];
var d = c;
d.push(7);
console.log(c);
console.log(d);

// How to modify a non-primitive type 
d = [].concat(c);
d.push(8)
console.log(d);

let obj = {a: 1, b: 2, c: 3}
let clone = Object.assign({}, obj);
clone.c = 5;
let clone2 = {...clone}

console.log(obj);
console.log(clone);
