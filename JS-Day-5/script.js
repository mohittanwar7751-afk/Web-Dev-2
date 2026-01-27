/*
var a = 10;
console.log(a);
function demo() {
    let b = 20;
    console.log(b);
}
demo();
*/


let user={
    Fullname: "Mohit Tanwar",
    Age: 18,
    Email: "abc@gmail.com",
    Address: "India",
    Phone: "1234567890",
    Favcolour: ["Red", "Blue", "Green"]
}

// console.log(Object.keys(user)); //prints all keys of object
// console.log(Object.values(user)); //prints all values of object
// console.log(Object.entries(user)); //prints all key-value pairs as array of arrays
// console.log(user.Favcolour[1]); //prints Blue

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
};

Object.freeze(car); //freezing the object to prevent modification
Object.seal(car); //sealing the object to prevent addition or deletion of properties

car.color = "Red"; //adding new key-value pair
car.year = 2021; //modifying existing key-value pair