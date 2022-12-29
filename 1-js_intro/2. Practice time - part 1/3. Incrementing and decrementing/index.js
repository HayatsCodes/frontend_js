let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}



// Call the functions to that the line below logs out 10
add3points()
add3points()
add3points()
remove1Point()
remove1Point()
add3points()
console.log(myPoints)