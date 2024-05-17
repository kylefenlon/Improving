let age: number = 30;
let firstName: string = 'Angie';
let isWorking: boolean = true;
let hobbies: string[] = ['reading', 'uno'];

let humans: Array<Human> = [];

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

const angie: Human = {
    age: age,
    firstName: firstName,
    isWorking: isWorking,
    hobbies: hobbies,
    shoes: shoes
};

const newHuman = createHuman(angie);

const removeHuman = (humans: Array<Human>, humanToRemove: Human): Array<Human> => {
    return humans.filter(human => human !== humanToRemove)
}

humans.push(angie)
console.log(humans)

const newList = removeHuman(humans, angie)

console.log(newList)


