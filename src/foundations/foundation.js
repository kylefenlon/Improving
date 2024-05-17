"use strict";
let age = 30;
let firstName = 'Angie';
let isWorking = true;
let hobbies = ['reading', 'uno'];
var Shoes;
(function (Shoes) {
    Shoes[Shoes["NB"] = 0] = "NB";
    Shoes[Shoes["Nike"] = 1] = "Nike";
    Shoes[Shoes["Adidas"] = 2] = "Adidas";
})(Shoes || (Shoes = {}));
let shoes = Shoes.Nike;
const createHuman = (human) => {
    return {
        age: human.age,
        firstName: human.firstName,
        isWorking: human.isWorking,
        hobbies: human.hobbies,
        shoes: human.shoes
    };
};
// Example usage:
const angie = {
    age: age,
    firstName: firstName,
    isWorking: isWorking,
    hobbies: hobbies,
    shoes: shoes
};
const newHuman = createHuman(angie);
console.log(newHuman);
