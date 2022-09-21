/*
Write a function called hasOddNumber which accepts an array and 
returns true if the array contains at least one odd number, 
otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/
const numbers = [1, 12, 6, 21, 31, 25, 32, 40, 50];
function hasOddNumber(numbers) {
    return numbers.some(function(val){
        return val % 2 !== 0;
    });
}
/*
Write a function called hasAZero which accepts a number and 
returns true if that number contains at least one zero. 
Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/
function hasAZero(num) {
        return num.toString().split('').some(function(val){
            return val === '0';
        })
    }
/*
Write a function called hasOnlyOddNumbers which accepts 
an array and returns true if every single number in the 
array is odd. If any of the values in the array are not odd, 
the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/
function hasOnlyOddNumbers(numbers) {
    return numbers.some(function(val){
        return val % 2 !== 0;
    });
}
/*
Write a function called hasNoDuplicates which accepts an 
array and returns true if there are no duplicate values 
(more than one element in the array that has the same value 
as another). If there are any duplicates, the function should 
return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/
function hasNoDuplicates(numbers) {
    numbers.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}
/*
Write a function called hasCertainKey which accepts 
an array of objects and a key, and returns true if 
every single object in the array contains that key. 
Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/
const playerNames = [
    {
        first: 'Joel',
        last: 'Embiid',
        AllStar: true
    },
    {
        first: 'James',
        last: 'Harden',
        AllStar: true
    },
    {
        first: 'Tyrese',
        last: 'Maxey',
        AllStar: true
    },
    {
        first: 'PJ',
        last: 'Tucker'
    },
    {
        first: 'Tobias',
        last: 'Harris'
    },
]
function hasCertainKey(playerNames, key) {
    return playerNames.every(function(val){
        return key in val
    });
}
/*
Write a function called hasCertainValue which accepts an array
of objects and a key, and a value, and returns true if every 
single object in the array contains that value for the specific
key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/
function hasCertainValue(playerNames, key, searchValue) {
    return playerNames.every(function(val){
        return val[key] = searchValue;
    })
}
