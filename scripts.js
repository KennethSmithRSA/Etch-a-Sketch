// Const values:
const DEFAULTSIZE = 16;
const DEFAULTCOLOR = "#333333";

// Global variables that reference elements:
const body = document.querySelector(".body");
const container = document.querySelector(".container");
const userInput = document.querySelector(".userInput");
const solid = document.querySelector(".fill");
const random = document.querySelector(".random");
const lightness = document.querySelector(".light");
const colorPicker = document.querySelector("#colorPicker");
const eraser = document.querySelector(".eraser");

// Global declarations: 
let size = DEFAULTSIZE;

// Create default grid: 
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

// Function that fills block in single solid colour: 
function fill() {
    let rows = document.querySelectorAll(".row");
    
    rows.forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = colorPicker.value;
        })
    });
}

// Function that gets random colour: 
function getRandomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

// Function that fills block in random color: 
function randomColorHover() {
    let rows = document.querySelectorAll(".row");
    
    rows.forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = getRandomColor();
        });
    });
}

// Function that gradually increase the lightness(hsl) of the target block: 
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
        row.addEventListener('mouseover', () => {
            let value = window.getComputedStyle(row).backgroundColor;
            let t = value.slice(4, -1);
            let rgb = t.split(", ");
            row.style.backgroundColor = "hsl(0, 0%, " + increaseLightness(rgb) + "%)";
        });
    });
}

// Function that fills blocks in white to erase:
function erase() {
    let rows = document.querySelectorAll(".row");

    rows.forEach((row) => {
        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "white";
        })
    })
}

makeGrid(size, size);

function changeColor(element) {
    solid.style.backgroundColor = "white";
    random.style.backgroundColor = "white";
    lightness.style.backgroundColor = "white";
    eraser.style.backgroundColor = "white";

    solid.style.color = "black";
    random.style.color = "black";
    lightness.style.color = "black";
    eraser.style.color = "black";

    element.style.backgroundColor = "grey";
    element.style.color = "white";
}

solid.addEventListener("click", () => {
    fill()
})

random.addEventListener("click", () => {
    randomColorHover();
})

lightness.addEventListener("click", () => {
    increaseLightnessHover();
})

eraser.addEventListener("click", () => {
    erase();
})

userInput.addEventListener('click', () => {
    let grid = document.querySelector(".grid");

    let size = parseInt(prompt("Please enter the size of the grid: ", 16));
    while (!((size > 0) && (size < 100))) {
        size = parseInt(prompt("Please enter the size of the grid: ", 16));
    }

    container.removeChild(grid);
    makeGrid(size, size);
});