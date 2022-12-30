// Create a person object that contains three keys: name, age, and county.
let Person = {
    name: "Hayatudeen",
    age: 20,
    country: "Nigeria"
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData() {
    console.log(`${Person.name} is ${Person.age} years old and lives in ${Person.country}`)
}

// Call the logData() function to verify that it works
logData()