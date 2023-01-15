// Call: it's a method that every function uses when they're invoked
function a() {
    console.log('a');
}

console.log(a.call() == a());

