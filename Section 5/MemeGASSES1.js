const inputForImageFile = document.getElementById('inputForIMG');
const inputForTopText = document.getElementById('inputForTopText');
const inputForBottomText = document.getElementById('inputForBottomText');
const memeCanvas = document.getElementById('memecanvas');
const button = document.getElementById('submit');
const getImg = document.getElementById('img');
const p = document.getElementById('text');
const bp = document.getElementById('bottomtext');


button.addEventListener ("click", function (e) {
e.preventDefault()
console.log(inputForImageFile.value);
p.innerText = inputForTopText.value;
bp.innerText = inputForBottomText.value;
getImg.src = inputForImageFile.value;
})


