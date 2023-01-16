// Functions are special type of object that is callable
// Functions are first class citizens in JS:
// 1. They can be assigned to a variable
var stuff = function() {}
// 2. They can be passed as a parameter to another function
function a(fn) {
    fn()
}
// 3. They can be returned in a function