// What does the following code return/print?
let facts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846
};

let {numPlanets, yearNeptuneDiscovered} = facts;
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// What does the following code return/print?
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveredYears} = planetFacts;
console.log(discoveredYears); //  {yearNeptuneDicovered: 1846, yearMarsDiscovered: 1659}

// What does the following code return?
function getUserDate({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"});
// Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"});
// Your name is Melissa and you like green
getUserData({});
// Your name is undefined and you like green

// What does the following code return/print?
let [first, second, third] =["Maya", "Marisa", "Chi"];
console.log(first); // Maya
console.log(second); //Marisa
console.log(second); // Chi

let [raindrops, whiskers, ...aFewOfFavoriteThing] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
];

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10,20,30]

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const {a,b} = obj.numbers;

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
// {first: 'Tom', second: 'Margaret, third: 'Allison, rest: ['David', 'Pierre;]}
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});