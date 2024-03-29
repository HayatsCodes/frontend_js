// the rules of Pure Functions:
// 1. The same input should always produce the same output
// 2. The function should not change anything outside of its block scope
// i.e no side effects should be recorded

const array = [1, 2, 3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map((item) => item*2);
}

const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);
console.log(array, array2, array3);

// Characteristics of a Perfect Functions:
// 1. does one task
// 2. has a return statement
// 3. a pure function
// 4. has no shared states
// 5. has immutable states
// 6. Composable
// 7. Predictable

// Indempotence:
// input always gives the same result but might not be pure

// Imperative vs declarative:
// Imperative tells computer what to do and how to do it
// declarative tell computer what to do but not how to do it.

// Immutability:
// Not Changing the state or data but rather making a copy of it.


// Higher Order Function:
// returns a function or accepts a function as parameter

// Closure:
// accessing the state of the parent functions even after it has returned

// Currying:
// turning functions that accept multiple arguments 
// to one that accept just one arguments at a time

let multiply = (a) => (b) => a * b
const multiplyBy3 = multiply(3);
console.log(multiplyBy3(2));

// Partial Application:
// Same as currying but after the first call, 
// work on all ther arguments at the same time.


multiply = (a, b, c) => b * c * a;
const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(4, 12));

// Caching:
// Cahing is a way of storing data so that it can be used later

// Memoization:
// It's a type of caching that stores the return value of a function
// based on the parameter passed to the function

// Compose:
// It deals with the relationship between components (functions)

let compose = (f, g) => (data) => f(g(data));
let makePositive = (num) => Math.abs(num);
let multiplyBy3AndAbs = compose(multiplyBy3, makePositive)
console.log(multiplyBy3AndAbs(-50));

// Pipe:
// Compose in the reverse order.

compose = (f, g) => (data) => g(f(data));
makePositive = (num) => Math.abs(num);
multiplyBy3AndAbs = compose(multiplyBy3, makePositive);
console.log(multiplyBy3AndAbs(-50));

// Arity:
// The number of arguments in a function




// Amazon Shopping

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const composer = (f, g) => (...args) => f(g(...args));
console.log(purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name:'laptop', price: 200}));

function purchaseItem(...fns) {
    return fns.reduce(composer);
}

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updateCart});
}

function applyTaxToItems(user) {
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    });
    return Object.assign({}, user, {cart: updatedCart})
}

function buyItem(user) {
    return Object.assign({}, user, { purchases: user.cart})
}

function emptyCart(user) {
    return Object.assign({}, user, { cart: []}) 
}
