// Memory heap:
// Where memory is allocated for states

// Memory leak:
// When there is too much unused states in a program

// Call stack:
// where our code is executed

// Stack overflow:
// This is when the call stack get filled up with or without a chance of the 
// stacks popping off

// Single threaded:
// Has one call stacks and call stack is called once at a time

// Synchronous Programming:
// call stack is executed once at a time

// Asynchronous Programming:
// Allows JavaScript to run web api functions in the background
// while the call stack continues to be executed

// Web API:
// browser built-in APIs recieves asynchronous codes and executes it

// Callback queue:
// the results are then sent to what is called the callback queue

// Event loop:
// This checks if the call stack is empty, and transfer the codes that are in the callback queue to the call stack

// Callbacks:
// This waits for an action before it gets executed

// Promise:
// Same as aynchronous programming but executes any code (not just web apis) in the background

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('stuff worked');
    } else {
        reject('Error, it broke')
    }
})

promise
    .then(result => console.log(result));

const urls= [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'));

