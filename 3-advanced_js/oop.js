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

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}