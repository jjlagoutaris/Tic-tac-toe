const gameBoard = (() => {
    let boardArr = [['X', '', ''],['X', 'O', ''],['', '', '']];
    return{boardArr};    
})();

const displayController = ((board) => {
    const cells = document.querySelectorAll('.grid-cell');
    let cellCounter = 0;
    const updateCells = () => {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                cells[cellCounter].textContent = board[i][j];
                cellCounter++;
            }
        }
        cellCounter = 0;
    };
    return{updateCells};
})(gameBoard.boardArr);

const Player = (symbol) => {
    let score = 0;
    const getScore = () => score;
    return {getScore};
}

const gameLoop = (() => {
    displayController.updateCells();
})();