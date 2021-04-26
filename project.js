document.addEventListener('DOMContentLoaded', () => {
const parent = document.querySelectorAll('.child div')
const playerDisplay = document.querySelector('#player')
let currentPlayer = 'playerX'


const itemArray = Array.from(parent)

parent.forEach(index=> {
    index.addEventListener('click', clickOutCome)

})
function clickOutCome(i){
    const index = itemArray.indexOf(i.target)
    playerDisplay.innerHTML = currentPlayer

if(currentPlayer === 'playerX' ){
    parent[index].classList.add('playerX')
    currentPlayer = 'playerO'

}else{
    squares[index].classList.add('playerO')
    currentPlayer = 'playerX'
}
}

})







