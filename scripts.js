const body = document.querySelector(".body");
const container = document.getElementById("container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let block = document.createElement("div");
        block.innerText = (i + 1);
        container.appendChild(block).className = "block";
    };
};

makeGrid(16, 16);