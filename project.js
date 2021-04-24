class Game(X , O){
    let items = new Array(9).fill(undefined);
    let result = undefined;
    let turn = 'X';

    const winCombinations=[
    
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
          ];
    function setValue(i){
        items[i]=turn;
        items=[...items];
        turn= turn=='X'?'O':'X';
        if(!items.includes(undefined)){

        }else{
           checkWinner(); 
        }




}
