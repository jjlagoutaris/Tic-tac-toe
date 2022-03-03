let button = document.querySelector('button');




// const body = document.querySelector('body');

// function instantiateMenu(){

//     const startBtn = document.createElement('button');
//     startBtn.className = 'start';
//     startBtn.textContent = 'START';

//     const info = document.createElement('fieldset');
//     info.className = 'info';

//     const playerOneName = document.createElement('input');
//     info.appendChild(playerOneName);

//     let header = document.createElement('header');
//     header.textContent = 'Tic-Tac-Toe';

//     let cellBoard = document.createElement('div');
//     cellBoard.id = 'gameboard';

//     for(let i = 0; i < 9; i++){
//         let cell = document.createElement('button');
//         cell.setAttribute('class', `grid-cell cell${i+1}`);
//         cellBoard.appendChild(cell);
//     }

//     body.appendChild(header);
//     body.appendChild(cellBoard);
//     body.appendChild(info);
//     body.appendChild(startBtn);

//     startBtn.addEventListener('click', function instantiateBoard(){
//         body.removeChild(startBtn);
//         body.removeChild(info);
//         // body.appendChild(header);
//         // body.appendChild(cellBoard);
//     });
// }

// instantiateMenu();