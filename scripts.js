const body = document.querySelector(".body");
let container = document.querySelector(".container");
const userInput = document.querySelector(".userInput");

let size = 16;

console.log(container)

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
hover();

function hover() {
    let rows = document.querySelectorAll(".row");

    rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
        console.log(row);
        row.classList.add("hover");
    })
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
    hover();
});