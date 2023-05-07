const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn');
const color = document.querySelector(".color");
button.addEventListener('click', function() {
    randomHex = "#";
    for(i = 0; i < 6; i++) {
        randomHex += hex[Math.floor(getRandomNumber())];
    }
    console.log(randomHex);

    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;

})
function getRandomNumber() {
    return Math.random() * hex.length;
}