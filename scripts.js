const body = document.querySelector(".body");
const container = document.getElementById("container");
const userInput = document.querySelector(".userInput");

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
            row.textContent = (i + "-" + j);
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    body.appendChild(grid);
}

makeGrid(size, size);

userInput.addEventListener('click', () => {
    let grid = document.querySelector(".grid");

    let size = parseInt(prompt("Please enter the size of the grid: ", 16));
    while ((size < 0) || (size > 100)) {
        size = parseInt(prompt("Please enter the size of the grid: ", 16));
    }

    console.log(grid);
    body.removeChild(grid);
    makeGrid(size, size);
});

let rows = document.querySelectorAll(".row");

rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
        row.classList.add("hover");
    })
});