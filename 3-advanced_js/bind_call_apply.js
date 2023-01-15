// Call(): 1. it's a method that every function uses when they're invoked
function a() {
    console.log('a');
}

console.log(a.call() == a());

//  Call: 2. it can also be use to call methods of a objects on another objects
const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

console.log(1, archer);
wizard.heal.call(archer, 30, 40);
console.log(2, archer);

// Apply: Same as Call() except that the arguments passed is in an array
wizard.heal.apply(archer, [20, 35]);
console.log(3, archer);

// Bind(): same as call() but returns another function
const healArcher = wizard.heal.bind(archer, 5, 10);
healArcher();
console.log(4, archer);

// Function currying
function multiply(a, b) {
    return a*b;
}

let multiplyByTwo = multiply.bind(this, 2);
for (let i = 1; i <= 12; i++) {
    console.log(`2 * ${i} = ${multiplyByTwo(i)}`);
}