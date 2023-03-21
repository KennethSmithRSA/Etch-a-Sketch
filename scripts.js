const body = document.querySelector(".body");
let container = document.querySelector(".container");
const userInput = document.querySelector(".userInput");
const solid = document.querySelector(".fill");
const random = document.querySelector(".random");
const lightness = document.querySelector(".random");

let size = 16;

function makeGrid(columns, rows) {
    let grid = document.createElement('div');
    grid.className = "grid";

    for (let i = 0; i < columns; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < rows; j++) {
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    container.appendChild(grid);
}

makeGrid(size, size);
// hover();
// randomColorHover();
increaseLightnessHover();


// Change row to solid black
// function hover() {
//     let rows = document.querySelectorAll(".row");

//     rows.forEach((row) => {
//         row.addEventListener('mouseenter', () => {
//             row.classList.add("hover");
//         })
// });
// }

// Change row to random RGB value
/* function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

function randomColorHover() {
    let rows = document.querySelectorAll(".row");
    
    rows.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = randomColor();
        });
    });
}*/

// Change row to a higher 'lightnessvalue':
function increaseLightness(rgb) {
    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    let l = (Math.max((r/255), (g/255), (b/255)) + Math.min((r/255), (g/255), (b/255))) / 2;
    return l * 50;
}

function increaseLightnessHover() {
    let rows = document.querySelectorAll(".row");

    rows.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            let value = window.getComputedStyle(row).backgroundColor;
            let t = value.slice(4, -1);
            let rgb = t.split(", ");
            row.style.backgroundColor = "hsl(0, 0%, " + increaseLightness(rgb) + "%)";
            console.log(increaseLightness(rgb));
        });
    });
}

userInput.addEventListener('click', () => {
    let grid = document.querySelector(".grid");

    let size = parseInt(prompt("Please enter the size of the grid: ", 16));
    while ((size < 0) || (size > 100)) {
        size = parseInt(prompt("Please enter the size of the grid: ", 16));
    }

    container.removeChild(grid);
    makeGrid(size, size);
    // hover();
    // randomColorHover();
    increaseLightnessHover();
});