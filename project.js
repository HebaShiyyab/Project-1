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
const checkedFields = itemArray(9).fill('');
current =items.textContent ;

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
})
function init() {
    let current = 'O';
    currentPlayer.textContent = current;
    for (let i = 0; i < fields.length; i++) {
      fields[i].textContent = '';
      checkedFields[i] = '';
    }
  },
function checkWin() {
    for(let i = 0; i < win.length; i++) {
      if (checkedFields[win[i][0]] === current && checkedFields[win[i][1]] === current && checkedFields[win[i][2]] === current) {
        alert(current + ' won!');
        this.init();
        return true;
      } else if (checkedFields.indexOf('') === -1) {
        alert('Tie');
        init();
        return true;
      }
    }
  }
});


