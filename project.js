document.addEventListener('clickMe',()=>{
const parent = document.querySelectorAll('.child div')
const playerDisplay = document.querySelector('#player')
let currentPlayer = 'playerX'
parent.forEach(item=> {
    item.addEventListener('Click', clickOutCome)

})
function clickOutCome(i){
    const itemArray = Array.from(parent)
    const items = itemArray.indexOf(i.target)
    playerDisplay.innerHTML = currentPlayer
}
if(currentPlayer=== 'playerX' ){
    currentPlayer = 'playerO'
    parent[index].classList
}else{
    currentPlayer = 'playerX'

}
})







