const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function addItemsToCart(items) {
    user.cart.push(...items);
}

function taxItems(cart) {
    for (let i=0; i < cart.length; i++) {
        cart[i].price *= 1.03;
    }
    }

    function BuyItem(items) {

    }
