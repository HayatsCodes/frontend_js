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


let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table

  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

console.log(pockets.pen);
console.log(bed.glasses);

let hamster = {
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple