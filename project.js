document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelectorAll('.parent div');
    const playerDisplay = document.getElementById('player');
    const newGame = document.getElementsByClassName('button1')[0]
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
    
    
    let currentPlayer = 'playerX';
    
    const itemArray = Array.from(board)
    
    
    board.forEach(index=> {
        index.addEventListener('click', clickOutCome)
    
    })
     function clickOutCome(e){
        const items = itemArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer
    
    if(currentPlayer === 'playerX' ){
        board[items].classList.add('playerX')
        currentPlayer = 'playerO'
    
    }else{
        board[items].classList.add('playerO')
        currentPlayer = 'playerX'
    }
    newGame.addEventListener('click',()=>{
      board.forEach(index=> {
       index.classList=""
    
    })
    })
    }
    })
    
    /* check win
    reset
    alert winner  */
    