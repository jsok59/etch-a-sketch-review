
const mainContainer = document.querySelector('.main-container');

function toggleColor(e) {
    e.target.style.backgroundColor = "black";

}


function createBoard(size = 16){
    for (let i = 1; i<=16; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row-container');

        for (let j = 1; j <= 16; j++) {
            const divCell = document.createElement('div');
            divCell.classList.add('cell');
            divCell.addEventListener("mouseover", toggleColor);
            divRow.appendChild(divCell);
        }

        mainContainer.appendChild(divRow);



    }


}


createBoard();