// OOP is a paradigm whereby data and methods that acts upon the data
// are grouped together
// FP seperates the data from the functions that acts upon it

// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon
//     }
// }

// Factory Functions
// function createElf(name, weapon) {
//     return {
//         name: name,
//         weapon: weapon,
//         attack() {
//             return 'attack with ' + weapon
//         }
//     }
// }

// const elfMethod = {
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// }

// function createElf(name, weapon) {
//     let newElf = Object.create(elfMethod);
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf;
// }

// Constructor Functions

// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
// }

// const peter = new  Elf('Peter', 'stones')
// console.log(peter.name)

// Classes
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

const peter = new  Elf('Peter', 'stones');
console.log(peter.attack());

const sam = new  Elf('Peter', 'fire');
console.log(sam.attack());