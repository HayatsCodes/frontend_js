// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }

// function addItemsToCart(items) {
//     user.cart.push(...items);
// }

// function taxItems(cart) {
//     for (let i = 0; i < cart.length; i++) {
//         cart[i].price *= 1.03;
//     }
// }

// function BuyItem(cart) {
//     user.purchases.push(...cart);
//     emptyCart();
// }

// function emptyCart() {
//     user.cart = [];
// }

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
// input gives the same result but might not be pure

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

const multiply = (a) => (b) => a * b
const multiplyBy3 = multiply(3);
console.log(multiplyBy3(2));

// Partial Application:
// Same has 
