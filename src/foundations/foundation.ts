let age: number = 30;
let firstName: string = 'Angie';
let isWorking: boolean = true;
let hobbies: string[] = ['reading', 'uno'];

enum Shoes { NB, Nike, Adidas }

let shoes: Shoes = Shoes.Nike;

interface Human {
    age: number;
    firstName: string;
    isWorking: boolean;
    hobbies: Array<string>;
    shoes: Shoes;
}

const createHuman = (human: Human): Human => {
    return {
        age: human.age,
        firstName: human.firstName,
        isWorking: human.isWorking,
        hobbies: human.hobbies,
        shoes: human.shoes
    };
}

// Example usage:
const angie: Human = {
    age: age,
    firstName: firstName,
    isWorking: isWorking,
    hobbies: hobbies,
    shoes: shoes
};

const newHuman = createHuman(angie);
console.log(newHuman);
