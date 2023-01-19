let animal = {
    eats: true,
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true

animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

rabbit = {
    jumps: true,
};
Object.setPrototypeOf(rabbit, animal);
console.log(Object.getPrototypeOf(rabbit));
// walk is taken from the prototype
rabbit.walk(); // Animal walk
