let game = document.querySelector('#output');
let turn = 'X';
let winner = '$$Winner$$';
for (let i = 0; i < 9; i++) {
    let el = document.createElement('div');
    el.setAttribute('data-idx', i);
    el.addEventListener('click', function() {
        //first click is an X
        //second click is an O
        console.log('Hello');

       if (el.innerText == '') {           
           if (turn == 'X') {
               el.innerText = 'X';
               turn = 'O';
           } 
           else {
               el.innerText = 'O';
               turn = 'X';
           }
       }
       //if all boxs in a row are equal declare a winner
       //if all boxs in a column are equal declare a winner
       //if all boxs diagonaly are equal declare a winner
      

        
        
        
        //start new game
        //X will be first
        //first player 1 insert an X
        //second player 2 insert an O
        //game is over when either a row of three is equal
        //or all boxes have been filled
    })
    game.appendChild(el);
}
