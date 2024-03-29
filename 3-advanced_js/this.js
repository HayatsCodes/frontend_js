// 1: `this` gives methods access to their objects

let sayHi = {
    name: 'Hayats',
    hi() {
        return 'Hi ' + this.name
    }
}

let hi = sayHi.hi();
console.log(hi);

// 2: it also execute same code for multiple objects
function importantPerson() {
    console.log(this.name + '!')
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}

const obj2 = {
    name: 'Jake',
    importantPerson: importantPerson
}

importantPerson();
obj1.importantPerson();
obj2.importantPerson();