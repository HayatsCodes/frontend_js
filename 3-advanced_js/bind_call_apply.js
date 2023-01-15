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
