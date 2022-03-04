let p1name = document.querySelector('#p1name');
let p2name = document.querySelector('#p2name');
console.log(p1name.value);
const Player = (symbol) => {
    let score = 0;
    let name = 'Anonymous';
    const getScore = () => score;
    return {getScore, symbol, name};
};

const setup = () => {
    const playerOne = Player('X');
    const playerTwo = Player('O');
    if(p1name.value !== ''){
        playerOne.name = p1name.value;
    }
    else{
        playerOne.name = 'Player One';
    }
    if(p2name.value !== ''){
        playerTwo.name = p2name.value;
    }
    else{
        playerTwo.name = 'Player Two';
    }
    
    let turn = 1;
    return {playerOne, playerTwo, turn};
};

const gameBoard = (() => {
    let boardArr = ['', '', '', '', '', '', '', '', ''];
    return{boardArr};    
})();

const displayController = ((board) => {
    const cells = document.querySelectorAll('.grid-cell');


    const setCells = () => {
        for(let i = 0; i < board.length; i++){
            cells[i].textContent = board[i];
            cells[i].setAttribute('data-index', `${i}`);
        }
    };
    return{setCells};
})(gameBoard.boardArr);

const gameLoop = ((board) => {
    const cells = document.querySelectorAll('.grid-cell');
    let details = setup();

    const clickCells = () => {
        for(const cell of cells){
            cell.addEventListener('click', (e) =>{
                if(cell.textContent === ''){
                    if (details.turn === 1){
                        board[e.target.getAttribute('data-index')] = details.playerOne.symbol;
                        cell.textContent = details.playerOne.symbol;
                        logVictory();
                        details.turn = 2;
                    }
                    else{
                        board[e.target.getAttribute('data-index')] = details.playerTwo.symbol;
                        cell.textContent = details.playerTwo.symbol;
                        logVictory();
                        details.turn = 1;
                    }
                }
            });
        }
    }

    const checkGameState = () => {
        let outcome = 'unresolved';
        if(((board[0] === details.playerOne.symbol) && (board[1] === details.playerOne.symbol) && 
        (board[2] === details.playerOne.symbol)) || ((board[0] === details.playerTwo.symbol) && (board[1] === details.playerTwo.symbol) && 
        (board[2] === details.playerTwo.symbol))){
            outcome = 'victory';
        }
        else if(((board[3] === details.playerOne.symbol) && (board[4] === details.playerOne.symbol) && 
        (board[5] === details.playerOne.symbol)) || ((board[3] === details.playerTwo.symbol) && (board[4] === details.playerTwo.symbol) && 
        (board[5] === details.playerTwo.symbol))){
            outcome = 'victory';
        }
        else if(((board[6] === details.playerOne.symbol) && (board[7] === details.playerOne.symbol) && 
        (board[8] === details.playerOne.symbol)) || ((board[6] === details.playerTwo.symbol) && (board[7] === details.playerTwo.symbol) && 
        (board[8] === details.playerTwo.symbol))){
            outcome = 'victory';
        }
        else if(((board[0] === details.playerOne.symbol) && (board[4] === details.playerOne.symbol) && 
        (board[8] === details.playerOne.symbol)) || ((board[0] === details.playerTwo.symbol) && (board[4] === details.playerTwo.symbol) && 
        (board[8] === details.playerTwo.symbol))){
            outcome = 'victory';
        }
        else if(((board[2] === details.playerOne.symbol) && (board[4] === details.playerOne.symbol) && 
        (board[6] === details.playerOne.symbol)) || ((board[2] === details.playerTwo.symbol) && (board[4] === details.playerTwo.symbol) && 
        (board[6] === details.playerTwo.symbol))){
            outcome = 'victory';
        }
        else if(((board[0] === details.playerOne.symbol) && (board[3] === details.playerOne.symbol) && 
        (board[6] === details.playerOne.symbol)) || ((board[0] === details.playerTwo.symbol) && (board[3] === details.playerTwo.symbol) && 
        (board[6] === details.playerTwo.symbol))){
            outcome = 'victory';
        }
        else if(((board[1] === details.playerOne.symbol) && (board[4] === details.playerOne.symbol) && 
        (board[7] === details.playerOne.symbol)) || ((board[1] === details.playerTwo.symbol) && (board[4] === details.playerTwo.symbol) && 
        (board[7] === details.playerTwo.symbol))){
            outcome = 'victory';
        }
        else if(((board[2] === details.playerOne.symbol) && (board[5] === details.playerOne.symbol) && 
        (board[8] === details.playerOne.symbol)) || ((board[2] === details.playerTwo.symbol) && (board[5] === details.playerTwo.symbol) && 
        (board[8] === details.playerTwo.symbol))){
            outcome = 'victory';
        }
        else if((board[0] !== '') && (board[1] !== '') && (board[2] !== '') && (board[3] !== '') && (board[4] !== '') && (board[5] !== '') && (board[6] !== '')
        && (board[7] !== '')  && (board[8] !== '')){
            outcome = 'tie';
        }
        return outcome;
    }

    const logVictory = () => {
        let outcome = checkGameState();
        if (outcome === 'victory'){
            if(details.turn === 1){
                console.log(`${details.playerOne.name} wins`);
            }
            else{
                console.log(`${details.playerTwo.name} wins`);
            }
        }
        else if (outcome === 'tie'){
            console.log(`It's a draw`);
        }
    }
    displayController.setCells();  
    clickCells();

})(gameBoard.boardArr);