const gameLoop = (function(){
    
})();

const gameBoard = (function(){
    let boardArr = [['X', 'O', 'X'],['O', 'O', 'X'],['X', 'O', 'X']];
    return{boardArr};    
})();

const displayController = (function(board){
    return{};
})();

const Player = (symbol) => {
    let score = 0;
    const getScore = () => score;
    return {getScore};
}