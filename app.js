const colors = ["green", "red", "orange", "pink", "lime", "yellow","grey", "aqua", "beige", "aquamarine", "Crimson", "Cyan", "Violet", "Fushia", "Gold", "Khaki", "Ivory", "Purple", "Wheat", "Turquoise", "Teal", "Tan" ];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // get random number between 0-3
    const randomNumber = Math.floor(getRandomNumber());
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.random()*colors.length;
}