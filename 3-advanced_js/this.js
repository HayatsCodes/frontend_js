// 1: `this` gives methods access to their objects
// 2: it also execute same code for multiple objects

let sayHi = {
    name: 'Hayats',
    hi() {
        return 'hi' + this.name
    }
}

let hi = sayHi.hi();