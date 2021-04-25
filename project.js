document.addEventListener('click',()=>{
const parent = document.querySelectorAll('.child div')
const playerDisplay = document.querySelector('#player')
let currentPlayer = 'playerX'
const itemArray = Array.from(parent)

parent.forEach(item=> {
    item.addEventListener('click', clickOutCome)

})
function clickOutCome(i){
    const index = itemArray.indexOf(i.target)
    playerDisplay.innerHTML = currentPlayer

if(currentPlayer === 'playerX' ){
    currentPlayer = 'playerO'
    parent[index].classList.add('playerX')
}else{
    currentPlayer = 'playerX'
     parent[index].classList.add('playerO')
}
}})







