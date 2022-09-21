const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
}

let favoriteNumber = 42;
const instructor = {
    firstName: "Saphanley",
    [favoriteNumber]: 'That is my favorite number!'
}

const instructor2 = {
    firtName: "Ariel",
    sayHi(){
        return 'Hi!'
    },
    sayBye(){
        return this.firstName + 'says bye!';
    }
}
const d = createAmimal("dog", "bark", "Woooof!")
d.bark()

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet()

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}