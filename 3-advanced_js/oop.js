// OOP is a paradigm whereby data and methods that acts upon the data
// are combined to a single state
// FP seperates the data from the functions that acts upon it

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}