// Functions are special type of object that is callable
// Functions are first class citizens in JS:
// 1. They can be assigned to a variable
var stuff = function() {}
// 2. They can be passed to another function
function a(fn) {
    fn();
}
a(function() {console.log('hi there')});
// 3. They can be returned in a function
function b() {
    return function c() {console.log('bye')}
}
var d = b();
d();

// Higher other functions return a function
const multiplyBy = function(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

console.log(multiplyBy(2)(4));

// Closure allows a function to access variables from an enclosing scope 
// even after it leaves the scope in which it was declared

let view;

function initialize() {
    view = 'view';
    console.log('view has been set');
}

