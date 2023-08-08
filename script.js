const squaresContainer = document.querySelector("#squares")
const numberOfSquares = 16;
let i = 0;
let colors = [
    '#ff0000',
    '#ff0000',
    '#00ff00',
    '#00ff00',
    '#0000ff',
    '#0000ff',
    '#ffff00',
    '#ffff00',
    '#ff00ff',
    '#ff00ff',
    '#00ffff',
    '#00ffff',
    '#ffffff',
    '#ffffff',
    '#000000',
    '#000000',
];

function selectColor() {
    //0-15
    const random = Math.floor(Math.random() * colors.length);
    const selected = colors[random];
    colors.splice(random, 1);
    return selected
}

while (i < numberOfSquares) {
    const square = document.createElement("li");
    const color = selectColor();
    square.style.background = color
    squaresContainer.appendChild(square);
    i++;
}


// selectColor();
// selectColor();
// console.log(selectColor());