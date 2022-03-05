const Player = (symbol, name) => {
    let score = 0;
    const getScore = () => score;
    return {getScore, symbol, name};
};

const setup = () => {
    const playerOne = Player('X', `Player 1`);
    const playerTwo = Player('O', `Player 2`);
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
    displayController.setCells(); 
    for(const cell of cells){
        cell.disabled = true;
    }
    let details = setup();
    let startBtn = document.querySelector('.startBtn');
    let result = document.querySelector('.result');
    startBtn.addEventListener('click', () => {
        for(const cell of cells){
            cell.disabled = false;
        }
        let name1 = prompt('P1 Name: ');
        let name2 = prompt('P2 Name: ');
        if(name1.length >= 1){
            details.playerOne.name = name1;
        }
        if(name2.length >= 1){
            details.playerTwo.name = name2;
        }
    });
    let resetBtn = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        let i = 0;
        for(const cell of cells){
            cell.textContent = '';
            board[i] = '';
            i++;
            details.turn = 1;
        }
        i = 0;
        result.textContent = 'Results: ';
    });

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
                result.textContent = `Results: ${details.playerOne.name} wins`;
                // console.log(`${details.playerOne.name} wins`);
                for(const cell of cells){
                    cell.disabled = true;
                }
            }
            else{
                result.textContent = `Results: ${details.playerTwo.name} wins`
                // console.log(`${details.playerTwo.name} wins`);
                for(const cell of cells){
                    cell.disabled = true;
                }
            }
        }
        else if (outcome === 'tie'){
            result.textContent = `It's a draw`;
            // console.log(`It's a draw`);
        }
    }
    clickCells();

})(gameBoard.boardArr);