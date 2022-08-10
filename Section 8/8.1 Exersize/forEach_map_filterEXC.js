// Write a function called doubleValues which accepts an array and returns a new array 
// with all the values in the array passed to the function doubled
const values = [1, 2, 3];


function doubleValues(values) {
    let newArr = [];
    values.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
  }
//   Write a function called onlyEvenValues which 
//   accepts an array and returns a new array with 
//   only the even values in the array passed to the function
function onlyEvenValues(values) {
    let newArr = [];
    values.forEach(function(val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;

}
// Write a function called showFirstAndLast which accepts an 
// array of strings and returns a new array with only the first 
// and last character of each string.
const Sixers = ['Embiid', 'Harden', 'Maxey', 'Harris', 'Tucker'];

function showFirstAndLast(Sixers){
    let newArr = []
    Sixers.forEach(function(val){
        newArr.push(val[0] + val[val.length - 1]);
    })
    return newArr;
}
// Write a function called addKeyAndValue which accepts an array of
// objects, a key, and a value and returns the array passed to the 
// function with the new key and value added for each object

const players = [
    {
        'name': 'Embiid',
        'position': 'Center',
        'PPG': 33
    },
    {
        'name': 'Harden',
        'position': 'Point Gaurd',
        'PPG': 22
    },
    {
        'name': 'Maxey',
        'position': 'Shooting Gaurd',
        'PPG': 21
    },
    {
        'name': 'Harris',
        'position': 'Small Forward',
        'PPG': 17
    },
    {
        'name': 'Tucker',
        'position': 'Power Forward',
        'PPG': 8
    },
];

function addKeyAndValue(players, key, value){
    players.forEach(function(val){
        val[key] = value;
    });
    return players;
}
// Write a function called vowelCount which accepts a string and
// returns an object with the keys as the vowel and the values as 
// the number of times the vowel appears in the string. This function 
// should be case insensitive so a lowercase letter and uppercase letter 
// should count
const str = 'Saphanley';

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
// Write a function called doubleValuesWithMap which accepts an array
// and returns a new array with all the values in the array passed to 
// the function doubled
function doubleValuesWithMap(values) {
    return values.map(function(val) {
      return val * 2;
    });
  }
// Write a function called valTimesIndex which accepts an array and
// returns a new array with each value multiplied by the index it is
//  currently at in the array. 
function valTimesIndex(values){
    return values.map(function(val, idx){
        return val * idx;
    });
}
// Write a function called extractKey which accepts an array of objects
// and some key and returns a new array with the value of that key in each
// object.
function extractKey(players, key) {
    return players.map(function(val) {
      return val[key];
    });
  }
// Write a function called extractFullName which accepts an array of objects
// and returns a new array with the value of the key with a name of “first” 
// and the value of a key with the name of “last” in each object, concatenated
//  together with a space.
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
function extractFullName (playerNames){
    return playerNames.map(function(val){
        return val.first + " " + val.last;
    });
}
// Write a function called filterByValue which accepts an array of objects
// and a key and returns a new array with all the objects that contain that key. 
function filterByValue (playerNames, key) {
    return playerNames.filter(function(val){
        return val[key] !== undefined;
    });
}
// Write a function called find which accepts an array and a value and returns
// the first element in the array that has the same value as the second parameter
// or undefined if the value is not found in the array.
function find (values, findValue) {
    return values.filter(function(val){
        return val === findValue;
    })[0];
}
// Write a function called findInObj which accepts an array of objects, a key, 
// and some value to search for and returns the first found value in the array.
function findInObj (playerNames, key, findValue) {
    return playerNames.filter(function(val){
        return val[key] === findValue;
    })[0];
}
// Write a function called removeVowels which accepts a string and returns
// a new string with all of the vowels (both uppercased and lowercased)
// removed. Every character in the new string should be lowercased 
function removeVowels (string) {
    const vowels = 'aeiou';
    return string
    .toLowerCase().split("").filter(function(val) {
        return vowels.indexOf(val) === -1;
    })
    .join("");
}
// Write a function called doubleOddNumbers which accepts an array 
// and returns a new array with all of the odd numbers doubled 
// (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers (values) {
    return values.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val * 2;
    });
}
