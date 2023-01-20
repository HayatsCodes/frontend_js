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

