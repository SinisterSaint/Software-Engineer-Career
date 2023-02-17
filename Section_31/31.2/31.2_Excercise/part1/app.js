let favoriteNumber = 11;
let baseUrl = "http://numbersapi.com/";


// part1
async function part1() {

    let data = await $.getJSON(`${baseUrl}/${favoriteNumber}?json`);
    console.log(data);
}

part1();

// part2

const favoriteNumbers = [1, 11, 8];
async function part2() {

    let data = await $.getJSON(`${baseUrl}/${favoriteNumbers}?json`);
    console.log(data);
}

// part3
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
      );
      facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
      });
    }
