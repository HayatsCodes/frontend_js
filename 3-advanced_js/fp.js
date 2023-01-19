const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function addItemsToCart(items) {
    for (let i in items) {
        user.cart.push(i);
    }
}

function taxItems(items) {
    for (let i in items) {
        
    }
}