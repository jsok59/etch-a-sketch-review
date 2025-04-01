
function toggleColor(e) {
    e.target.style.backgroundColor = getRandomColor();

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function createBoard(size = 16){
    for (let i = 1; i<=size; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row-container');

        for (let j = 1; j <= size; j++) {
            const divCell = document.createElement('div');
            divCell.classList.add('cell');
            divCell.addEventListener("mouseover", toggleColor);
            divRow.appendChild(divCell);
        }

        mainContainer.appendChild(divRow);



    }


}

function createSizeButton() {
    const button = document.createElement('button');
    button.classList.add('size-button');
    button.textContent = "Change Size";
    button.addEventListener("click", changeBoard)
    const body = document.querySelector('body');
    body.insertBefore(button, mainContainer);

}

function changeBoard() {
    let size;
    do {
    size = prompt("Pick a size");
    } while (size > 100 && size)
    clearBoard();
    createBoard(size);
}


function clearBoard() {
    const rowList = document.querySelectorAll('.row-container');
    rowList.forEach((row)=>row.remove());
}

const mainContainer = document.querySelector('.main-container');
createSizeButton();
createBoard();